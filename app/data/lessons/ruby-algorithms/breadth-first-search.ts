import type { AlgorithmLessonContent } from "./types";

export const breadthFirstSearchLesson: AlgorithmLessonContent = {
  id: "breadth-first-search",
  title: "🌊 Breadth First Search (幅優先探索)",
  difficulty: "Medium",
  category: "Graph",
  description: "グラフや木構造で幅優先に探索を行うアルゴリズム",
  example: `# 幅優先探索の実装例
def bfs(graph, start)
  visited = Set.new
  queue = [start]
  result = []
  
  until queue.empty?
    node = queue.shift
    next if visited.include?(node)
    
    visited.add(node)
    result << node
    
    # 隣接ノードをキューに追加
    graph[node]&.each do |neighbor|
      queue << neighbor unless visited.include?(neighbor)
    end
  end
  
  result
end

# 使用例
graph = {0 => [1, 2], 1 => [2], 2 => [0, 3], 3 => [3]}
puts bfs(graph, 2).inspect  # [2, 0, 3, 1]`,
  exercise: `# 幅優先探索(BFS)を実装してください
def bfs(graph, start)
  # 訪問済みセット、キュー、結果配列を初期化
  
  
  
  
  # キューが空になるまで繰り返し
  until queue.empty?
    # キューからノードを取り出す（FIFO）
    
    
    # 既に訪問済みならスキップ
    
    
    # ノードを訪問済みにマークして結果に追加
    
    
    
    # 隣接ノードをキューに追加
    
    
    
  end
  
  
end

# テスト用のコード
graph = {
  0 => [1, 2],
  1 => [2], 
  2 => [0, 3],
  3 => [3]
}
result = bfs(graph, 2)
puts result.inspect  # 期待値: [2, 0, 3, 1]`,
  problemStatement: `
隣接リストで表現されたグラフと開始ノードが与えられたとき、幅優先探索(BFS)を実装してください。
すべての到達可能なノードを訪問順に返してください。

**制約:**
- 1 ≤ nodes ≤ 100
- グラフは有向または無向
- ノードは0から始まるインデックス

**例:**
グラフ: {0: [1, 2], 1: [2], 2: [0, 3], 3: [3]}
開始ノード: 2
出力: [2, 0, 3, 1]
  `,
  solution: `def bfs(graph, start)
  visited = Set.new
  queue = [start]
  result = []
  
  until queue.empty?
    node = queue.shift
    next if visited.include?(node)
    
    visited.add(node)
    result << node
    
    # 隣接ノードをキューに追加
    graph[node]&.each do |neighbor|
      queue << neighbor unless visited.include?(neighbor)
    end
  end
  
  result
end

# 使用例
graph = {
  0 => [1, 2],
  1 => [2],
  2 => [0, 3],
  3 => [3]
}

result = bfs(graph, 2)
puts result.inspect  # [2, 0, 3, 1]`,
  explanation: `
**幅優先探索(BFS)のアルゴリズム:**

1. **初期化**: 訪問済みセット、キュー、結果配列を用意
2. **開始**: 開始ノードをキューに追加
3. **反復**: キューが空になるまで繰り返し
   - キューからノードを取り出す（FIFO）
   - 未訪問なら訪問済みにマークして結果に追加
   - 隣接ノードをキューに追加

**特徴:**
- **層ごとの探索**: 距離1の全ノード→距離2の全ノード...
- **最短経路**: 重みなしグラフで最短パスを見つける
- **完全性**: 有限グラフですべての到達可能ノードを発見

**時間計算量:** O(V + E) - V:頂点数、E:辺数
**空間計算量:** O(V) - キューと訪問済みセット

**Rubyのポイント:**
- \`Set\`クラスで効率的な重複チェック
- \`shift\`でキューの先頭から取り出し（FIFO）
- \`&.\`演算子で安全なメソッド呼び出し
- \`until\`ループでキューが空まで処理
  `,
  testCases: [
    {
      input: "graph: {0: [1, 2], 1: [2], 2: [0, 3], 3: [3]}, start: 2",
      expectedOutput: "[2, 0, 3, 1]",
      explanation: "基本的なBFS",
    },
    {
      input: "graph: {0: [1], 1: [2], 2: [3], 3: []}, start: 0",
      expectedOutput: "[0, 1, 2, 3]",
      explanation: "線形グラフ",
    },
    {
      input: "graph: {0: [1, 2, 3], 1: [], 2: [], 3: []}, start: 0",
      expectedOutput: "[0, 1, 2, 3]",
      explanation: "星型グラフ",
    },
    {
      input: "graph: {0: []}, start: 0",
      expectedOutput: "[0]",
      explanation: "単一ノード",
    },
    {
      input: "graph: {0: [1, 2], 1: [0], 2: [0]}, start: 1",
      expectedOutput: "[1, 0, 2]",
      explanation: "無向グラフ",
    },
  ],
};
