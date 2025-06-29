import type { AlgorithmLessonContent } from "./types";

export const binarySearchLesson: AlgorithmLessonContent = {
  id: "binary-search",
  title: "二分探索",
  description: "ソート済み配列から効率的に要素を検索するアルゴリズム",
  difficulty: "Easy",
  category: "探索",
  explanation:
    "二分探索は、ソート済みの配列から特定の値を効率的に探索するアルゴリズムです。毎回探索範囲を半分に絞ることで、O(log n)の時間計算量で検索できます。",
  detailedExplanation: `二分探索の仕組み：
1. 配列の中央の要素と目標値を比較
2. 目標値が中央の要素より小さい場合、左半分を探索
3. 目標値が中央の要素より大きい場合、右半分を探索
4. 目標値が見つかるか、探索範囲がなくなるまで繰り返し

時間計算量: O(log n)
空間計算量: O(1)

適用場面：
- ソート済み配列での値の検索
- 条件を満たす最小値・最大値の探索
- 上限・下限の境界値探索`,
  example: `# 基本的な二分探索の実装例
def binary_search(arr, target)
  left = 0
  right = arr.length - 1
  
  while left <= right
    mid = (left + right) / 2
    
    if arr[mid] == target
      return mid
    elsif arr[mid] < target
      left = mid + 1
    else
      right = mid - 1
    end
  end
  
  -1  # 見つからない場合
end

# 使用例
arr = [1, 3, 5, 7, 9, 11, 13]
puts binary_search(arr, 7)  # => 3`,
  exercise: `# 問題: ソート済み配列から指定された値のインデックスを返す関数を実装してください
# 見つからない場合は-1を返してください

def binary_search(arr, target)
  # ここに実装してください
  
end

# テスト用のコード（変更しないでください）
test_array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
puts binary_search(test_array, 10)  # 期待値: 4
puts binary_search(test_array, 15)  # 期待値: -1`,
  solution: `def binary_search(arr, target)
  left = 0
  right = arr.length - 1
  
  while left <= right
    mid = (left + right) / 2
    
    if arr[mid] == target
      return mid
    elsif arr[mid] < target
      left = mid + 1
    else
      right = mid - 1
    end
  end
  
  -1
end`,
  testCases: [
    {
      input: "arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], target = 10",
      output: "4",
      explanation: "配列の5番目（インデックス4）に10がある",
    },
    {
      input: "arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], target = 15",
      output: "-1",
      explanation: "15は配列に存在しないため-1を返す",
    },
    {
      input: "arr = [1], target = 1",
      output: "0",
      explanation: "単一要素の配列で値が一致",
    },
  ],
};
