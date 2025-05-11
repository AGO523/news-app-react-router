import { redirect } from "react-router";
import type { Route } from "./+types/news";
import { createNews } from "../.server/database";
import NewsForm from "~/components/NewsForm";

export async function action({ request, context }: Route.ActionArgs) {
  const formData = await request.formData();
  const result = await createNews(context.db, formData);

  if (!result) {
    console.error("createNews failed");
    return { error: "作成に失敗しました。再度お試しください。" };
  }

  console.log("Created news:", result);

  const env = context.cloudflare.env;
  const apiKey = env.API_GATEWAY_KEY;
  const gatewayUrl = env.API_GATEWAY_URL;

  if (!apiKey || !gatewayUrl) {
    return { error: "作成に失敗しました。再度お試しください。" };
  }

  const message = {
    id: result.id,
    topic: formData.get("topic"),
    optionalText: formData.get("optionalText"),
    createdAt: Date.now(),
  };

  const encoded = Buffer.from(JSON.stringify(message)).toString("base64");

  const payload = {
    messages: [
      {
        data: encoded,
      },
    ],
  };

  try {
    const response = await fetch(gatewayUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    const resText = await response.text();
    console.log("Gateway Response:", response.status, resText);

    if (!response.ok) {
      throw new Error(`Publish failed: ${response.status}`);
    }
  } catch (err) {
    console.error("Publish error:", err);
    return { error: "通知送信に失敗しました。" };
  }

  return redirect("/");
}

export default function News() {
  return <NewsForm />;
}
