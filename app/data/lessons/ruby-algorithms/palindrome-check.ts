import type { AlgorithmLessonContent } from "./types";

export const palindromeCheckLesson: AlgorithmLessonContent = {
  id: "palindrome-check",
  title: "🔄 Palindrome Check (回文判定)",
  difficulty: "Easy",
  category: "String",
  description:
    "文字列が回文（前から読んでも後ろから読んでも同じ）かどうかを判定",
  example: `# 回文判定の実装例
def palindrome?(s)
  # 英数字のみを抽出して小文字に変換
  cleaned = s.downcase.gsub(/[^a-z0-9]/, '')
  
  # 文字列とその逆が等しいかチェック
  cleaned == cleaned.reverse
end

# 使用例
puts palindrome?("A man, a plan, a canal: Panama")  # true
puts palindrome?("race a car")  # false`,
  exercise: `# 回文判定のアルゴリズムを実装してください
def palindrome?(s)
  # 英数字のみを抽出して小文字に変換
  
  
  # 文字列とその逆が等しいかチェック
  
end

# より効率的な解法（オプション）
def palindrome_efficient?(s)
  cleaned = s.downcase.gsub(/[^a-z0-9]/, '')
  left, right = 0, cleaned.length - 1
  
  while left < right
    # 左右の文字が異なれば false
    
    
    # ポインタを内側に移動
    
    
  end
  
  true
end

# テスト用のコード
puts palindrome?("A man, a plan, a canal: Panama")  # true
puts palindrome?("race a car")  # false`,
  problemStatement: `
文字列が与えられたとき、その文字列が回文かどうかを判定してください。
英数字のみを考慮し、大文字と小文字は区別しません。

**制約:**
- 1 ≤ s.length ≤ 2 * 10^5
- sは英数字とスペース、句読点を含む

**例:**
入力: "A man, a plan, a canal: Panama"
出力: true

入力: "race a car"
出力: false

入力: " "
出力: true
  `,
  solution: `def palindrome?(s)
  # 英数字のみを抽出して小文字に変換
  cleaned = s.downcase.gsub(/[^a-z0-9]/, '')
  
  # 文字列とその逆が等しいかチェック
  cleaned == cleaned.reverse
end

# より効率的な解法（両端から比較）
def palindrome_efficient?(s)
  cleaned = s.downcase.gsub(/[^a-z0-9]/, '')
  left, right = 0, cleaned.length - 1
  
  while left < right
    return false if cleaned[left] != cleaned[right]
    left += 1
    right -= 1
  end
  
  true
end

# 使用例
puts palindrome?("A man, a plan, a canal: Panama")  # true
puts palindrome?("race a car")  # false`,
  explanation: `
**回文判定のアプローチ:**

**方法1: 文字列の逆転を利用**
1. 文字列から英数字のみを抽出
2. 小文字に統一
3. 元の文字列と逆転した文字列を比較

**方法2: 両端からの比較（より効率的）**
1. 前処理は同じ
2. 左端と右端のポインタを設置
3. 中央に向かって文字を比較

**時間計算量:**
- 方法1: O(n) - reverse操作が必要
- 方法2: O(n) - 1回の走査のみ

**空間計算量:** O(n) - クリーニング済み文字列

**Rubyのポイント:**
- \`gsub(/[^a-z0-9]/, '')\`で英数字以外を削除
- \`downcase\`で小文字に統一
- \`reverse\`で文字列を逆転
- 2つのポインタでの効率的な比較
- 正規表現での文字フィルタリング
  `,
  testCases: [
    {
      input: '"A man, a plan, a canal: Panama"',
      expectedOutput: "true",
      explanation: "英数字のみで回文",
    },
    {
      input: '"race a car"',
      expectedOutput: "false",
      explanation: "回文ではない",
    },
    {
      input: '" "',
      expectedOutput: "true",
      explanation: "空文字は回文",
    },
    {
      input: '"Madam"',
      expectedOutput: "true",
      explanation: "大文字小文字混合の回文",
    },
    {
      input: "\"No 'x' in Nixon\"",
      expectedOutput: "true",
      explanation: "句読点を含む回文",
    },
  ],
};
