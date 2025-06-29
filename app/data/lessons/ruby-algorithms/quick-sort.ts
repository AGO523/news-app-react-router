import type { AlgorithmLessonContent } from "./types";

export const quickSortLesson: AlgorithmLessonContent = {
  id: "quick-sort",
  title: "Quick Sort (クイックソート)",
  difficulty: "Medium",
  category: "Sorting",
  description: "配列を効率的にソートするための分割統治法アルゴリズム",
  example: `# クイックソートの基本実装例
def quick_sort(arr)
  return arr if arr.length <= 1
  
  pivot = arr[arr.length / 2]
  left = arr.select { |x| x < pivot }
  middle = arr.select { |x| x == pivot }
  right = arr.select { |x| x > pivot }
  
  quick_sort(left) + middle + quick_sort(right)
end

# 使用例
arr = [64, 34, 25, 12, 22, 11, 90]
puts quick_sort(arr).inspect`,
  exercise: `# クイックソートアルゴリズムを実装してください
def quick_sort(arr)
  # 基本ケース: 配列の長さが1以下の場合
  
  
  # ピボットを選択（中央の要素を使用）
  
  
  # 配列を3つの部分に分割
  # left: ピボットより小さい要素
  # middle: ピボットと等しい要素  
  # right: ピボットより大きい要素
  
  
  
  
  # 再帰的にソートして結合
  
end

# テスト用のコード
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = quick_sort(arr)
puts sorted_arr.inspect`,
  problemStatement: `
配列が与えられたとき、クイックソートアルゴリズムを使用して昇順にソートしてください。

**制約:**
- 1 ≤ array.length ≤ 1000
- -1000 ≤ array[i] ≤ 1000

**例:**
入力: [64, 34, 25, 12, 22, 11, 90]
出力: [11, 12, 22, 25, 34, 64, 90]
  `,
  solution: `def quick_sort(arr)
  return arr if arr.length <= 1
  
  pivot = arr[arr.length / 2]
  left = arr.select { |x| x < pivot }
  middle = arr.select { |x| x == pivot }
  right = arr.select { |x| x > pivot }
  
  quick_sort(left) + middle + quick_sort(right)
end

# 使用例
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = quick_sort(arr)
puts sorted_arr.inspect  # [11, 12, 22, 25, 34, 64, 90]`,
  explanation: `
**クイックソートのアルゴリズム:**

1. **基本ケース**: 配列の長さが1以下の場合、そのまま返す
2. **ピボット選択**: 配列の中央の要素をピボットとして選ぶ
3. **分割**: ピボットより小さい、等しい、大きい要素に分ける
4. **再帰**: 左と右の部分配列を再帰的にソート
5. **結合**: left + middle + right の順で結合

**時間計算量:**
- 平均: O(n log n)
- 最悪: O(n²) - 既にソート済みの配列など
- 最良: O(n log n)

**空間計算量:** O(log n) - 再帰スタック

**Rubyのポイント:**
- \`select\`メソッドを使った関数型スタイル
- 配列の連結は\`+\`演算子で簡潔に
- 中央インデックスは\`arr.length / 2\`で取得
  `,
  testCases: [
    {
      input: "[3, 1, 4, 1, 5]",
      expectedOutput: "[1, 1, 3, 4, 5]",
      explanation: "基本的なソート",
    },
    {
      input: "[5, 4, 3, 2, 1]",
      expectedOutput: "[1, 2, 3, 4, 5]",
      explanation: "逆順配列",
    },
    {
      input: "[1]",
      expectedOutput: "[1]",
      explanation: "単一要素",
    },
    {
      input: "[]",
      expectedOutput: "[]",
      explanation: "空配列",
    },
    {
      input: "[2, 2, 2, 2]",
      expectedOutput: "[2, 2, 2, 2]",
      explanation: "同じ要素",
    },
  ],
};
