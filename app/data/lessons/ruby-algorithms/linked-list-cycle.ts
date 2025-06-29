import type { AlgorithmLessonContent } from "./types";

export const linkedListCycleLesson: AlgorithmLessonContent = {
  id: "linked-list-cycle",
  title: "🔗 Linked List Cycle (連結リストのサイクル)",
  difficulty: "Medium",
  category: "Linked List",
  description:
    "連結リストにサイクル（循環）があるかどうかを検出するアルゴリズム",
  problemStatement: `
連結リストのheadが与えられたとき、リストにサイクルがあるかどうかを判定してください。

サイクルとは、リスト内のあるノードが以前に訪問したノードを再び指している状態です。

**制約:**
- リストのノード数は [0, 10^4] の範囲
- -10^5 ≤ Node.val ≤ 10^5

**例:**
入力: head = [3,2,0,-4], pos = 1（インデックス1にサイクル）
出力: true

入力: head = [1,2], pos = 0（インデックス0にサイクル）
出力: true

入力: head = [1], pos = -1（サイクルなし）
出力: false
  `,
  solution: `# 連結リストのノード定義
class ListNode
  attr_accessor :val, :next
  
  def initialize(val = 0, next_node = nil)
    @val = val
    @next = next_node
  end
end

# Floyd's Cycle Detection Algorithm (Floyd判定法)
def has_cycle?(head)
  return false if head.nil? || head.next.nil?
  
  slow = fast = head
  
  while fast && fast.next
    slow = slow.next        # 1つずつ進む
    fast = fast.next.next   # 2つずつ進む
    
    # 速いポインタが遅いポインタに追いついたらサイクルあり
    return true if slow == fast
  end
  
  false
end

# ハッシュセットを使った解法
def has_cycle_set?(head)
  visited = Set.new
  current = head
  
  while current
    return true if visited.include?(current)
    visited.add(current)
    current = current.next
  end
  
  false
end

# 使用例
# [1] -> [2] -> [3] -> [4]
#        ^              |
#        |______________|
node1 = ListNode.new(1)
node2 = ListNode.new(2)
node3 = ListNode.new(3)
node4 = ListNode.new(4)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2  # サイクル作成

puts has_cycle?(node1)  # true`,
  explanation: `
**Floyd's Cycle Detection Algorithm (フロイドの判定法):**

**基本アイデア:**
2つのポインタを異なる速度で動かし、サイクルがあれば必ず出会う

**アルゴリズム:**
1. **初期化**: slow（1歩）とfast（2歩）ポインタをheadに設置
2. **移動**: slowは1つずつ、fastは2つずつ進む
3. **判定**: fastがslowに追いついたらサイクルあり
4. **終了**: fastがnullに到達したらサイクルなし

**なぜ動作するのか:**
- サイクルがあれば、fastは必ずslowより先にサイクルに入る
- サイクル内では、fastは毎回1歩ずつslowに近づく
- 有限回数で必ず出会う

**時間計算量:** O(n)
**空間計算量:** O(1) - 追加メモリを使わない

**代替解法: ハッシュセット**
- 訪問したノードを記録
- 再訪問したらサイクルあり
- 空間計算量: O(n)

**Rubyのポイント:**
- \`attr_accessor\`でゲッター/セッターを自動生成
- \`&&\`演算子でnullチェック
- オブジェクトの同一性は\`==\`で判定
  `,
  testCases: [
    {
      input: "head = [3,2,0,-4], pos = 1",
      expectedOutput: "true",
      explanation: "インデックス1でサイクル",
    },
    {
      input: "head = [1,2], pos = 0",
      expectedOutput: "true",
      explanation: "インデックス0でサイクル",
    },
    {
      input: "head = [1], pos = -1",
      expectedOutput: "false",
      explanation: "サイクルなし",
    },
    {
      input: "head = [], pos = -1",
      expectedOutput: "false",
      explanation: "空リスト",
    },
    {
      input: "head = [1,2,3,4,5], pos = -1",
      expectedOutput: "false",
      explanation: "長いリストでサイクルなし",
    },
  ],
};
