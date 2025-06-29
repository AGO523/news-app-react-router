import type { AlgorithmLessonContent } from "./types";

export const binaryTreeInorderLesson: AlgorithmLessonContent = {
  id: "binary-tree-inorder",
  title: "🌳 Binary Tree Inorder Traversal (二分木の中順走査)",
  difficulty: "Medium",
  category: "Tree",
  description: "二分木を中順（左→根→右）で走査するアルゴリズム",
  problemStatement: `
二分木のrootが与えられたとき、中順走査の結果を配列で返してください。

中順走査とは：左の子ノード → 根ノード → 右の子ノード の順で訪問する方法です。

**制約:**
- ツリーのノード数は [0, 100] の範囲
- -100 ≤ Node.val ≤ 100

**例:**
入力: root = [1,null,2,3]
    1
     \\
      2
     /
    3
出力: [1,3,2]

入力: root = []
出力: []

入力: root = [1]
出力: [1]
  `,
  solution: `# 二分木のノード定義
class TreeNode
  attr_accessor :val, :left, :right
  
  def initialize(val = 0, left = nil, right = nil)
    @val = val
    @left = left
    @right = right
  end
end

# 再帰的解法
def inorder_traversal_recursive(root)
  result = []
  inorder_helper(root, result)
  result
end

def inorder_helper(node, result)
  return if node.nil?
  
  inorder_helper(node.left, result)   # 左の子
  result << node.val                  # 根ノード
  inorder_helper(node.right, result)  # 右の子
end

# 反復的解法（スタック使用）
def inorder_traversal_iterative(root)
  result = []
  stack = []
  current = root
  
  while current || !stack.empty?
    # 左端まで降りてスタックにプッシュ
    while current
      stack.push(current)
      current = current.left
    end
    
    # スタックからポップして値を記録
    current = stack.pop
    result << current.val
    
    # 右の子に移動
    current = current.right
  end
  
  result
end

# 使用例
#     1
#    / \\
#   2   3
#  / \\
# 4   5
root = TreeNode.new(1)
root.left = TreeNode.new(2)
root.right = TreeNode.new(3)
root.left.left = TreeNode.new(4)
root.left.right = TreeNode.new(5)

puts inorder_traversal_recursive(root).inspect  # [4, 2, 5, 1, 3]`,
  explanation: `
**中順走査 (Inorder Traversal):**

**訪問順序:** 左の子 → 根 → 右の子

**再帰的アプローチ:**
1. 左の子ノードを再帰的に処理
2. 現在のノードの値を結果に追加
3. 右の子ノードを再帰的に処理

**反復的アプローチ（スタック使用）:**
1. 現在のノードから左端まで降りてスタックに積む
2. スタックからノードを取り出して値を記録
3. 右の子ノードに移動して繰り返し

**時間計算量:** O(n) - 各ノードを1回ずつ訪問
**空間計算量:** 
- 再帰: O(h) - h: 木の高さ（再帰スタック）
- 反復: O(h) - スタックのサイズ

**二分探索木での特徴:**
中順走査は昇順にソートされた順序で値を取得できる

**Rubyのポイント:**
- \`<<\`演算子で配列に要素を追加
- \`push/pop\`でスタック操作
- \`nil?\`でnullチェック
- 再帰とループの2つのアプローチ
  `,
  testCases: [
    {
      input: "root = [1,null,2,3]",
      expectedOutput: "[1,3,2]",
      explanation: "基本的な中順走査",
    },
    {
      input: "root = []",
      expectedOutput: "[]",
      explanation: "空の木",
    },
    {
      input: "root = [1]",
      expectedOutput: "[1]",
      explanation: "単一ノード",
    },
    {
      input: "root = [1,2,3,4,5]",
      expectedOutput: "[4,2,5,1,3]",
      explanation: "完全二分木",
    },
    {
      input: "root = [1,2,null,3]",
      expectedOutput: "[3,2,1]",
      explanation: "左に偏った木",
    },
  ],
};
