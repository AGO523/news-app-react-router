import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md shadow-sm py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Link
          to="/"
          className="flex items-center space-x-2 text-white font-semibold tracking-wide hover:text-teal-200 transition"
        >
          <img src="/images/orge.png" alt="ロゴ" className="w-10 h-10" />
          <span className="hidden sm:inline">学習支援プラットフォーム</span>
        </Link>
      </div>

      <nav className="flex items-center space-x-6">
        <Link
          to="/news"
          className="text-white text-sm hover:text-teal-200 transition flex items-center space-x-1"
        >
          <svg
            className="w-4 h-4"
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
          <span className="hidden md:inline">ニュース配信</span>
          <span className="md:hidden">ニュース</span>
        </Link>
        <Link
          to="/typescript-learning"
          className="text-white text-sm hover:text-teal-200 transition flex items-center space-x-1"
        >
          <svg
            className="w-4 h-4"
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
          <span className="hidden lg:inline">TypeScript</span>
          <span className="lg:hidden">TS</span>
        </Link>
        <Link
          to="/ruby-algorithm-learning"
          className="text-white text-sm hover:text-teal-200 transition flex items-center space-x-1"
        >
          <svg
            className="w-4 h-4"
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
          <span className="hidden lg:inline">Ruby競プロ</span>
          <span className="lg:hidden">Ruby</span>
        </Link>
        <Link
          to="/network-learning"
          className="text-white text-sm hover:text-teal-200 transition flex items-center space-x-1"
        >
          <svg
            className="w-4 h-4"
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
          <span className="hidden lg:inline">ネットワーク</span>
          <span className="lg:hidden">NET</span>
        </Link>
      </nav>
    </header>
  );
}
