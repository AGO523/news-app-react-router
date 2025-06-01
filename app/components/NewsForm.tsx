import { Form, useNavigation } from "react-router";
import { useState } from "react";

export default function NewsForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [topic, setTopic] = useState("");
  const [optionalText, setOptionalText] = useState("");

  const promptTemplate = `あなたは優秀なリサーチャーです。
私は「\${topic}」について、最新の情報をキャッチアップしたいと考えています。
現在の日時を取得して、「\${topic}」について、信頼性の高いニュースソースを3件検索して要約してください。
それぞれのニュースについて簡潔な要約と参照URLを必ず記載してください。
${optionalText ? `補足: ${optionalText}` : ""}`.trim();

  const prompt = promptTemplate.replace(/\$\{topic\}/g, topic || "トピック名");

  return (
    <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6">
      <h1 className="text-3xl font-bold text-center mb-6">ニュース作成</h1>

      {isSubmitting && (
        <div className="text-center text-sm text-teal-100 mb-4">
          フォームを送信しています...
        </div>
      )}

      <Form
        method="post"
        className={`space-y-6 ${
          isSubmitting ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <input type="hidden" name="repositoryName" value="newsAppReactRouter" />
        <input type="hidden" name="prompt" value={prompt} />

        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white mb-1"
            >
              メールアドレス
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md placeholder:text-white/60 focus:ring-2 focus:ring-teal-400 focus:outline-none text-white"
            />
          </div>

          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-semibold text-white mb-1"
            >
              トピック
            </label>
            <input
              id="topic"
              name="topic"
              type="text"
              required
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md placeholder:text-white/60 focus:ring-2 focus:ring-teal-400 focus:outline-none text-white"
            />
          </div>

          <div>
            <label
              htmlFor="optionalText"
              className="block text-sm font-semibold text-white mb-1"
            >
              補足テキスト
            </label>
            <textarea
              id="optionalText"
              name="optionalText"
              rows={4}
              value={optionalText}
              onChange={(e) => setOptionalText(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md placeholder:text-white/60 focus:ring-2 focus:ring-teal-400 focus:outline-none text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-white mb-1">
            送信するプロンプト
          </label>
          <div className="mt-2 p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-md text-sm text-white whitespace-pre-wrap">
            {prompt}
          </div>
        </div>

        <div className="text-sm text-gray-400 mt-4">
          <p>
            注意: 入力内容に基づいてAIが自動的に生成します。
            <br />
            送信するプロンプトによっては、異なる内容が生成される可能性があります。
          </p>
          <p>
            信頼性はAIの判断に基づいていますが、必ずしも正確な情報を保証するものではありません。
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className={`min-w-[160px] bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-xl shadow transition ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            <span className="flex items-center justify-center">
              {isSubmitting && (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
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
        </div>
      </Form>
    </div>
  );
}
