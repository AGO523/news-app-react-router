import { redirect } from "react-router";
import type { Route } from "./+types/news";
import { createNews } from "../.server/database";
import NewsForm from "~/components/NewsForm";

export async function action({ request, context }: Route.ActionArgs) {
  const formData = await request.formData();
  const result = await createNews(context.db, formData);

  if (!result) {
    return { error: "作成に失敗しました。再度お試しください。" };
  }

  const env = context.cloudflare.env;
  const gatewayUrl = env.API_GATEWAY_URL;

  if (!gatewayUrl) {
    return { error: "作成に失敗しました。再度お試しください。" };
  }

  const message = {
    id: result.id,
    uuid: crypto.randomUUID(),
    email: formData.get("email"),
    topic: formData.get("topic"),
    optionalText: formData.get("optionalText"),
    repositoryName: formData.get("repositoryName"),
    prompt: formData.get("prompt"),
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
    const response = await fetch(`${gatewayUrl}/publish`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
