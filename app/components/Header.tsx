import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md shadow-sm py-3 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src="/images/iwashi_kan.png" alt="ロゴ" className="w-10 h-10" />
        <Link to="/" className="text-white font-semibold tracking-wide">
          ニュース要約配信
        </Link>
      </div>

      <nav className="space-x-4">
        <Link
          to="/news"
          className="text-white text-sm hover:underline hover:text-teal-200"
        >
          トピック登録
        </Link>
        {/* 追加ナビゲーションがあればここに */}
      </nav>
    </header>
  );
}
