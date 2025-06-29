import type { AlgorithmLessonContent } from "./types";

export const validParenthesesLesson: AlgorithmLessonContent = {
  id: "valid-parentheses",
  title: "有効な括弧（Valid Parentheses）",
  description: "スタックを使って括弧の対応が正しいかを判定する問題",
  difficulty: "Easy",
  category: "スタック",
  explanation:
    "括弧の有効性判定はスタックデータ構造の典型的な応用例です。開き括弧をスタックに追加し、閉じ括弧で対応する開き括弧を確認します。",
  detailedExplanation: `Valid Parentheses問題の解法：

スタック（Stack）データ構造の活用：
- LIFO（Last In, First Out）の性質を利用
- 開き括弧 '(', '[', '{' が来たらスタックにプッシュ
- 閉じ括弧 ')', ']', '}' が来たらスタックからポップして対応確認

アルゴリズムの流れ：
1. 文字列を1文字ずつ処理
2. 開き括弧の場合：スタックにプッシュ
3. 閉じ括弧の場合：
   - スタックが空なら無効（対応する開き括弧がない）
   - スタックから1つポップして対応を確認
   - 対応しない場合は無効
4. 最終的にスタックが空なら有効

時間計算量: O(n)
空間計算量: O(n)

応用問題：
- 括弧の最小追加数
- 最長有効括弧
- 括弧の削除`,
  example: `# Valid Parentheses - スタック解法
def is_valid(s)
  # 対応する括弧のマッピング
  mapping = {
    ')' => '(',
    ']' => '[',
    '}' => '{'
  }
  
  stack = []
  
  s.each_char do |char|
    if mapping.has_key?(char)
      # 閉じ括弧の場合
      if stack.empty? || stack.pop != mapping[char]
        return false
      end
    else
      # 開き括弧の場合
      stack.push(char)
    end
  end
  
  # 最終的にスタックが空なら有効
  stack.empty?
end

# 使用例
puts is_valid("()")        # => true
puts is_valid("()[]{}")    # => true
puts is_valid("(]")        # => false
puts is_valid("([)]")      # => false
puts is_valid("{[]}")      # => true

# より複雑な例
puts is_valid("((()))")    # => true
puts is_valid("((()])")    # => false`,
  exercise: `# 問題: Valid Parentheses（有効な括弧）
# 文字列 s が与えられます。この文字列が有効な括弧の組み合わせかどうかを判定してください。
# 
# 有効な括弧の条件:
# 1. 開き括弧は対応する閉じ括弧で閉じられている
# 2. 開き括弧は正しい順序で閉じられている
# 3. 全ての閉じ括弧に対応する開き括弧が存在する
#
# 対象の括弧: '()', '[]', '{}'
#
# 制約:
# - 1 <= s.length <= 10^4
# - s は括弧文字 '()[]{}' のみで構成される

def is_valid(s)
  # ここに実装してください
  # ヒント: スタック（配列）を使用して開き括弧を追跡しましょう
  
end

# テスト用のコード（変更しないでください）
test_cases = [
  "()",
  "()[]{}",
  "(]",
  "([)]",
  "{[]}",
  "((()))",
  "((()])",
  "",
  "([{}])"
]

test_cases.each_with_index do |test_str, index|
  result = is_valid(test_str)
  puts "テスト#{index + 1}: '#{test_str}' → #{result}"
end`,
  solution: `def is_valid(s)
  mapping = {
    ')' => '(',
    ']' => '[',
    '}' => '{'
  }
  
  stack = []
  
  s.each_char do |char|
    if mapping.has_key?(char)
      if stack.empty? || stack.pop != mapping[char]
        return false
      end
    else
      stack.push(char)
    end
  end
  
  stack.empty?
end`,
  testCases: [
    {
      input: 's = "()"',
      output: "true",
      explanation: "単純な括弧のペアが正しく対応している",
    },
    {
      input: 's = "()[]{}"',
      output: "true",
      explanation: "3種類の括弧がすべて正しく対応している",
    },
    {
      input: 's = "(]"',
      output: "false",
      explanation: "開き括弧 '(' に対して閉じ括弧 ']' が対応していない",
    },
    {
      input: 's = "([)]"',
      output: "false",
      explanation: "括弧の順序が正しくない（交差している）",
    },
    {
      input: 's = "{[]}"',
      output: "true",
      explanation: "ネストした括弧が正しく対応している",
    },
  ],
};
