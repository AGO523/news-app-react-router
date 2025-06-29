import type { Route } from "./+types/home";
import { Link, Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "学習支援プラットフォーム" },
    {
      name: "description",
      content:
        "ニュース要約配信、TypeScript学習、Ruby競技プログラミング学習、ネットワーク基礎学習を提供するプラットフォームです。",
    },
  ];
}
export default function Home({}: Route.ComponentProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white/0 backdrop-blur-md rounded-2xl shadow-sm p-8">
      <div className="text-center mb-8">
        <img
          src="/images/orge.png"
          alt="サービスロゴ"
          className="mx-auto w-16 h-auto"
        />
        <h1 className="text-2xl font-bold text-center my-4">
          学習支援プラットフォーム
        </h1>
        <p className="text-gray-400 mb-6">
          効率的な学習とニュース配信でスキルアップをサポート
        </p>
      </div>

      {/* サービス一覧 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* ニュース要約配信 */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">ニュース要約配信</h3>
          </div>
          <ul className="text-sm space-y-1 mb-4 text-gray-300">
            <li>• AIによる自動ニュース要約</li>
            <li>• カスタムトピック設定</li>
            <li>• 毎日のメール配信</li>
          </ul>
          <Link
            to="news"
            className="block text-center bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition text-sm"
          >
            トピックを登録
          </Link>
        </div>

        {/* TypeScript学習 */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">TypeScript学習</h3>
          </div>
          <ul className="text-sm space-y-1 mb-4 text-gray-300">
            <li>• インタラクティブな型システム学習</li>
            <li>• 実践的なコード演習</li>
            <li>• 段階的な難易度設定</li>
          </ul>
          <Link
            to="typescript-learning"
            className="block text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition text-sm"
          >
            学習を開始
          </Link>
        </div>

        {/* Ruby競技プログラミング */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Ruby競技プログラミング
            </h3>
          </div>
          <ul className="text-sm space-y-1 mb-4 text-gray-300">
            <li>• アルゴリズム基礎学習</li>
            <li>• コード実行とテスト</li>
            <li>• 競技プログラミング対策</li>
          </ul>
          <Link
            to="ruby-algorithm-learning"
            className="block text-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition text-sm"
          >
            問題を解く
          </Link>
        </div>

        {/* ネットワーク学習 */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">ネットワーク学習</h3>
          </div>
          <ul className="text-sm space-y-1 mb-4 text-gray-300">
            <li>• OSI基礎からWeb開発実践まで</li>
            <li>• HTTP・CORS・WebSocket実践</li>
            <li>• 全16レッスン + 実習・クイズ</li>
          </ul>
          <Link
            to="network-learning"
            className="block text-center bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition text-sm"
          >
            基礎から学ぶ
          </Link>
        </div>
      </div>

      {/* プラットフォームの特徴 */}
      <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">プラットフォームの特徴</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-medium mb-1">包括的な学習</div>
            <div className="text-gray-400">
              基礎から応用まで、体系的に学習できる豊富なコンテンツ
            </div>
          </div>
          <div>
            <div className="font-medium mb-1">インタラクティブ体験</div>
            <div className="text-gray-400">
              クイズと実習により理解度をリアルタイムで確認
            </div>
          </div>
          <div>
            <div className="font-medium mb-1">実践的なスキル</div>
            <div className="text-gray-400">
              現場で活用できる実用的な知識とテクニック
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
