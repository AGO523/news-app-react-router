import { useState } from "react";
import { useSearchParams } from "react-router";
import type { Route } from "./+types/ruby-algorithm-learning";
import {
  algorithmLessons,
  type AlgorithmLessonContent,
} from "~/data/lessons/ruby-algorithms";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ruby競技プログラミング学習 - アルゴリズム練習" },
    {
      name: "description",
      content:
        "Rubyを使った競技プログラミングのアルゴリズムをインタラクティブに学習できるページです。",
    },
  ];
}

export default function RubyAlgorithmLearning() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userCode, setUserCode] = useState("");

  // URLSearchParamsから状態を取得
  const lessonId = searchParams.get("lesson");
  const showSolution = searchParams.get("solution") === "true";
  const showDetailedExplanation = searchParams.get("explanation") === "true";
  const showTestCases = searchParams.get("testcases") === "true";

  const currentLesson = lessonId
    ? algorithmLessons.find((lesson) => lesson.id === lessonId)
    : null;

  // URL状態管理のヘルパー関数
  const updateSearchParams = (
    updates: Record<string, string | boolean | null>,
    options?: { preserveScroll?: boolean }
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

    setSearchParams(newParams, {
      replace: true,
      preventScrollReset: options?.preserveScroll ?? true,
    });
  };

  const handleLessonSelect = (selectedLessonId: string) => {
    updateSearchParams({ lesson: selectedLessonId }, { preserveScroll: false });
    setUserCode("");
  };

  const handleBackToList = () => {
    updateSearchParams(
      {
        lesson: null,
        solution: null,
        explanation: null,
        testcases: null,
      },
      { preserveScroll: false }
    );
    setUserCode("");
  };

  const handleToggleSolution = () => {
    updateSearchParams({ solution: !showSolution });
  };

  const handleToggleDetailedExplanation = () => {
    updateSearchParams({ explanation: !showDetailedExplanation });
  };

  const handleToggleTestCases = () => {
    updateSearchParams({ testcases: !showTestCases });
  };

  const handleReset = () => {
    if (currentLesson) {
      setUserCode(
        currentLesson.exercise || "# ここにRubyコードを書いてください"
      );
    }
  };

  // レッスンナビゲーション
  const currentLessonIndex = currentLesson
    ? algorithmLessons.findIndex((lesson) => lesson.id === currentLesson.id)
    : -1;

  const hasNextLesson = currentLessonIndex < algorithmLessons.length - 1;
  const hasPrevLesson = currentLessonIndex > 0;

  const goToNextLesson = () => {
    if (hasNextLesson) {
      const nextLesson = algorithmLessons[currentLessonIndex + 1];
      updateSearchParams(
        {
          lesson: nextLesson.id,
          solution: null,
          explanation: null,
          testcases: null,
        },
        { preserveScroll: false }
      );
      setUserCode("");
    }
  };

  const goToPrevLesson = () => {
    if (hasPrevLesson) {
      const prevLesson = algorithmLessons[currentLessonIndex - 1];
      updateSearchParams(
        {
          lesson: prevLesson.id,
          solution: null,
          explanation: null,
          testcases: null,
        },
        { preserveScroll: false }
      );
      setUserCode("");
    }
  };

  // 難易度に応じた色の取得
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400 bg-green-900/30 border-green-500";
      case "Medium":
        return "text-yellow-400 bg-yellow-900/30 border-yellow-500";
      case "Hard":
        return "text-red-400 bg-red-900/30 border-red-500";
      default:
        return "text-gray-400 bg-gray-900/30 border-gray-500";
    }
  };

  return (
    <div className="w-full min-h-screen bg-white/10 md: rounded-t-2xl p-1 md:p-4">
      <div className="text-center mb-4 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 flex items-center justify-center gap-3">
          <span className="text-3xl md:text-4xl">💎</span>
          Ruby競技プログラミング学習
        </h1>
        <p className="text-gray-200">
          {currentLesson
            ? "実際のコーディング問題を通してアルゴリズムを学習しましょう"
            : "学習したいアルゴリズムを選択してください"}
        </p>
      </div>

      {!currentLesson ? (
        // レッスン一覧表示
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
          {algorithmLessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className="bg-white/5 rounded-lg p-3 md:p-4 hover:bg-white/10 transition-colors cursor-pointer border border-gray-600 hover:border-purple-500"
            >
              <div onClick={() => handleLessonSelect(lesson.id)}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-purple-400 font-medium">
                    問題 {index + 1}
                  </span>
                  <div className="text-2xl">
                    {[
                      "🔍", // Binary Search
                      "🔄", // Bubble Sort
                      "📈", // Fibonacci
                      "🌲", // Depth First Search
                      "🎯", // Two Sum
                      "🔀", // Reverse String
                      "📚", // Valid Parentheses
                      "⚡", // Quick Sort
                      "🔗", // Merge Sort
                      "🌊", // Breadth First Search
                      "📊", // Maximum Subarray
                      "🔄", // Palindrome Check
                      "🔗", // Linked List Cycle
                      "🌳", // Binary Tree Inorder
                      "⛰️", // Find Peak Element
                    ][index] || "🚀"}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {lesson.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {lesson.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs px-2 py-1 rounded border ${getDifficultyColor(
                      lesson.difficulty
                    )}`}
                  >
                    {lesson.difficulty}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                    {lesson.category}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-purple-400 text-sm hover:underline">
                    挑戦する →
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
          <div className="mb-2 md:mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 md:gap-4">
            <button
              onClick={handleBackToList}
              className="px-2 md:px-3 py-1 md:py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-xs md:text-sm flex items-center gap-2"
            >
              ← 問題一覧に戻る
            </button>

            <div className="flex items-center gap-1 md:gap-2 text-sm">
              <button
                onClick={goToPrevLesson}
                disabled={!hasPrevLesson}
                className="px-2 md:px-3 py-1 md:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← 前の問題
              </button>
              <span className="text-gray-300 text-xs md:text-sm px-1">
                {currentLessonIndex + 1} / {algorithmLessons.length}
              </span>
              <button
                onClick={goToNextLesson}
                disabled={!hasNextLesson}
                className="px-2 md:px-3 py-1 md:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                次の問題 →
              </button>
            </div>
          </div>

          {/* レッスンタイトル - 中央配置 */}
          <div className="text-center mb-3 md:mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 mb-2 md:mb-4">
              <h2 className="text-lg md:text-xl font-bold text-white">
                {currentLesson.title}
              </h2>
              <div className="flex items-center gap-1 md:gap-2">
                <span
                  className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded border ${getDifficultyColor(
                    currentLesson.difficulty
                  )}`}
                >
                  {currentLesson.difficulty}
                </span>
                <span className="text-xs md:text-sm text-gray-400 bg-gray-800 px-2 md:px-3 py-1 rounded">
                  {currentLesson.category}
                </span>
              </div>
            </div>
            <p className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto px-2">
              {currentLesson.description}
            </p>
          </div>

          {/* レッスンコンテンツ */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 md:gap-4">
            {/* 左側: 説明とサンプル */}
            <div className="space-y-2 md:space-y-4">
              {/* サンプルコード または 問題文 */}
              <div className="bg-gray-800 rounded-lg p-2 md:p-3">
                <h3 className="text-sm md:text-base font-medium text-white mb-2 md:mb-3">
                  {currentLesson.example ? "📖 サンプルコード" : "📋 問題文"}
                </h3>
                <div className="bg-gray-900 rounded p-2 md:p-3 overflow-x-auto">
                  {currentLesson.example ? (
                    <pre className="text-green-400 text-xs md:text-sm whitespace-pre-wrap">
                      <code>{currentLesson.example}</code>
                    </pre>
                  ) : (
                    <div className="text-gray-200 text-xs md:text-sm whitespace-pre-line">
                      {currentLesson.problemStatement}
                    </div>
                  )}
                </div>
              </div>

              {/* 解説 */}
              <div className="bg-blue-900/30 rounded-lg p-2 md:p-3">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 md:mb-3 gap-1 md:gap-2">
                  <h3 className="text-sm md:text-base font-medium text-white">
                    💡 アルゴリズム解説
                  </h3>
                  <div className="flex gap-1">
                    <button
                      onClick={handleToggleDetailedExplanation}
                      className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-xs"
                    >
                      {showDetailedExplanation ? "解説を隠す" : "解説を表示"}
                    </button>
                  </div>
                </div>

                {/* 基本解説表示 */}
                {showDetailedExplanation && (
                  <div className="p-2 md:p-3 bg-blue-800/30 rounded-lg border-l-4 border-blue-400">
                    <div className="text-gray-200 text-xs md:text-sm leading-relaxed whitespace-pre-line">
                      {currentLesson.explanation}
                    </div>

                    {/* 詳細解説表示 */}
                    {currentLesson.detailedExplanation && (
                      <div className="mt-4 pt-4 border-t border-blue-600/30">
                        <h4 className="text-xs md:text-sm font-medium text-white mb-2 md:mb-3">
                          📚 詳細解説
                        </h4>
                        <div className="text-gray-200 text-xs md:text-sm leading-relaxed whitespace-pre-line">
                          {currentLesson.detailedExplanation}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* テストケース */}
              <div className="bg-green-900/30 rounded-lg p-2 md:p-3">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 md:mb-3 gap-1 md:gap-2">
                  <h3 className="text-sm md:text-base font-medium text-white">
                    🧪 テストケース
                  </h3>
                  <button
                    onClick={handleToggleTestCases}
                    className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-xs"
                  >
                    {showTestCases ? "テストを隠す" : "テストを表示"}
                  </button>
                </div>

                {showTestCases && (
                  <div className="space-y-2 md:space-y-3">
                    {currentLesson.testCases.map((testCase, index) => (
                      <div
                        key={index}
                        className="bg-green-800/30 rounded p-2 border-l-4 border-green-400"
                      >
                        <div className="text-xs md:text-sm text-gray-200 mb-2">
                          <strong>テスト {index + 1}:</strong>
                        </div>
                        <div className="text-xs text-gray-300 mb-1 break-all">
                          <strong>入力:</strong> {testCase.input}
                        </div>
                        <div className="text-xs text-gray-300 mb-1">
                          <strong>期待値:</strong>{" "}
                          {testCase.output || testCase.expectedOutput}
                        </div>
                        {testCase.explanation && (
                          <div className="text-xs text-gray-400">
                            {testCase.explanation}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 右側: 練習問題 */}
            <div className="space-y-2 md:space-y-4">
              <div className="bg-gray-800 rounded-lg p-2 md:p-3">
                <h3 className="text-sm md:text-base font-medium text-white mb-2 md:mb-4">
                  ✏️ コーディング問題
                </h3>

                <div className="mb-2 md:mb-4">
                  <textarea
                    value={
                      userCode ||
                      currentLesson.exercise ||
                      "# ここにRubyコードを書いてください"
                    }
                    onChange={(e) => setUserCode(e.target.value)}
                    className="w-full h-60 md:h-72 lg:h-80 p-2 md:p-3 bg-gray-900 text-green-400 font-mono text-xs md:text-sm rounded border border-gray-600 focus:border-purple-500 focus:outline-none resize-none"
                    placeholder="ここにRubyコードを書いてください..."
                  />
                </div>

                <div className="flex gap-1 md:gap-2 mb-2 md:mb-4">
                  <button
                    onClick={handleReset}
                    className="px-2 py-1 md:py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-xs md:text-sm"
                  >
                    リセット
                  </button>
                  <button
                    onClick={handleToggleSolution}
                    className="px-2 py-1 md:py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors text-xs md:text-sm"
                  >
                    {showSolution ? "解答を隠す" : "解答を見る"}
                  </button>
                </div>

                {/* 解答表示 */}
                {showSolution && (
                  <div className="bg-yellow-900/30 rounded-lg p-2 md:p-3 border-l-4 border-yellow-400">
                    <h4 className="text-xs md:text-sm font-medium text-white mb-2 md:mb-3">
                      💡 解答例
                    </h4>
                    <pre className="bg-gray-900 rounded p-2 md:p-3 overflow-x-auto">
                      <code className="text-green-400 text-xs md:text-sm whitespace-pre-wrap">
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
