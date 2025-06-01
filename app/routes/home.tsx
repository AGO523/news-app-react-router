import * as schema from "~/database/schema";
import type { Route } from "./+types/home";
import NewsForm from "~/components/NewsForm";
import { createNews } from "../.server/database";
import { Outlet, redirect } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ニュース要約配信" },
    {
      name: "description",
      content: "ニュースを要約して毎日配信するサービスです。",
    },
  ];
}

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

// export async function action({ request, context }: Route.ActionArgs) {
//   const formData = await request.formData();
//   let name = formData.get("name");
//   let email = formData.get("email");
//   if (typeof name !== "string" || typeof email !== "string") {
//     return { guestBookError: "Name and email are required" };
//   }

//   name = name.trim();
//   email = email.trim();
//   if (!name || !email) {
//     return { guestBookError: "Name and email are required" };
//   }

//   try {
//     await context.db.insert(schema.guestBook).values({ name, email });
//   } catch (error) {
//     return { guestBookError: "Error adding to guest book" };
//   }
// }

// export async function loader({ context }: Route.LoaderArgs) {
//   const guestBook = await context.db.query.guestBook.findMany({
//     columns: {
//       id: true,
//       name: true,
//     },
//   });

//   return {
//     guestBook,
//     message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE,
//   };
// }

export default function Home({ actionData, loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-600 to-blue-800 text-gray-800 p-8 space-y-6">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6">
        <div className="mt-6 text-center">
          <NewsForm />
          {/* <Link
            to="news"
            className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full shadow hover:bg-teal-700 transition"
          >
            購読するニュースを登録
          </Link> */}
        </div>
      </div>

      <Outlet />
    </div>
  );
}
