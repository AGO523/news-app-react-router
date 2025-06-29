import type { AlgorithmLessonContent } from "./types";

export const fibonacciLesson: AlgorithmLessonContent = {
  id: "fibonacci",
  title: "フィボナッチ数列",
  description: "動的プログラミングの基本となるフィボナッチ数列の計算",
  difficulty: "Medium",
  category: "動的プログラミング",
  explanation:
    "フィボナッチ数列は前の2つの数の和で次の数が決まる数列です。効率的な計算には動的プログラミングやメモ化の技法が使用されます。",
  detailedExplanation: `フィボナッチ数列の定義：
F(0) = 0, F(1) = 1
F(n) = F(n-1) + F(n-2) (n >= 2)

実装方法の比較：

1. 再帰的実装（非効率）
   時間計算量: O(2^n)
   
2. メモ化（トップダウン）
   時間計算量: O(n), 空間計算量: O(n)
   
3. 動的プログラミング（ボトムアップ）
   時間計算量: O(n), 空間計算量: O(n) or O(1)

応用：
- 組み合わせ問題
- 最適化問題
- 階段の上り方の数え上げ`,
  example: `# 効率的なフィボナッチ数列の計算（動的プログラミング）
def fibonacci_dp(n)
  return n if n <= 1
  
  prev2 = 0
  prev1 = 1
  
  (2..n).each do |i|
    current = prev1 + prev2
    prev2 = prev1
    prev1 = current
  end
  
  prev1
end

# メモ化を使った実装
def fibonacci_memo(n, memo = {})
  return n if n <= 1
  return memo[n] if memo[n]
  
  memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
end

# 使用例
puts fibonacci_dp(10)    # => 55
puts fibonacci_memo(10)  # => 55`,
  exercise: `# 問題: フィボナッチ数列のn番目の値を効率的に計算する関数を実装してください
# 動的プログラミングまたはメモ化を使用してください

def fibonacci(n)
  # ここに実装してください
  
end

# テスト用のコード（変更しないでください）
puts fibonacci(0)   # 期待値: 0
puts fibonacci(1)   # 期待値: 1
puts fibonacci(10)  # 期待値: 55
puts fibonacci(15)  # 期待値: 610`,
  solution: `def fibonacci(n)
  return n if n <= 1
  
  prev2 = 0
  prev1 = 1
  
  (2..n).each do |i|
    current = prev1 + prev2
    prev2 = prev1
    prev1 = current
  end
  
  prev1
end`,
  testCases: [
    {
      input: "n = 0",
      output: "0",
      explanation: "フィボナッチ数列の0番目は0",
    },
    {
      input: "n = 1",
      output: "1",
      explanation: "フィボナッチ数列の1番目は1",
    },
    {
      input: "n = 10",
      output: "55",
      explanation: "F(10) = 55",
    },
    {
      input: "n = 15",
      output: "610",
      explanation: "F(15) = 610",
    },
  ],
};
