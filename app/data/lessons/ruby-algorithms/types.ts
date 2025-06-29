export interface AlgorithmLessonContent {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  explanation: string;
  detailedExplanation?: string;
  problemStatement?: string;
  example?: string;
  exercise?: string;
  solution: string;
  testCases: Array<{
    input: string;
    output?: string;
    expectedOutput?: string;
    explanation?: string;
  }>;
}
