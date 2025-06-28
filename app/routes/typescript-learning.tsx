import { useState } from "react";
import { useSearchParams } from "react-router";
import type { Route } from "./+types/typescript-learning";
import { lessons, type LessonContent } from "~/data/typescript-lessons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TypeScript型学習 - インタラクティブ学習" },
    {
      name: "description",
      content:
        "TypeScriptの型システムについてインタラクティブに学習できるページです。",
    },
  ];
}

export default function TypeScriptLearning() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userCode, setUserCode] = useState("");

  // URLSearchParamsから状態を取得
  const lessonId = searchParams.get("lesson");
  const showSolution = searchParams.get("solution") === "true";
  const showDetailedExplanation = searchParams.get("explanation") === "true";

  const currentLesson = lessonId
    ? lessons.find((lesson) => lesson.id === lessonId)
    : null;

  // URL状態管理のヘルパー関数
  const updateSearchParams = (
    updates: Record<string, string | boolean | null>
  ) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === false) {
        newParams.delete(key);
      } else if (value === true) {
        newParams.set(key, "true");
      } else {
        newParams.set(key, value as string);
      }
    });

    setSearchParams(newParams);
  };

  const handleLessonSelect = (selectedLessonId: string) => {
    updateSearchParams({ lesson: selectedLessonId });
    setUserCode("");
  };

  const handleBackToList = () => {
    updateSearchParams({ lesson: null, solution: null, explanation: null });
    setUserCode("");
  };

  const handleToggleSolution = () => {
    updateSearchParams({ solution: !showSolution });
  };

  const handleToggleDetailedExplanation = () => {
    updateSearchParams({ explanation: !showDetailedExplanation });
  };

  const handleReset = () => {
    if (currentLesson) {
      setUserCode(currentLesson.exercise);
    }
  };

  // レッスンナビゲーション
  const currentLessonIndex = currentLesson
    ? lessons.findIndex((lesson) => lesson.id === currentLesson.id)
    : -1;

  const hasNextLesson = currentLessonIndex < lessons.length - 1;
  const hasPrevLesson = currentLessonIndex > 0;

  const goToNextLesson = () => {
    if (hasNextLesson) {
      const nextLesson = lessons[currentLessonIndex + 1];
      updateSearchParams({
        lesson: nextLesson.id,
        solution: null,
        explanation: null,
      });
      setUserCode("");
    }
  };

  const goToPrevLesson = () => {
    if (hasPrevLesson) {
      const prevLesson = lessons[currentLessonIndex - 1];
      updateSearchParams({
        lesson: prevLesson.id,
        solution: null,
        explanation: null,
      });
      setUserCode("");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white/10 backdrop-blur-md p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">TypeScript型学習</h1>
        <p className="text-gray-200">
          {currentLesson
            ? "インタラクティブにTypeScriptの型システムを学習しましょう"
            : "学習したいレッスンを選択してください"}
        </p>
      </div>

      {!currentLesson ? (
        // レッスン一覧表示
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer border border-gray-600 hover:border-teal-500"
            >
              <div onClick={() => handleLessonSelect(lesson.id)}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-teal-400 font-medium">
                    レッスン {index + 1}
                  </span>
                  <div className="text-2xl">
                    {index < 4
                      ? ["🔤", "🏗️", "🔀", "⚙️"][index]
                      : index < 8
                      ? ["🌐", "📝", "🗃️", "🎯"][index - 4]
                      : index < 12
                      ? ["🔧", "🏛️", "⚡", "🎨"][index - 8]
                      : ["📊", "🚀", "🌟", "💎"][index - 12]}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {lesson.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {lesson.description}
                </p>
                <div className="mt-4 text-right">
                  <span className="text-teal-400 text-sm hover:underline">
                    学習を開始 →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // 個別レッスン表示
        <>
          {/* 戻るボタンとナビゲーション */}
          <div className="mb-6 flex justify-between items-center">
            <button
              onClick={handleBackToList}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm flex items-center gap-2"
            >
              ← レッスン一覧に戻る
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevLesson}
                disabled={!hasPrevLesson}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← 前のレッスン
              </button>
              <span className="text-gray-300 text-sm">
                {currentLessonIndex + 1} / {lessons.length}
              </span>
              <button
                onClick={goToNextLesson}
                disabled={!hasNextLesson}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                次のレッスン →
              </button>
            </div>
          </div>

          {/* レッスンタイトル - 中央配置 */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {currentLesson.title}
            </h2>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto">
              {currentLesson.description}
            </p>
          </div>

          {/* レッスンコンテンツ */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* 左側: 説明とサンプル */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-3">
                  📖 サンプルコード
                </h3>
                <pre className="bg-gray-900 rounded p-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    {currentLesson.example}
                  </code>
                </pre>
              </div>

              {/* 解説 */}
              <div className="bg-blue-900/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium text-white">
                    💡 ポイント
                  </h3>
                  <button
                    onClick={handleToggleDetailedExplanation}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-xs"
                  >
                    {showDetailedExplanation
                      ? "詳細解説を隠す"
                      : "詳細解説を表示"}
                  </button>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  {currentLesson.explanation}
                </p>

                {/* 詳細解説表示 */}
                {showDetailedExplanation && (
                  <div className="mt-4 p-4 bg-blue-800/30 rounded-lg border-l-4 border-blue-400">
                    <h4 className="text-md font-medium text-white mb-3">
                      📚 詳細解説
                    </h4>
                    <div className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">
                      {currentLesson.detailedExplanation}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 右側: 練習問題 */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-4">
                  ✏️ 練習問題
                </h3>

                <div className="mb-4">
                  <textarea
                    value={userCode || currentLesson.exercise}
                    onChange={(e) => setUserCode(e.target.value)}
                    className="w-full h-80 md:h-96 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded border border-gray-600 focus:border-teal-500 focus:outline-none resize-none"
                    placeholder="ここにコードを書いてください..."
                  />
                </div>

                <div className="flex gap-2 mb-4">
                  <button
                    onClick={handleReset}
                    className="px-2 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
                  >
                    リセット
                  </button>
                  <button
                    onClick={handleToggleSolution}
                    className="px-2 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors text-sm"
                  >
                    {showSolution ? "解答を隠す" : "解答を見る"}
                  </button>
                </div>

                {/* 解答表示 */}
                {showSolution && (
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-md font-medium text-white mb-2">
                      💡 解答例
                    </h4>
                    <pre className="bg-gray-900 rounded p-4 overflow-x-auto">
                      <code className="text-blue-400 text-sm">
                        {currentLesson.solution}
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
