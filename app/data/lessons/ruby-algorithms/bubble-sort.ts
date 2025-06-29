import type { AlgorithmLessonContent } from "./types";

export const bubbleSortLesson: AlgorithmLessonContent = {
  id: "bubble-sort",
  title: "バブルソート",
  description: "隣接する要素を比較して交換を繰り返すソートアルゴリズム",
  difficulty: "Easy",
  category: "ソート",
  explanation:
    "バブルソートは最もシンプルなソートアルゴリズムの一つです。隣接する要素を比較し、必要に応じて交換することで配列を昇順または降順に並び替えます。",
  detailedExplanation: `バブルソートの動作：
1. 配列の先頭から隣接する2つの要素を比較
2. 左の要素が右の要素より大きい場合、交換
3. 配列の最後まで繰り返す（1回のパス）
4. 1回のパスで最大値が配列の最後に「浮上」
5. 未ソート部分に対して同じ処理を繰り返す

時間計算量: O(n²)
空間計算量: O(1)
安定ソート: Yes

改良点：
- 交換が発生しなかった場合の早期終了
- 各パスで確定する要素数の考慮`,
  example: `# 基本的なバブルソートの実装例
def bubble_sort(arr)
  n = arr.length
  
  (n - 1).times do |i|
    (n - 1 - i).times do |j|
      if arr[j] > arr[j + 1]
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
      end
    end
  end
  
  arr
end

# 使用例
numbers = [64, 34, 25, 12, 22, 11, 90]
puts bubble_sort(numbers.dup).inspect
# => [11, 12, 22, 25, 34, 64, 90]`,
  exercise: `# 問題: バブルソートアルゴリズムを実装してください
# 配列を昇順に並び替える関数を作成してください

def bubble_sort(arr)
  # ここに実装してください
  
end

# テスト用のコード（変更しないでください）
test_array = [5, 2, 8, 1, 9, 3, 7, 4, 6]
puts bubble_sort(test_array.dup).inspect  # 期待値: [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
  solution: `def bubble_sort(arr)
  n = arr.length
  
  (n - 1).times do |i|
    (n - 1 - i).times do |j|
      if arr[j] > arr[j + 1]
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
      end
    end
  end
  
  arr
end`,
  testCases: [
    {
      input: "arr = [5, 2, 8, 1, 9, 3, 7, 4, 6]",
      output: "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
      explanation: "配列が昇順にソートされる",
    },
    {
      input: "arr = [1, 2, 3]",
      output: "[1, 2, 3]",
      explanation: "既にソート済みの配列はそのまま",
    },
    {
      input: "arr = [3, 2, 1]",
      output: "[1, 2, 3]",
      explanation: "逆順の配列が正しくソートされる",
    },
  ],
};
