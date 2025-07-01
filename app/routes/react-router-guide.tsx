import type { Route } from "./+types/react-router-guide";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router解説 - Loader・Actionの仕組み" },
    {
      name: "description",
      content:
        "React Router v7のLoader・Actionの仕組みを視覚的に解説。このアプリケーションの内部構造とデータフローを詳しく説明。",
    },
  ];
}

export default function ReactRouterGuide({}: Route.ComponentProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "loader" | "action" | "structure"
  >("overview");

  const tabs = [
    { key: "overview" as const, label: "概要", icon: "📖" },
    { key: "loader" as const, label: "Loader", icon: "⬇️" },
    { key: "action" as const, label: "Action", icon: "⬆️" },
    { key: "structure" as const, label: "アプリ構造", icon: "🏗️" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          React Router v7 解説
        </h1>
        <p className="text-gray-400 text-base md:text-lg">
          このアプリケーションがどのように動作しているかを理解しよう
        </p>
      </div>

      {/* タブナビゲーション */}
      <div className="flex flex-wrap gap-2 mb-6 md:mb-8 border-b border-white/20 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.key
                ? "text-green-400 border-b-2 border-green-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <span className="mr-1 md:mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* タブコンテンツ */}
      <div className="bg-white/10 rounded-xl p-4 md:p-8">
        {activeTab === "overview" && <OverviewSection />}
        {activeTab === "loader" && <LoaderSection />}
        {activeTab === "action" && <ActionSection />}
        {activeTab === "structure" && <StructureSection />}
      </div>
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-green-400">
          React Router v7とは？
        </h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed">
            React Router
            v7は、フルスタックWebアプリケーションを構築するための革新的なフレームワークです。
            従来のクライアントサイドルーティングに加えて、サーバーサイドの機能も統合されています。
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/10 rounded-lg p-6 border border-white/20">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">主な特徴</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              • <strong>ファイルベースルーティング</strong> - 直感的なルート定義
            </li>
            <li>
              • <strong>Loader関数</strong> - サーバーサイドでのデータ取得
            </li>
            <li>
              • <strong>Action関数</strong> - フォーム送信とデータ更新
            </li>
            <li>
              • <strong>型安全性</strong> - TypeScriptとの完全統合
            </li>
            <li>
              • <strong>SSR・SSG</strong> - サーバーサイドレンダリング対応
            </li>
          </ul>
        </div>

        <div className="bg-white/10 rounded-lg p-6 border border-white/20">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            このアプリの構成
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              • <strong>5つのメインルート</strong> -
              ホーム、ニュース、学習ページ
            </li>
            <li>
              • <strong>動的データ</strong> - ニュース配信でAction使用
            </li>
            <li>
              • <strong>静的コンテンツ</strong> - 学習ページでLoader使用
            </li>
            <li>
              • <strong>TypeScript</strong> - 型安全なデータフロー
            </li>
            <li>
              • <strong>Cloudflare Workers</strong> - エッジでの高速実行
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 md:p-6 border border-white/20">
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          データフローの循環図
        </h3>
        <div className="flex justify-center mb-4">
          <img
            src="/images/lorder-action.png"
            alt="Loader・Action・Componentの循環図"
            className="w-full max-w-2xl h-auto rounded-lg"
          />
        </div>

        {/* 説明テキスト */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-sm">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-3 md:p-4 border border-yellow-500/30">
            <div className="flex items-center mb-2">
              <span className="text-lg md:text-xl mr-2">⬇️</span>
              <span className="font-semibold text-yellow-400">Loaders</span>
            </div>
            <p className="text-gray-300 text-xs md:text-sm">
              ページ表示前にサーバーサイドでデータを取得し、コンポーネントに渡す
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg p-4 border border-green-500/30">
            <div className="flex items-center mb-2">
              <span className="text-xl mr-2">🎨</span>
              <span className="font-semibold text-green-400">Component</span>
            </div>
            <p className="text-gray-300">
              ユーザーにUIを表示し、フォーム送信やインタラクションを処理
            </p>
          </div>
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-4 border border-cyan-500/30">
            <div className="flex items-center mb-2">
              <span className="text-xl mr-2">⬆️</span>
              <span className="font-semibold text-cyan-400">Action</span>
            </div>
            <p className="text-gray-300">
              フォームデータを受け取りサーバーサイドで処理し、新しいデータでページを更新
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoaderSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-blue-400">
          Loader関数の仕組み
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Loader関数は、ページがレンダリングされる前にサーバーサイドで実行され、
          必要なデータを事前に取得します。これにより、ユーザーは即座にコンテンツを見ることができます。
        </p>
      </div>

      <div className="bg-white/10 rounded-lg p-6 border border-white/20">
        <h3 className="text-xl font-semibold mb-4">基本的な流れ</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-500/20 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">1️⃣</div>
            <div className="font-semibold">ユーザーがページ訪問</div>
            <div className="text-sm text-gray-400 mt-2">URLにアクセス</div>
          </div>
          <div className="bg-blue-500/20 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">2️⃣</div>
            <div className="font-semibold">Loader実行</div>
            <div className="text-sm text-gray-400 mt-2">
              サーバーでデータ取得
            </div>
          </div>
          <div className="bg-blue-500/20 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">3️⃣</div>
            <div className="font-semibold">コンポーネント表示</div>
            <div className="text-sm text-gray-400 mt-2">
              データ付きでレンダリング
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/10 rounded-lg p-6 border border-white/20">
        <h3 className="text-xl font-semibold mb-4">実装例：ニュースページ</h3>
        <div className="bg-black/30 rounded p-4 overflow-x-auto">
          <pre className="text-sm">
            <code className="text-gray-300">{`// news.tsx
export async function loader({ request }: Route.LoaderArgs) {
  // データベースからニュース設定を取得
  const topics = await getNewsTopics();
  return { topics };
}

export default function News({ loaderData }: Route.ComponentProps) {
  const { topics } = loaderData; // Loaderで取得したデータ
  
  return (
    <div>
      <h1>ニュース配信設定</h1>
      {topics.map(topic => (
        <NewsCard key={topic.id} topic={topic} />
      ))}
    </div>
  );
}`}</code>
          </pre>
        </div>
      </div>

      <div className="bg-yellow-500/20 rounded-lg p-6 border border-yellow-500/50">
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">
          Loaderのメリット
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">パフォーマンス</h4>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>• ページ表示時にデータ取得完了</li>
              <li>• ローディング状態の最小化</li>
              <li>• サーバーサイドでの効率的な処理</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">開発体験</h4>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>• 型安全なデータフロー</li>
              <li>• エラーハンドリングの統一</li>
              <li>• テストの容易さ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-orange-400">
          Action関数の仕組み
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Action関数は、フォーム送信やデータ更新時にサーバーサイドで実行されます。
          従来のAPIエンドポイントの代わりに、ページと密結合した形でデータ処理を行います。
        </p>
      </div>

      <div className="bg-white/10 rounded-lg p-6 border border-white/20">
        <h3 className="text-xl font-semibold mb-4">基本的な流れ</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-orange-500/20 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">1️⃣</div>
            <div className="font-semibold">フォーム送信</div>
            <div className="text-sm text-gray-400 mt-2">ユーザーが操作</div>
          </div>
          <div className="bg-orange-500/20 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">2️⃣</div>
            <div className="font-semibold">Action実行</div>
            <div className="text-sm text-gray-400 mt-2">サーバーで処理</div>
          </div>
          <div className="bg-orange-500/20 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">3️⃣</div>
            <div className="font-semibold">データ更新</div>
            <div className="text-sm text-gray-400 mt-2">データベース操作</div>
          </div>
          <div className="bg-orange-500/20 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">4️⃣</div>
            <div className="font-semibold">ページ更新</div>
            <div className="text-sm text-gray-400 mt-2">新しいデータで表示</div>
          </div>
        </div>
      </div>

      <div className="bg-white/10 rounded-lg p-6 border border-white/20">
        <h3 className="text-xl font-semibold mb-4">実装例：ニュースの登録</h3>
        <div className="bg-black/30 rounded p-4 overflow-x-auto">
          <pre className="text-sm">
            <code className="text-gray-300">{`// news.tsx
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const topic = formData.get("topic") as string;
  const email = formData.get("email") as string;
  
  // バリデーション
  if (!topic || !email) {
    return { error: "必須項目を入力してください" };
  }
  
  // データベースに保存
  await saveNewsTopic({ topic, email });
  
  // 成功時のリダイレクト
  return redirect("/news?success=true");
}

export default function News() {
  return (
    <Form method="post">
      <input name="topic" type="text" placeholder="トピック" />
      <input name="email" type="email" placeholder="メールアドレス" />
      <button type="submit">登録</button>
    </Form>
  );
}`}</code>
          </pre>
        </div>
      </div>

      <div className="bg-green-500/20 rounded-lg p-6 border border-green-500/50">
        <h3 className="text-xl font-semibold mb-4 text-green-400">
          Actionのメリット
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">シンプルな実装</h4>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>• 別途APIエンドポイント不要</li>
              <li>• フォームとロジックが同じファイル</li>
              <li>• 自動的なデータ再取得</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">堅牢性</h4>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>• サーバーサイドでのバリデーション</li>
              <li>• CSRFプロテクション</li>
              <li>• 型安全なフォーム処理</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function StructureSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-purple-400">
          このアプリの構造
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          実際のファイル構成とデータフローを理解して、React
          Routerアプリケーションの設計パターンを学びましょう。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/10 rounded-lg p-6 border border-white/20">
          <h3 className="text-xl font-semibold mb-4">ファイル構成</h3>
          <div className="bg-black/30 rounded p-4 overflow-x-auto">
            <pre className="text-sm font-mono">
              <code className="text-green-400">{`app/
├── routes.ts          # ルート定義
├── root.tsx           # レイアウト
├── components/        # 共通コンポーネント
│   └── Header.tsx
├── routes/            # ページコンポーネント
│   ├── home.tsx       # / (index)
│   ├── news.tsx       # /news
│   ├── typescript-learning.tsx
│   ├── network-learning.tsx
│   └── react-router-guide.tsx
└── data/              # データ・型定義
    └── lessons/`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-6 border border-white/20">
          <h3 className="text-xl font-semibold mb-4">ルート定義</h3>
          <div className="bg-black/30 rounded p-4 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-gray-300">{`// routes.ts
export default [
  index("routes/home.tsx"),
  route("news", "routes/news.tsx"),
  route("typescript-learning", 
        "routes/typescript-learning.tsx"),
  route("network-learning", 
        "routes/network-learning.tsx"),
  route("react-router-guide", 
        "routes/react-router-guide.tsx"),
] satisfies RouteConfig;`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="bg-white/10 rounded-lg p-6 border border-white/20">
        <h3 className="text-xl font-semibold mb-4">データフロー図</h3>
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-6">
          <div className="font-mono text-sm overflow-x-auto">
            <pre className="text-center">
              <code className="text-purple-400">{`
                     ユーザーリクエスト
                           ↓
                    routes.ts でルート解決
                           ↓
              ┌─────────────────────────────┐
              │       Route Component       │
              │    (home.tsx, news.tsx)     │
              └─────────────────────────────┘
                           ↓
        ┌──────────────────┼──────────────────┐
        ↓                  ↓                  ↓
   ┌─────────┐      ┌─────────────┐    ┌─────────────┐
   │ Static  │      │   Loader    │    │   Action    │
   │Content  │      │ (GET data)  │    │(POST data)  │
   └─────────┘      └─────────────┘    └─────────────┘
        ↓                  ↓                  ↓
   Direct Render     Database Query     Database Update
        ↓                  ↓                  ↓
   Component         Component          Redirect/Reload
                    with Data           with New Data
`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/50">
          <h4 className="font-semibold mb-2 text-blue-400">学習ページ</h4>
          <p className="text-sm text-gray-300 mb-2">静的コンテンツ中心</p>
          <ul className="text-xs space-y-1 text-gray-400">
            <li>• Loaderでレッスンデータ取得</li>
            <li>• インタラクティブなUI</li>
            <li>• 状態管理はクライアント側</li>
          </ul>
        </div>

        <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-500/50">
          <h4 className="font-semibold mb-2 text-orange-400">ニュースページ</h4>
          <p className="text-sm text-gray-300 mb-2">動的データ処理</p>
          <ul className="text-xs space-y-1 text-gray-400">
            <li>• Actionでフォーム処理</li>
            <li>• データベース連携</li>
            <li>• サーバーサイド処理</li>
          </ul>
        </div>

        <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/50">
          <h4 className="font-semibold mb-2 text-green-400">ホームページ</h4>
          <p className="text-sm text-gray-300 mb-2">ナビゲーション中心</p>
          <ul className="text-xs space-y-1 text-gray-400">
            <li>• 静的なランディングページ</li>
            <li>• 各機能への入り口</li>
            <li>• シンプルな構成</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
