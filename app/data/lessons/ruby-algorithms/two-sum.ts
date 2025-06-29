import type { AlgorithmLessonContent } from "./types";

export const twoSumLesson: AlgorithmLessonContent = {
  id: "two-sum",
  title: "Two Sum（2つの数の和）",
  description:
    "配列内の2つの数の和が指定された値になるインデックスを見つける問題",
  difficulty: "Easy",
  category: "配列・ハッシュテーブル",
  explanation:
    "Two Sumは配列処理とハッシュテーブルの基本的な問題です。効率的な解法では、ハッシュを使って一度のループで解を求めることができます。",
  detailedExplanation: `Two Sum問題の解法パターン：

1. 総当たり法（Brute Force）
   時間計算量: O(n²), 空間計算量: O(1)
   全ての組み合わせを試す最も単純な方法

2. ハッシュテーブル（推奨解法）
   時間計算量: O(n), 空間計算量: O(n)
   見た数値とそのインデックスをハッシュに記録
   
アルゴリズムの流れ：
- 配列を1回だけ走査
- 各要素について、「目標値 - 現在の値」がハッシュにあるか確認
- あれば解を返す、なければ現在の値をハッシュに追加

応用問題：
- Three Sum（3つの数の和）
- Four Sum（4つの数の和）
- Two Sum II（ソート済み配列版）`,
  example: `# Two Sum - ハッシュテーブル解法
def two_sum(nums, target)
  hash = {}
  
  nums.each_with_index do |num, i|
    complement = target - num
    
    # 補数がハッシュに存在するか確認
    if hash.has_key?(complement)
      return [hash[complement], i]
    end
    
    # 現在の数値とインデックスをハッシュに保存
    hash[num] = i
  end
  
  # 解が見つからない場合（問題の制約上、必ず解があるとする）
  []
end

# 使用例
nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
puts result.inspect  # => [0, 1] (nums[0] + nums[1] = 2 + 7 = 9)

# 別の例
nums2 = [3, 2, 4]
target2 = 6
result2 = two_sum(nums2, target2)
puts result2.inspect  # => [1, 2] (nums[1] + nums[2] = 2 + 4 = 6)`,
  exercise: `# 問題: Two Sum
# 整数の配列 nums と整数 target が与えられます。
# 2つの数の和が target と等しくなる配列のインデックスを返してください。
# 
# 制約:
# - 各入力には正確に1つの解があると仮定できます
# - 同じ要素を2回使用することはできません
# - 答えは任意の順序で返すことができます

def two_sum(nums, target)
  # ここに実装してください
  
end

# テスト用のコード（変更しないでください）
# テスト1
nums1 = [2, 7, 11, 15]
target1 = 9
result1 = two_sum(nums1, target1)
puts "テスト1: #{result1.inspect}"  # 期待値: [0, 1] または [1, 0]

# テスト2
nums2 = [3, 2, 4]
target2 = 6
result2 = two_sum(nums2, target2)
puts "テスト2: #{result2.inspect}"  # 期待値: [1, 2] または [2, 1]

# テスト3
nums3 = [3, 3]
target3 = 6
result3 = two_sum(nums3, target3)
puts "テスト3: #{result3.inspect}"  # 期待値: [0, 1] または [1, 0]`,
  solution: `def two_sum(nums, target)
  hash = {}
  
  nums.each_with_index do |num, i|
    complement = target - num
    
    if hash.has_key?(complement)
      return [hash[complement], i]
    end
    
    hash[num] = i
  end
  
  []
end`,
  testCases: [
    {
      input: "nums = [2, 7, 11, 15], target = 9",
      output: "[0, 1]",
      explanation: "nums[0] + nums[1] = 2 + 7 = 9 なので、[0, 1]を返す",
    },
    {
      input: "nums = [3, 2, 4], target = 6",
      output: "[1, 2]",
      explanation: "nums[1] + nums[2] = 2 + 4 = 6 なので、[1, 2]を返す",
    },
    {
      input: "nums = [3, 3], target = 6",
      output: "[0, 1]",
      explanation: "nums[0] + nums[1] = 3 + 3 = 6 なので、[0, 1]を返す",
    },
    {
      input: "nums = [1, 2, 3, 4, 5], target = 8",
      output: "[2, 4]",
      explanation: "nums[2] + nums[4] = 3 + 5 = 8 なので、[2, 4]を返す",
    },
  ],
};
