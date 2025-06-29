import type { AlgorithmLessonContent } from "./types";

export const findPeakElementLesson: AlgorithmLessonContent = {
  id: "find-peak-element",
  title: "⛰️ Find Peak Element (ピーク要素の発見)",
  difficulty: "Medium",
  category: "Binary Search",
  description:
    "配列内でピーク要素（隣接要素より大きい要素）を効率的に見つけるアルゴリズム",
  problemStatement: `
配列numsが与えられたとき、ピーク要素のインデックスを返してください。

ピーク要素とは、隣接する要素よりも厳密に大きい要素です。
配列の両端は負の無限大として扱います。

**制約:**
- 1 ≤ nums.length ≤ 1000
- -2^31 ≤ nums[i] ≤ 2^31 - 1
- nums[i] != nums[i + 1] (隣接要素は異なる)

**例:**
入力: nums = [1,2,3,1]
出力: 2 (インデックス2の要素3がピーク)

入力: nums = [1,2,1,3,5,6,4]
出力: 1 または 5 (複数のピークが存在)
  `,
  solution: `# 線形探索解法 O(n)
def find_peak_element_linear(nums)
  (0...nums.length).each do |i|
    left_smaller = i == 0 || nums[i] > nums[i-1]
    right_smaller = i == nums.length-1 || nums[i] > nums[i+1]
    
    return i if left_smaller && right_smaller
  end
  
  -1  # 見つからない場合（実際には必ず存在）
end

# 二分探索解法 O(log n)
def find_peak_element(nums)
  left, right = 0, nums.length - 1
  
  while left < right
    mid = left + (right - left) / 2
    
    if nums[mid] > nums[mid + 1]
      # 左側にピークがある（現在の要素を含む）
      right = mid
    else
      # 右側にピークがある
      left = mid + 1
    end
  end
  
  left
end

# 使用例
nums1 = [1, 2, 3, 1]
puts find_peak_element(nums1)  # 2

nums2 = [1, 2, 1, 3, 5, 6, 4]
puts find_peak_element(nums2)  # 1 または 5`,
  explanation: `
**ピーク要素検索のアルゴリズム:**

**線形探索 O(n):**
- 各要素について左右の隣接要素と比較
- 両方より大きければピーク

**二分探索 O(log n):**
重要な観察：配列に必ずピークが存在する

**二分探索の戦略:**
1. 中央要素 \`mid\` を選ぶ
2. \`nums[mid] > nums[mid+1]\` の場合：
   - 左側（midを含む）にピークが存在
   - \`right = mid\`
3. そうでない場合：
   - 右側にピークが存在  
   - \`left = mid + 1\`

**なぜ動作するのか:**
- 配列の端は負の無限大として扱う
- 上り坂があれば必ずピークに到達
- 下り坂があれば逆方向にピークが存在

**時間計算量:** 
- 線形: O(n)
- 二分探索: O(log n)

**空間計算量:** O(1)

**Rubyのポイント:**
- \`...\`で排他的範囲（終端を含まない）
- 整数除算で中点計算
- 論理演算子\`&&\`での条件組み合わせ
- 二分探索での範囲更新
  `,
  testCases: [
    {
      input: "[1,2,3,1]",
      expectedOutput: "2",
      explanation: "インデックス2の要素3がピーク",
    },
    {
      input: "[1,2,1,3,5,6,4]",
      expectedOutput: "1 or 5",
      explanation: "複数のピークが存在",
    },
    {
      input: "[1]",
      expectedOutput: "0",
      explanation: "単一要素はピーク",
    },
    {
      input: "[1,2]",
      expectedOutput: "1",
      explanation: "昇順の場合、最後がピーク",
    },
    {
      input: "[2,1]",
      expectedOutput: "0",
      explanation: "降順の場合、最初がピーク",
    },
  ],
};
