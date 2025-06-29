import type { AlgorithmLessonContent } from "./types";

export const depthFirstSearchLesson: AlgorithmLessonContent = {
  id: "depth-first-search",
  title: "深さ優先探索（DFS）",
  description: "グラフや木構造を深さ方向に探索するアルゴリズム",
  difficulty: "Medium",
  category: "グラフ探索",
  explanation:
    "深さ優先探索（DFS）は、グラフや木構造において、可能な限り深く探索してから後戻りする探索アルゴリズムです。スタックまたは再帰を使って実装します。",
  detailedExplanation: `DFSの特徴：
1. 現在のノードから可能な限り深く進む
2. 行き止まりに達したら前のノードに戻る（バックトラック）
3. 未訪問の隣接ノードがある限り探索を続ける

実装方法：
- 再帰的実装（関数のコールスタックを利用）
- 反復的実装（明示的なスタックを使用）

時間計算量: O(V + E) (V: 頂点数, E: 辺数)
空間計算量: O(V)

応用：
- 連結成分の検出
- トポロジカルソート
- パスの探索
- 迷路の解法`,
  example: `# グラフの深さ優先探索（再帰版）
def dfs_recursive(graph, start, visited = Set.new)
  return if visited.include?(start)
  
  visited.add(start)
  puts start  # 訪問したノードを出力
  
  graph[start].each do |neighbor|
    dfs_recursive(graph, neighbor, visited)
  end
end

# グラフの深さ優先探索（反復版）
def dfs_iterative(graph, start)
  visited = Set.new
  stack = [start]
  
  while !stack.empty?
    node = stack.pop
    next if visited.include?(node)
    
    visited.add(node)
    puts node  # 訪問したノードを出力
    
    # 隣接ノードをスタックに追加（逆順で追加）
    graph[node].reverse.each do |neighbor|
      stack.push(neighbor) unless visited.include?(neighbor)
    end
  end
end

# 使用例
graph = {
  'A' => ['B', 'C'],
  'B' => ['D', 'E'],
  'C' => ['F'],
  'D' => [],
  'E' => ['F'],
  'F' => []
}

dfs_recursive(graph, 'A')`,
  exercise: `# 問題: グラフの深さ優先探索を実装してください
# 指定された開始ノードから到達可能なすべてのノードを配列で返してください

def dfs(graph, start)
  # ここに実装してください
  # 訪問したノードを順番に配列に格納して返してください
  
end

# テスト用のコード（変更しないでください）
test_graph = {
  1 => [2, 3],
  2 => [4],
  3 => [5],
  4 => [],
  5 => [6],
  6 => []
}

result = dfs(test_graph, 1)
puts result.inspect  # 期待値の例: [1, 2, 4, 3, 5, 6]`,
  solution: `def dfs(graph, start)
  visited = Set.new
  result = []
  
  def dfs_helper(graph, node, visited, result)
    return if visited.include?(node)
    
    visited.add(node)
    result << node
    
    graph[node].each do |neighbor|
      dfs_helper(graph, neighbor, visited, result)
    end
  end
  
  dfs_helper(graph, start, visited, result)
  result
end`,
  testCases: [
    {
      input:
        "graph = {1 => [2, 3], 2 => [4], 3 => [5], 4 => [], 5 => [6], 6 => []}, start = 1",
      output: "[1, 2, 4, 3, 5, 6]",
      explanation: "ノード1から開始して深さ優先で全てのノードを訪問",
    },
    {
      input: "graph = {1 => [2], 2 => [3], 3 => [1]}, start = 1",
      output: "[1, 2, 3]",
      explanation: "サイクルがあるグラフでも正しく動作",
    },
    {
      input: "graph = {1 => []}, start = 1",
      output: "[1]",
      explanation: "隣接ノードがない場合は自分だけを返す",
    },
  ],
};
