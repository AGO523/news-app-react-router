import { Form, useNavigation } from "react-router";

export default function NewsForm() {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">ニュース作成</h1>

      {isSubmitting && (
        <div className="text-center text-sm text-gray-600 mb-4">
          フォームを送信しています...
        </div>
      )}

      <Form
        method="post"
        className={`space-y-4 ${
          isSubmitting ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <input type="hidden" name="repositoryName" value="newsAppReactRouter" />
        <input
          type="hidden"
          name="prompt"
          value={`あなたは優秀なリサーチャーです。私は「\${topic}」について、最新の情報をキャッチアップしたいと考えています。現在の日時を取得して、「\${topic}」について、信頼性の高いニュースソースを3件検索して要約してください。それぞれのニュースについて簡潔な要約と参照URLを必ず記載してください。`}
        />

        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800 mb-1"
            >
              メールアドレス
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-semibold text-gray-800 mb-1"
            >
              トピック
            </label>
            <input
              id="topic"
              name="topic"
              type="text"
              required
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition text-gray-700"
            />
          </div>

          <div>
            <label
              htmlFor="optionalText"
              className="block text-sm font-semibold text-gray-800 mb-1"
            >
              補足テキスト
            </label>
            <textarea
              id="optionalText"
              name="optionalText"
              rows={4}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition text-gray-700"
            />
          </div>
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          <span className="flex items-center justify-center">
            {isSubmitting && (
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8A8.009 8.009 0 0 1 12 20z"
                />
              </svg>
            )}
            {isSubmitting ? <span>登録中...</span> : <span>登録</span>}
          </span>
        </button>
      </Form>
    </div>
  );
}
