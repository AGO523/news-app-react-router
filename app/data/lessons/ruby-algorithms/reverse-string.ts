import type { AlgorithmLessonContent } from "./types";

export const reverseStringLesson: AlgorithmLessonContent = {
  id: "reverse-string",
  title: "文字列の逆順（Reverse String）",
  description: "文字列を逆順にする複数のアルゴリズムを学習する問題",
  difficulty: "Easy",
  category: "文字列操作",
  explanation:
    "文字列の逆順は基本的なアルゴリズム問題です。Rubyの組み込みメソッドを使わずに実装することで、配列操作やポインタの概念を理解できます。",
  detailedExplanation: `文字列逆順の実装方法：

1. 新しい文字列を作成する方法
   時間計算量: O(n), 空間計算量: O(n)
   元の文字列を後ろから読んで新しい文字列を構築

2. Two Pointer（推奨解法）
   時間計算量: O(n), 空間計算量: O(1)
   文字列の両端からポインタを動かして文字を交換
   
3. 再帰的解法
   時間計算量: O(n), 空間計算量: O(n)（コールスタック）
   文字列を分割して再帰的に処理

アルゴリズムの詳細（Two Pointer）：
- 左端と右端にポインタを配置
- 左ポインタの文字と右ポインタの文字を交換
- ポインタを中央に向かって移動
- ポインタが交差するまで繰り返し

応用問題：
- 単語単位での逆順
- 文字列のローテーション
- 回文（Palindrome）判定`,
  example: `# 文字列の逆順 - Two Pointer解法
def reverse_string_two_pointer(s)
  chars = s.chars  # 文字列を文字配列に変換
  left = 0
  right = chars.length - 1
  
  while left < right
    # 左右の文字を交換
    chars[left], chars[right] = chars[right], chars[left]
    left += 1
    right -= 1
  end
  
  chars.join  # 文字配列を文字列に戻す
end

# 新しい文字列を作成する方法
def reverse_string_build(s)
  result = ""
  (s.length - 1).downto(0) do |i|
    result += s[i]
  end
  result
end

# 再帰的解法
def reverse_string_recursive(s)
  return s if s.length <= 1
  s[-1] + reverse_string_recursive(s[0...-1])
end

# 使用例
str = "hello"
puts reverse_string_two_pointer(str)  # => "olleh"
puts reverse_string_build(str)        # => "olleh"
puts reverse_string_recursive(str)    # => "olleh"`,
  exercise: `# 問題: 文字列の逆順
# 文字列 s が与えられます。この文字列を逆順にして返してください。
# 
# 制約:
# - Rubyの組み込みメソッド reverse は使用しないでください
# - Two Pointer法で実装してください（推奨）
# - 空間計算量 O(1) で実装してください（文字配列への変換は除く）

def reverse_string(s)
  # ここに実装してください
  # ヒント: 文字列を文字配列に変換してから処理すると良いでしょう
  
end

# テスト用のコード（変更しないでください）
test_cases = [
  "hello",
  "Ruby",
  "a",
  "",
  "racecar",
  "algorithm"
]

test_cases.each_with_index do |test_str, index|
  result = reverse_string(test_str)
  puts "テスト#{index + 1}: '#{test_str}' → '#{result}'"
end`,
  solution: `def reverse_string(s)
  chars = s.chars
  left = 0
  right = chars.length - 1
  
  while left < right
    chars[left], chars[right] = chars[right], chars[left]
    left += 1
    right -= 1
  end
  
  chars.join
end`,
  testCases: [
    {
      input: 's = "hello"',
      output: '"olleh"',
      explanation: "文字列 'hello' を逆順にすると 'olleh' になる",
    },
    {
      input: 's = "Ruby"',
      output: '"ybuR"',
      explanation: "文字列 'Ruby' を逆順にすると 'ybuR' になる",
    },
    {
      input: 's = "a"',
      output: '"a"',
      explanation: "1文字の文字列はそのまま",
    },
    {
      input: 's = ""',
      output: '""',
      explanation: "空文字列はそのまま",
    },
    {
      input: 's = "algorithm"',
      output: '"mhtirogla"',
      explanation: "文字列 'algorithm' を逆順にすると 'mhtirogla' になる",
    },
  ],
};
