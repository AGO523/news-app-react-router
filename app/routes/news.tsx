import { Form, redirect } from "react-router";
import type { Route } from "./+types/news";
import { createNews } from "../services/database";

export async function action({ request, context }: Route.ActionArgs) {
  const formData = await request.formData();
  const result = await createNews(context.db, formData);

  return redirect("/news");
}

export default function NewsForm() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">ニュース作成</h1>
      <Form method="post" className="space-y-4">
        <div>
          <label
            htmlFor="userId"
            className="block text-sm font-medium text-gray-700"
          >
            ユーザーID
          </label>
          <input
            id="userId"
            name="userId"
            type="number"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            メールアドレス
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="topic"
            className="block text-sm font-medium text-gray-700"
          >
            トピック
          </label>
          <input
            id="topic"
            name="topic"
            type="text"
            required
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="optionalText"
            className="block text-sm font-medium text-gray-700"
          >
            補足テキスト
          </label>
          <textarea
            id="optionalText"
            name="optionalText"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="progressStatus"
            className="block text-sm font-medium text-gray-700"
          >
            進捗ステータス
          </label>
          <select
            id="progressStatus"
            name="progressStatus"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">選択してください</option>
            <option value="pending">保留</option>
            <option value="in_progress">進行中</option>
            <option value="completed">完了</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="subscriptionStatus"
            className="block text-sm font-medium text-gray-700"
          >
            購読ステータス
          </label>
          <select
            id="subscriptionStatus"
            name="subscriptionStatus"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">選択してください</option>
            <option value="subscribed">購読中</option>
            <option value="unsubscribed">購読解除</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          登録
        </button>
      </Form>
    </div>
  );
}
