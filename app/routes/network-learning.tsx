import { useState } from "react";
import { useSearchParams } from "react-router";
import {
  networkLessons,
  type NetworkLessonContent,
} from "~/data/lessons/network";

export function meta() {
  return [
    { title: "ネットワーク学習 - インフラ基礎からWeb開発実践まで" },
    {
      name: "description",
      content:
        "ネットワークの基礎からWeb開発実践まで包括的に学習。OSI参照モデル、TCP/UDP、DNS、HTTP/HTTPS、CORS、WebSocket、ロードバランシングなど16のレッスンで実践的なネットワークスキルを習得。",
    },
  ];
}

export default function NetworkLearning() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedQuizIndex, setSelectedQuizIndex] = useState<number | null>(
    null
  );
  const [quizResults, setQuizResults] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [showExplanations, setShowExplanations] = useState<{
    [key: number]: boolean;
  }>({});
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // URLSearchParamsから状態を取得
  const lessonId = searchParams.get("lesson");
  const currentView = searchParams.get("view") || "overview";

  const currentLesson = lessonId
    ? networkLessons.find((lesson) => lesson.id === lessonId)
    : null;

  // URL状態管理のヘルパー関数
  const updateSearchParams = (params: Record<string, string | null>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, value);
      }
    });
    setSearchParams(newSearchParams);
  };

  const selectLesson = (lesson: NetworkLessonContent) => {
    updateSearchParams({ lesson: lesson.id, view: "theory" });
    setSelectedQuizIndex(null);
    setQuizResults({});
    setShowExplanations({});
  };

  const changeView = (view: string) => {
    updateSearchParams({ view });
  };

  const handleQuizAnswer = (questionIndex: number, selectedAnswer: number) => {
    if (!currentLesson) return;

    const isCorrect =
      selectedAnswer === currentLesson.quiz[questionIndex].correctAnswer;
    setQuizResults((prev) => ({ ...prev, [questionIndex]: isCorrect }));
    setShowExplanations((prev) => ({ ...prev, [questionIndex]: true }));
  };

  const getDifficultyColor = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return "text-green-400";
      case 2:
        return "text-blue-400";
      case 3:
        return "text-yellow-400";
      case 4:
        return "text-orange-400";
      case 5:
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "basic":
        return (
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
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        );
      case "protocol":
        return (
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        );
      case "security":
        return (
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        );
      case "webdev":
        return (
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
        );
      default:
        return (
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
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">ネットワーク学習</h1>
        <p className="text-gray-400">
          基礎からWeb開発実践まで、16のレッスンでネットワーク技術を体系的に習得しましょう。
          理論、実例、クイズ、実習を通じて実践的なスキルを身につけます。
        </p>
      </div>

      {!currentLesson ? (
        // レッスン一覧表示
        <div className="space-y-6">
          {/* カテゴリフィルター */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { key: "all", label: "すべて", count: networkLessons.length },
              {
                key: "basic",
                label: "基礎",
                count: networkLessons.filter((l) => l.category === "basic")
                  .length,
              },
              {
                key: "protocol",
                label: "プロトコル",
                count: networkLessons.filter((l) => l.category === "protocol")
                  .length,
              },
              {
                key: "security",
                label: "セキュリティ",
                count: networkLessons.filter((l) => l.category === "security")
                  .length,
              },
              {
                key: "advanced",
                label: "応用",
                count: networkLessons.filter((l) => l.category === "advanced")
                  .length,
              },
              {
                key: "webdev",
                label: "Web開発",
                count: networkLessons.filter((l) => l.category === "webdev")
                  .length,
              },
            ].map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setCategoryFilter(key)}
                className={`px-4 py-2 rounded-lg text-sm transition ${
                  categoryFilter === key
                    ? "bg-purple-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {label} ({count})
              </button>
            ))}
          </div>

          {/* レッスンカード */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(categoryFilter === "all"
              ? networkLessons
              : networkLessons.filter(
                  (lesson) => lesson.category === categoryFilter
                )
            ).map((lesson) => (
              <div
                key={lesson.id}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer"
                onClick={() => selectLesson(lesson)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(lesson.category)}
                    <span className="text-sm text-gray-400 capitalize">
                      {lesson.category === "basic"
                        ? "基礎"
                        : lesson.category === "protocol"
                        ? "プロトコル"
                        : lesson.category === "security"
                        ? "セキュリティ"
                        : lesson.category === "advanced"
                        ? "応用"
                        : lesson.category === "webdev"
                        ? "Web開発"
                        : lesson.category}
                    </span>
                  </div>
                  <div
                    className={`text-sm font-medium ${getDifficultyColor(
                      lesson.difficulty
                    )}`}
                  >
                    ★{lesson.difficulty}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{lesson.title}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  {lesson.description}
                </p>
                <div className="text-xs text-gray-400">
                  理論 • クイズ{lesson.quiz.length}問
                  {lesson.practicalExercise && " • 実習"}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // 個別レッスン表示
        <div className="grid lg:grid-cols-4 gap-6">
          {/* サイドバー */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sticky top-6">
              <button
                onClick={() => updateSearchParams({ lesson: null, view: null })}
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white mb-4"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>レッスン一覧に戻る</span>
              </button>

              <h3 className="font-semibold mb-3">{currentLesson.title}</h3>

              <nav className="space-y-2">
                <button
                  onClick={() => changeView("theory")}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                    currentView === "theory"
                      ? "bg-white/20 text-white"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  理論
                </button>
                <button
                  onClick={() => changeView("examples")}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                    currentView === "examples"
                      ? "bg-white/20 text-white"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  実例
                </button>
                <button
                  onClick={() => changeView("quiz")}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                    currentView === "quiz"
                      ? "bg-white/20 text-white"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  クイズ ({currentLesson.quiz.length}問)
                </button>
                {currentLesson.practicalExercise && (
                  <button
                    onClick={() => changeView("practical")}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                      currentView === "practical"
                        ? "bg-white/20 text-white"
                        : "text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    実習
                  </button>
                )}
              </nav>
            </div>
          </div>

          {/* メインコンテンツ */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              {currentView === "theory" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">理論</h2>
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-line text-gray-200 leading-relaxed">
                        {currentLesson.content.theory}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">重要ポイント</h3>
                    <ul className="space-y-2">
                      {currentLesson.content.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <svg
                            className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-200">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {currentView === "examples" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">実例</h2>
                  {currentLesson.content.examples.map((example, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {example.title}
                      </h3>
                      <p className="text-gray-300 mb-3">
                        {example.description}
                      </p>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <p className="text-sm text-gray-200">
                          {example.scenario}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {currentView === "quiz" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">クイズ</h2>
                  {currentLesson.quiz.map((question, questionIndex) => (
                    <div
                      key={questionIndex}
                      className="bg-white/5 rounded-lg p-4"
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        問題 {questionIndex + 1}: {question.question}
                      </h3>
                      <div className="space-y-2 mb-4">
                        {question.options.map((option, optionIndex) => (
                          <button
                            key={optionIndex}
                            onClick={() =>
                              handleQuizAnswer(questionIndex, optionIndex)
                            }
                            disabled={questionIndex in quizResults}
                            className={`w-full text-left p-3 rounded-lg transition ${
                              questionIndex in quizResults
                                ? optionIndex === question.correctAnswer
                                  ? "bg-green-600/30 border border-green-500"
                                  : quizResults[questionIndex] === false &&
                                    selectedQuizIndex === optionIndex
                                  ? "bg-red-600/30 border border-red-500"
                                  : "bg-gray-700/50"
                                : "bg-gray-700/50 hover:bg-gray-600/50"
                            } ${
                              questionIndex in quizResults
                                ? "cursor-default"
                                : "cursor-pointer"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                      {showExplanations[questionIndex] && (
                        <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <svg
                              className="w-5 h-5 text-blue-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="font-medium text-blue-300">
                              解説
                            </span>
                          </div>
                          <p className="text-gray-200">
                            {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {currentView === "practical" &&
                currentLesson.practicalExercise && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4">実習</h2>
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-3">
                        {currentLesson.practicalExercise.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {currentLesson.practicalExercise.description}
                      </p>
                      <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                        <h4 className="font-medium mb-2">シナリオ:</h4>
                        <p className="text-sm text-gray-200">
                          {currentLesson.practicalExercise.scenario}
                        </p>
                      </div>
                      <div className="bg-green-800/20 border border-green-600/30 rounded-lg p-4">
                        <h4 className="font-medium mb-2 text-green-300">
                          期待される結果:
                        </h4>
                        <p className="text-sm text-gray-200">
                          {currentLesson.practicalExercise.expectedResult}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
