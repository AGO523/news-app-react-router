export interface NetworkLessonContent {
  id: string;
  title: string;
  description: string;
  category: "basic" | "protocol" | "security" | "advanced";
  difficulty: 1 | 2 | 3 | 4 | 5;
  content: {
    theory: string;
    keyPoints: string[];
    diagram?: string;
    examples: {
      title: string;
      description: string;
      scenario: string;
    }[];
  };
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
  practicalExercise?: {
    title: string;
    description: string;
    scenario: string;
    expectedResult: string;
  };
}
