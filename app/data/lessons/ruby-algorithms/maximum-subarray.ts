import type { AlgorithmLessonContent } from "./types";

export const maximumSubarrayLesson: AlgorithmLessonContent = {
  id: "maximum-subarray",
  title: "📈 Maximum Subarray (最大部分配列)",
  difficulty: "Medium",
  category: "Dynamic Programming",
  description: "連続する部分配列の最大和を求めるKadane's algorithm",
  example: `# Kadane's Algorithmの実装例
def max_subarray(nums)
  return nums[0] if nums.length == 1
  
  max_sum = current_sum = nums[0]
  
  nums[1..-1].each do |num|
    current_sum = [num, current_sum + num].max
    max_sum = [max_sum, current_sum].max
  end
  
  max_sum
end

# 使用例
nums = [-2,1,-3,4,-1,2,1,-5,4]
puts max_subarray(nums)  # 6`,
  exercise: `# 最大部分配列の和を求めるアルゴリズムを実装してください
def max_subarray(nums)
  # 基本ケース: 単一要素
  
  
  # 最大和と現在の和を初期化
  
  
  # 各要素について動的に判断
  nums[1..-1].each do |num|
    # 現在の要素から新しく始めるか、既存に追加するかを選択
    
    
    # 最大和を更新
    
  end
  
  
end

# テスト用のコード
nums = [-2,1,-3,4,-1,2,1,-5,4]
result = max_subarray(nums)
puts result  # 期待値: 6`,
  problemStatement: `
整数配列が与えられたとき、連続する部分配列の中で最大の和を返してください。

**制約:**
- 1 ≤ nums.length ≤ 10^5
- -10^4 ≤ nums[i] ≤ 10^4

**例:**
入力: [-2,1,-3,4,-1,2,1,-5,4]
出力: 6
説明: [4,-1,2,1] の和が最大

入力: [1]
出力: 1

入力: [5,4,-1,7,8]
出力: 23
  `,
  solution: `def max_subarray(nums)
  return nums[0] if nums.length == 1
  
  max_sum = current_sum = nums[0]
  
  nums[1..-1].each do |num|
    # 現在の要素から新しく始めるか、
    # 既存の部分配列に追加するかを選択
    current_sum = [num, current_sum + num].max
    max_sum = [max_sum, current_sum].max
  end
  
  max_sum
end

# 使用例
nums = [-2,1,-3,4,-1,2,1,-5,4]
result = max_subarray(nums)
puts result  # 6`,
  explanation: `
**Kadane's Algorithm (カダネのアルゴリズム):**

このアルゴリズムは動的プログラミングの典型例です。

**核心的なアイデア:**
各位置で、「ここまでの部分配列を続けるか、新しく始めるか」を決定

**アルゴリズムの流れ:**
1. 最初の要素で初期化
2. 各要素について：
   - \`current_sum = max(現在の要素, current_sum + 現在の要素)\`
   - \`max_sum = max(max_sum, current_sum)\`

**なぜ動作するのか:**
- 負の sum に正の数を足すより、新しく始める方が良い場合がある
- 常に「これまでの最大」と「現在の最大」を追跡

**時間計算量:** O(n) - 配列を1回だけ走査
**空間計算量:** O(1) - 定数の追加メモリ

**Rubyのポイント:**
- \`[1..-1]\`で配列の2番目以降を取得
- \`max\`メソッドで最大値を簡潔に取得
- 1行で条件分岐を表現
  `,
  testCases: [
    {
      input: "[-2,1,-3,4,-1,2,1,-5,4]",
      expectedOutput: "6",
      explanation: "[4,-1,2,1]の和",
    },
    {
      input: "[1]",
      expectedOutput: "1",
      explanation: "単一要素",
    },
    {
      input: "[5,4,-1,7,8]",
      expectedOutput: "23",
      explanation: "全配列が最大",
    },
    {
      input: "[-1]",
      expectedOutput: "-1",
      explanation: "負の単一要素",
    },
    {
      input: "[-2,-1,-3]",
      expectedOutput: "-1",
      explanation: "すべて負の場合",
    },
  ],
};
