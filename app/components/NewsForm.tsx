import { Form } from "react-router";

export default function NewsForm() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">ニュース作成</h1>
      <Form method="post" className="space-y-4">
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
