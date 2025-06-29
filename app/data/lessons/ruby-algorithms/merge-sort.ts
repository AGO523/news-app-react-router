import type { AlgorithmLessonContent } from "./types";

export const mergeSortLesson: AlgorithmLessonContent = {
  id: "merge-sort",
  title: "Merge Sort (マージソート)",
  difficulty: "Medium",
  category: "Sorting",
  description: "安定した分割統治法による効率的なソートアルゴリズム",
  example: `# マージソートの基本実装例
def merge_sort(arr)
  return arr if arr.length <= 1
  
  mid = arr.length / 2
  left = merge_sort(arr[0...mid])
  right = merge_sort(arr[mid..-1])
  
  merge(left, right)
end

def merge(left, right)
  result = []
  i = j = 0
  
  while i < left.length && j < right.length
    if left[i] <= right[j]
      result << left[i]
      i += 1
    else
      result << right[j]
      j += 1
    end
  end
  
  result.concat(left[i..-1]) if i < left.length
  result.concat(right[j..-1]) if j < right.length
  
  result
end`,
  exercise: `# マージソートアルゴリズムを実装してください
def merge_sort(arr)
  # 基本ケース: 配列の長さが1以下
  
  
  # 配列を中央で分割
  
  
  # 各部分を再帰的にソート
  
  
  # ソート済みの配列をマージ
  
end

def merge(left, right)
  # 2つのソート済み配列をマージ
  result = []
  
  
  # 両方の配列に要素がある間、小さい方を選択
  
  
  
  
  
  
  
  
  # 残りの要素を追加
  
  
  
  result
end

# テスト用のコード
arr = [38, 27, 43, 3, 9, 82, 10]
sorted_arr = merge_sort(arr)
puts sorted_arr.inspect`,
  problemStatement: `
配列が与えられたとき、マージソートアルゴリズムを使用して昇順にソートしてください。

**制約:**
- 1 ≤ array.length ≤ 1000
- -1000 ≤ array[i] ≤ 1000

**例:**
入力: [38, 27, 43, 3, 9, 82, 10]
出力: [3, 9, 10, 27, 38, 43, 82]
  `,
  solution: `def merge_sort(arr)
  return arr if arr.length <= 1
  
  mid = arr.length / 2
  left = merge_sort(arr[0...mid])
  right = merge_sort(arr[mid..-1])
  
  merge(left, right)
end

def merge(left, right)
  result = []
  i = j = 0
  
  while i < left.length && j < right.length
    if left[i] <= right[j]
      result << left[i]
      i += 1
    else
      result << right[j]
      j += 1
    end
  end
  
  # 残りの要素を追加
  result.concat(left[i..-1]) if i < left.length
  result.concat(right[j..-1]) if j < right.length
  
  result
end

# 使用例
arr = [38, 27, 43, 3, 9, 82, 10]
sorted_arr = merge_sort(arr)
puts sorted_arr.inspect  # [3, 9, 10, 27, 38, 43, 82]`,
  explanation: `
**マージソートのアルゴリズム:**

1. **基本ケース**: 配列の長さが1以下の場合、そのまま返す
2. **分割**: 配列を中央で2つに分割
3. **再帰**: 各部分配列を再帰的にソート
4. **マージ**: ソート済みの2つの配列を1つにマージ

**マージの手順:**
- 2つのソート済み配列を先頭から比較
- 小さい方を結果配列に追加
- 片方が終わったら残りをすべて追加

**時間計算量:** O(n log n) - 常に安定
**空間計算量:** O(n) - 追加配列が必要

**Rubyのポイント:**
- 範囲演算子\`...\`で左側の配列を作成
- \`-1\`で配列の最後まで指定
- \`concat\`メソッドで配列を結合
- 安定ソート（同じ値の相対位置が保持される）
  `,
  testCases: [
    {
      input: "[64, 34, 25, 12, 22, 11, 90]",
      expectedOutput: "[11, 12, 22, 25, 34, 64, 90]",
      explanation: "基本的なソート",
    },
    {
      input: "[5, 2, 4, 6, 1, 3]",
      expectedOutput: "[1, 2, 3, 4, 5, 6]",
      explanation: "ランダムな順序",
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
      input: "[3, 3, 3, 1, 1, 1]",
      expectedOutput: "[1, 1, 1, 3, 3, 3]",
      explanation: "重複要素の安定ソート",
    },
  ],
};
