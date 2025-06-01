import type { Route } from "./+types/home";
import { Link, Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ニュース要約配信" },
    {
      name: "description",
      content: "ニュースを要約して毎日配信するサービスです。",
    },
  ];
}
export default function Home({}: Route.ComponentProps) {
  return (
    <div className="max-w-3xl mx-auto bg-white/0 backdrop-blur-md rounded-2xl shadow-sm p-8">
      <h1 className="text-lg font-bold text-center mb-6">
        ニュース要約配信サービス
      </h1>

      <p className="mb-4 leading-relaxed">
        本サービスは、あなたの興味のあるトピックに関する最新ニュースを自動で要約し、
        毎日メールでお届けするサービスです。
      </p>

      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>ニュースソースを3件自動取得</li>
        <li>読みやすく構成された要約文を配信</li>
        <li>自分の興味に応じてトピックを自由に登録</li>
      </ul>

      <p className="mb-6">
        AIによる調査と要約により、忙しいあなたに代わって情報を整理・配信します。
        通勤中やスキマ時間に、効率的に最新情報をキャッチアップしましょう。
      </p>

      <div className="text-center">
        <Link
          to="news"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full shadow transition"
        >
          トピックを登録する
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
