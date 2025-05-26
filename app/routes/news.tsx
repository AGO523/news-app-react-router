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

  const prompt = formData.get("prompt") as string;
  const formatedPrompt = prompt.replace(
    "あなたは優秀なリサーチャーです。",
    "あなたは優秀なリサーチャーです。次の1と2のルールを絶対に遵守してください。1: 結果には要約文とニュースソースだけを記載してください。2: メールで文章を表示することを前提として、読みやすい結果にしてください。"
  );

  console.log("Formatted Prompt:", formatedPrompt);

  const message = {
    id: result.id,
    uuid: crypto.randomUUID(),
    email: formData.get("email"),
    topic: formData.get("topic"),
    optionalText: formData.get("optionalText"),
    repositoryName: formData.get("repositoryName"),
    prompt: formatedPrompt,
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
        "x-api-key": env.API_GATEWAY_KEY || "",
      },
      body: JSON.stringify(payload),
    });

    const resText = await response.text();
    console.log("Gateway Response:", response.status, resText);

    if (!response.ok) {
      console.log("failed:", response);
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
