import type { NetworkLessonContent } from "./types";

export const httpStatusCodesLesson: NetworkLessonContent = {
  id: "http-status-codes",
  title: "HTTPステータスコード完全解説",
  description:
    "Webエンジニア必須知識：HTTPステータスコードの意味と適切な使い分けを習得",
  category: "protocol",
  difficulty: 3,
  content: {
    theory: `HTTPステータスコードは、サーバーがクライアントのリクエストに対する処理結果を3桁の数字で表現する仕組みです。Webエンジニアとして適切なステータスコードを返すことは、RESTful APIの設計やデバッグにおいて必須のスキルです。

    1xx（情報レスポンス）:
    - 100 Continue: リクエストの継続を許可
    - 101 Switching Protocols: プロトコル切り替え

    2xx（成功）:
    - 200 OK: リクエスト成功
    - 201 Created: リソースの作成成功
    - 202 Accepted: リクエスト受理（処理は未完了）
    - 204 No Content: 成功したが返すコンテンツなし
    - 206 Partial Content: 範囲指定での部分的なコンテンツ

    3xx（リダイレクション）:
    - 301 Moved Permanently: 永続的な移転
    - 302 Found: 一時的な移転
    - 304 Not Modified: キャッシュ有効
    - 307 Temporary Redirect: 一時的なリダイレクト（メソッド変更禁止）
    - 308 Permanent Redirect: 永続的なリダイレクト（メソッド変更禁止）

    4xx（クライアントエラー）:
    - 400 Bad Request: リクエストが不正
    - 401 Unauthorized: 認証が必要
    - 403 Forbidden: アクセス権限なし
    - 404 Not Found: リソースが見つからない
    - 405 Method Not Allowed: HTTPメソッドが許可されていない
    - 409 Conflict: リソースの競合状態
    - 422 Unprocessable Entity: リクエスト形式は正しいが内容が処理できない
    - 429 Too Many Requests: レート制限に抵触

    5xx（サーバーエラー）:
    - 500 Internal Server Error: サーバー内部エラー
    - 502 Bad Gateway: プロキシ・ゲートウェイエラー
    - 503 Service Unavailable: サービス利用不可
    - 504 Gateway Timeout: ゲートウェイタイムアウト`,

    keyPoints: [
      "2xxは成功、4xxはクライアント側の問題、5xxはサーバー側の問題",
      "REST APIでは適切なステータスコードがUX向上につながる",
      "301と302、307と308の使い分けが重要",
      "401（認証）と403（認可）の違いを理解",
      "422はバリデーションエラーでよく使用",
    ],

    examples: [
      {
        title: "REST API設計での適切なステータスコード",
        description: "CRUD操作における適切なHTTPステータスコードの選択",
        scenario:
          "POST /users → 201 Created（ユーザー作成）, GET /users/123 → 200 OK（取得）, PUT /users/123 → 200 OK（更新）, DELETE /users/123 → 204 No Content（削除）",
      },
      {
        title: "エラーハンドリングでのステータスコード活用",
        description: "フロントエンドでのエラー処理における判定基準",
        scenario:
          "400番台エラー時はユーザーにエラーメッセージを表示、500番台エラー時は「サーバーエラーが発生しました」と汎用メッセージを表示してログに記録",
      },
      {
        title: "キャッシュ制御での304 Not Modified活用",
        description: "帯域幅節約とパフォーマンス向上",
        scenario:
          "If-Modified-SinceヘッダーでリソースのETags確認 → 変更なしの場合304を返してクライアントキャッシュを利用、帯域幅を節約",
      },
    ],
  },

  quiz: [
    {
      question:
        "ユーザー登録APIで新しいユーザーが正常に作成された場合、返すべき適切なHTTPステータスコードはどれですか？",
      options: ["200 OK", "201 Created", "202 Accepted", "204 No Content"],
      correctAnswer: 1,
      explanation:
        "新しいリソース（ユーザー）が作成された場合は201 Createdが適切です。200 OKは既存リソースの取得や更新で使用します。",
    },
    {
      question:
        "ログイン済みユーザーが管理者専用ページにアクセスしようとしたが権限がない場合、返すべきステータスコードはどれですか？",
      options: [
        "401 Unauthorized",
        "403 Forbidden",
        "404 Not Found",
        "405 Method Not Allowed",
      ],
      correctAnswer: 1,
      explanation:
        "認証済みだが権限がない場合は403 Forbiddenです。401 Unauthorizedは認証が必要な場合に使用します。",
    },
    {
      question:
        "バリデーションエラー（メールアドレス形式が不正）が発生した場合の適切なステータスコードはどれですか？",
      options: [
        "400 Bad Request",
        "422 Unprocessable Entity",
        "500 Internal Server Error",
        "404 Not Found",
      ],
      correctAnswer: 1,
      explanation:
        "リクエスト形式は正しいが内容にエラーがある場合は422 Unprocessable Entityが適切です。400は構文エラーで使用します。",
    },
  ],

  practicalExercise: {
    title: "REST API設計でのステータスコード選択",
    description:
      "実際のWebアプリケーションのAPIエンドポイントで適切なステータスコードを選択する演習",
    scenario:
      "ブログアプリのAPI設計で、記事作成・更新・削除・取得の各エンドポイントに対して、成功時・エラー時の適切なHTTPステータスコードを設計する",
    expectedResult:
      "各操作に対して適切なステータスコードが選択され、フロントエンド側で適切なエラーハンドリングが可能な設計",
  },
};

export const corsLesson: NetworkLessonContent = {
  id: "cors",
  title: "CORS（Cross-Origin Resource Sharing）",
  description: "Web開発で必ず遭遇するCORSエラーの原因と解決方法を完全理解",
  category: "security",
  difficulty: 4,
  content: {
    theory: `CORS（Cross-Origin Resource Sharing）は、Webブラウザが実装するセキュリティ機能で、異なるオリジン（ドメイン、ポート、プロトコル）間でのリソース共有を制御します。フロントエンドとバックエンドが異なるドメインで動作するSPA（Single Page Application）開発では必須の知識です。

    オリジンの定義:
    - プロトコル（http/https）+ ドメイン + ポート番号の組み合わせ
    - https://example.com:3000 と https://api.example.com:3000 は異なるオリジン

    同一オリジンポリシー:
    - ブラウザのセキュリティ機能
    - 悪意のあるサイトから他サイトのリソースへの不正アクセスを防止
    - XMLHttpRequest、Fetch API等に適用

    CORS の仕組み:
    1. Simple Request（単純リクエスト）
       - GET、POST、HEADメソッド
       - 特定のヘッダーのみ使用
       - プリフライトリクエスト不要

    2. Preflight Request（プリフライト）
       - Complex Requestの前に送信されるOPTIONSリクエスト
       - サーバーが実際のリクエストを許可するか事前確認
       - カスタムヘッダーやPUT/DELETEメソッド使用時

    主要なCORSヘッダー:
    - Access-Control-Allow-Origin: 許可するオリジン
    - Access-Control-Allow-Methods: 許可するHTTPメソッド
    - Access-Control-Allow-Headers: 許可するヘッダー
    - Access-Control-Allow-Credentials: クッキー送信許可
    - Access-Control-Max-Age: プリフライト結果のキャッシュ時間

    よくあるCORSエラーと対処法:
    - "has been blocked by CORS policy": サーバー側でCORSヘッダー設定が必要
    - プリフライトリクエストの失敗: OPTIONSメソッドに対応が必要
    - 認証情報付きリクエストの失敗: credentials設定とサーバー側対応が必要`,

    keyPoints: [
      "CORSはブラウザのセキュリティ機能（サーバー間通信では発生しない）",
      "プリフライトリクエストはOPTIONSメソッドで送信される",
      "Access-Control-Allow-Origin: * と credentials: true は同時使用不可",
      "開発環境とプロダクション環境でオリジンが異なる点に注意",
      "プロキシ設定でCORS問題を回避することも可能",
    ],

    examples: [
      {
        title: "React + Express.js でのCORS設定",
        description:
          "フロントエンド（localhost:3000）からバックエンド（localhost:8000）への API呼び出し",
        scenario:
          "Express.jsサーバーで cors ミドルウェアを設定: app.use(cors({ origin: 'http://localhost:3000', credentials: true })); Reactでは fetch(url, { credentials: 'include' }) で呼び出し",
      },
      {
        title: "APIキーを含むリクエストでのプリフライト",
        description: "カスタムヘッダー使用時のCORS設定",
        scenario:
          "X-API-Key ヘッダーを使用する場合、サーバーで Access-Control-Allow-Headers: 'X-API-Key' を設定。OPTIONSメソッドへの対応も必要",
      },
      {
        title: "本番環境でのCORS設定",
        description: "複数ドメインからのアクセス許可",
        scenario:
          "本番では origin を動的に設定: const allowedOrigins = ['https://myapp.com', 'https://admin.myapp.com']; origin: (origin, callback) => callback(null, allowedOrigins.includes(origin))",
      },
    ],
  },

  quiz: [
    {
      question:
        "https://myapp.com から https://api.myapp.com へのAPIリクエストが CORS エラーになる理由は何ですか？",
      options: [
        "HTTPSプロトコルを使用しているため",
        "APIという文字が含まれているため",
        "ドメインが異なるため（サブドメインでも別オリジン）",
        "GET以外のメソッドを使用しているため",
      ],
      correctAnswer: 2,
      explanation:
        "myapp.com と api.myapp.com はサブドメインが異なるため、別のオリジンとして扱われます。ドメイン、ポート、プロトコルのいずれかが異なると別オリジンになります。",
    },
    {
      question:
        "プリフライトリクエストが送信される条件として正しいものはどれですか？",
      options: [
        "すべてのAjaxリクエストで必ず送信される",
        "GETリクエストでのみ送信される",
        "カスタムヘッダーやPUT/DELETEメソッド使用時",
        "同一オリジンへのリクエスト時",
      ],
      correctAnswer: 2,
      explanation:
        "プリフライトリクエストは「複雑なリクエスト」の前に送信されます。カスタムヘッダー、PUT/DELETE/PATCHメソッド、特定のContent-Type使用時などが対象です。",
    },
    {
      question:
        "Access-Control-Allow-Origin: * と credentials: true を同時に設定するとどうなりますか？",
      options: [
        "正常に動作する",
        "CORSエラーが発生する",
        "プリフライトリクエストが無限ループする",
        "セキュリティ警告が表示される",
      ],
      correctAnswer: 1,
      explanation:
        "セキュリティ上の理由から、ワイルドカード（*）と credentials: true は同時使用できません。認証情報を送信する場合は具体的なオリジンを指定する必要があります。",
    },
  ],
};

export const webPerformanceLesson: NetworkLessonContent = {
  id: "web-performance",
  title: "Webパフォーマンス最適化",
  description: "サイト高速化のためのネットワークレベルでの最適化手法を習得",
  category: "advanced",
  difficulty: 4,
  content: {
    theory: `Webパフォーマンス最適化は、ユーザー体験向上とSEO改善に直結する重要なスキルです。ネットワークレベルでの最適化手法を理解することで、効果的な高速化を実現できます。

    主要なパフォーマンス指標:
    - FCP（First Contentful Paint）: 最初のコンテンツ表示時間
    - LCP（Largest Contentful Paint）: 最大要素の表示時間
    - CLS（Cumulative Layout Shift）: レイアウトシフトの累積
    - FID（First Input Delay）: 最初のユーザー操作応答時間
    - TTFB（Time To First Byte）: 最初のバイト受信時間

    ネットワーク最適化手法:

    1. HTTP/2 の活用
       - 多重化によるリクエスト並列処理
       - サーバープッシュでの先読み配信
       - ヘッダー圧縮によるオーバーヘッド削減

    2. CDN（Content Delivery Network）
       - 地理的に近いサーバーからの配信
       - エッジキャッシュによる高速化
       - 帯域幅の分散とサーバー負荷軽減

    3. キャッシュ戦略
       - ブラウザキャッシュ（Cache-Control, ETag）
       - サービスワーカーでのオフライン対応
       - メモリキャッシュとディスクキャッシュの活用

    4. リソース最適化
       - 画像最適化（WebP, AVIF形式、適切なサイズ）
       - 圧縮（Gzip, Brotli）
       - ミニファイ（CSS, JavaScript, HTML）
       - Tree Shaking による不要コード除去

    5. 読み込み最適化
       - クリティカルパスの最適化
       - 遅延読み込み（Lazy Loading）
       - プリロード（<link rel="preload">）
       - プリフェッチ（<link rel="prefetch">）

    6. ネットワーク接続最適化
       - HTTP/3 (QUIC) の活用
       - Keep-Alive 接続の利用
       - DNS プリフェッチ
       - 接続の事前確立（preconnect）`,

    keyPoints: [
      "測定なくして最適化なし（Lighthouse, WebPageTest活用）",
      "クリティカルレンダリングパスの理解が重要",
      "画像最適化が最も効果的な場合が多い",
      "キャッシュ戦略でリピート訪問者の体験向上",
      "モバイルファーストでの最適化が必須",
    ],

    examples: [
      {
        title: "画像最適化による大幅な高速化",
        description: "適切な画像形式と圧縮による読み込み時間短縮",
        scenario:
          "2MB のJPEG画像 → WebP形式 + 適切な圧縮で500KB → さらにレスポンシブ画像で デバイスに応じたサイズ配信 → 読み込み時間を70%短縮",
      },
      {
        title: "CDN活用による世界規模での高速化",
        description: "地理的分散による配信最適化",
        scenario:
          "東京のサーバーから世界配信 → CloudFront等のCDN導入 → 各地域のエッジサーバーから配信 → アメリカからのアクセスでも200ms以下の応答時間を実現",
      },
      {
        title: "Service Worker による積極的キャッシュ",
        description: "オフライン対応と高速なリピート訪問",
        scenario:
          "Service Worker で重要なリソースを事前キャッシュ → ネットワーク不安定時もアプリ動作 → リピート訪問時は瞬時に表示（Cache First戦略）",
      },
    ],
  },

  quiz: [
    {
      question:
        "LCP（Largest Contentful Paint）の改善に最も効果的な施策はどれですか？",
      options: [
        "JavaScriptの最適化",
        "メインコンテンツ画像の最適化",
        "CSSの圧縮",
        "フォントの最適化",
      ],
      correctAnswer: 1,
      explanation:
        "LCPは最大の要素（多くの場合画像）の表示時間を測定するため、メインコンテンツ画像の最適化が最も効果的です。WebP形式、適切なサイズ、プリロードなどが有効です。",
    },
    {
      question: "HTTP/2の主な利点として正しくないものはどれですか？",
      options: [
        "リクエストの多重化",
        "ヘッダー圧縮",
        "より強固な暗号化",
        "サーバープッシュ",
      ],
      correctAnswer: 2,
      explanation:
        "HTTP/2は暗号化を強化する技術ではありません。主な利点は多重化、ヘッダー圧縮、サーバープッシュによるパフォーマンス向上です。",
    },
    {
      question:
        "クリティカルレンダリングパスの最適化で最優先すべきは何ですか？",
      options: [
        "すべての画像を事前読み込み",
        "初回表示に必要なCSSを優先読み込み",
        "すべてのJavaScriptを非同期読み込み",
        "フォントファイルの圧縮",
      ],
      correctAnswer: 1,
      explanation:
        "クリティカルレンダリングパスでは、初回表示（Above The Fold）に必要なCSS をインライン化または優先読み込みすることが最重要です。",
    },
  ],
};

export const websocketLesson: NetworkLessonContent = {
  id: "websocket",
  title: "WebSocket リアルタイム通信",
  description: "チャット、通知、ライブ更新を実現するWebSocketの実装と最適化",
  category: "protocol",
  difficulty: 4,
  content: {
    theory: `WebSocketは、クライアントとサーバー間で全二重通信を実現するプロトコルです。HTTPとは異なり、一度接続を確立すると、双方向でリアルタイムにデータのやり取りが可能になります。現代のWebアプリケーションでは、チャット機能、ライブ通知、リアルタイムコラボレーションなどで必須の技術です。

    WebSocketの特徴:
    - 全二重通信（双方向の同時通信が可能）
    - 低レイテンシ（接続維持によるオーバーヘッド削減）
    - HTTPアップグレードで接続確立
    - フレームベースのデータ送信

    接続確立プロセス:
    1. HTTPリクエストでWebSocket接続を要求
       - Upgrade: websocket ヘッダー
       - Connection: Upgrade ヘッダー
       - Sec-WebSocket-Key で認証

    2. サーバーが101 Switching Protocols で応答
       - Sec-WebSocket-Accept で接続確認

    3. WebSocket接続が確立（HTTPからアップグレード）

    WebSocketのメッセージタイプ:
    - テキストフレーム: UTF-8エンコードされたテキスト
    - バイナリフレーム: 任意のバイナリデータ
    - Pingフレーム: 接続維持確認
    - Pongフレーム: Pingへの応答
    - Closeフレーム: 接続終了

    実装上の考慮事項:
    - 接続の再接続処理（ネットワーク断絶対応）
    - ハートビート機能（Keep-Alive）
    - バックプレッシャー対応（送信キューの管理）
    - セキュリティ（認証、認可、レート制限）
    - スケーラビリティ（複数サーバー間でのメッセージ同期）

    よくある問題と解決策:
    - プロキシ・ファイアウォールでの接続切断 → fallback戦略
    - メモリリーク → 適切な接続管理とイベントリスナー削除
    - メッセージの順序保証 → アプリケーションレベルでの制御
    - 大量接続時のサーバー負荷 → 接続プールと負荷分散`,

    keyPoints: [
      "HTTPからのアップグレードで接続確立",
      "全二重通信でリアルタイム性を実現",
      "再接続とエラーハンドリングが重要",
      "サーバーサイドでの接続管理が必要",
      "フォールバック戦略（Server-Sent Events等）も検討",
    ],

    examples: [
      {
        title: "リアルタイムチャットアプリケーション",
        description: "WebSocketを使用したマルチユーザーチャット実装",
        scenario:
          "ユーザーがメッセージ送信 → サーバーが全接続中クライアントにブロードキャスト → リアルタイムでメッセージ表示。ユーザーの入室・退室もリアルタイム通知",
      },
      {
        title: "株価リアルタイム更新システム",
        description: "金融データのライブストリーミング",
        scenario:
          "取引所からの価格データ → WebSocketサーバーで処理 → 接続中の全クライアントに価格更新をプッシュ → フロントエンドでリアルタイムチャート更新",
      },
      {
        title: "コラボレーティブエディター",
        description: "複数ユーザーでの同時編集機能",
        scenario:
          "Googleドキュメント風のエディター → 一方のユーザーの編集がWebSocket経由で他のユーザーにリアルタイム反映 → 競合解決アルゴリズムで整合性保持",
      },
    ],
  },

  quiz: [
    {
      question: "WebSocket接続が確立される際のHTTPステータスコードは何ですか？",
      options: [
        "200 OK",
        "101 Switching Protocols",
        "201 Created",
        "301 Moved Permanently",
      ],
      correctAnswer: 1,
      explanation:
        "WebSocket接続確立時は「101 Switching Protocols」が返されます。これはHTTPからWebSocketプロトコルへの切り替えを意味します。",
    },
    {
      question:
        "WebSocketでサーバーからクライアントに定期的に送信して接続状態を確認するフレームは何ですか？",
      options: ["Heartbeat", "Ping", "Keep-Alive", "Status"],
      correctAnswer: 1,
      explanation:
        "WebSocketでは「Ping」フレームをサーバーからクライアントに送信し、「Pong」フレームで応答することで接続状態を確認します。",
    },
    {
      question: "WebSocketの利点として正しくないものはどれですか？",
      options: [
        "双方向リアルタイム通信",
        "HTTPより低いオーバーヘッド",
        "自動的なデータ暗号化",
        "サーバープッシュ通信",
      ],
      correctAnswer: 2,
      explanation:
        "WebSocket自体は暗号化機能を提供しません。セキュアな通信にはWSS（WebSocket Secure）を使用し、TLS/SSLで暗号化する必要があります。",
    },
  ],
};

export const loadTestingLesson: NetworkLessonContent = {
  id: "load-testing",
  title: "負荷テストとパフォーマンス分析",
  description:
    "本番環境でのトラフィック増加に備える負荷テスト手法とボトルネック分析",
  category: "advanced",
  difficulty: 5,
  content: {
    theory: `負荷テストは、システムが想定される負荷に耐えられるかを検証し、ボトルネックを特定するための重要なプロセスです。Webエンジニアとして、アプリケーションのスケーラビリティとパフォーマンスを保証するために必須のスキルです。

    負荷テストの種類:

    1. Load Testing（通常負荷テスト）
       - 想定される通常の負荷での動作確認
       - レスポンス時間、スループットの測定
       - 長時間の安定性確認

    2. Stress Testing（ストレステスト）
       - システムの限界点を特定
       - 負荷を段階的に増加
       - 障害点とリカバリー能力の確認

    3. Spike Testing（スパイクテスト）
       - 急激な負荷増加への対応確認
       - バズやセール開始時の状況を模擬
       - オートスケーリングの動作確認

    4. Volume Testing（容量テスト）
       - 大量データでの動作確認
       - データベースやストレージの限界確認

    主要な測定指標:
    - RPS（Requests Per Second）: 秒間リクエスト数
    - Response Time: レスポンス時間（平均、50%ile、95%ile、99%ile）
    - Throughput: スループット（データ転送量）
    - Error Rate: エラー率
    - Concurrent Users: 同時接続ユーザー数
    - Resource Utilization: リソース使用率（CPU、メモリ、ディスク、ネットワーク）

    負荷テストツール:
    - k6: JavaScript ベースの現代的な負荷テストツール
    - Apache JMeter: GUI と CLI での多機能テスト
    - Artillery: Node.js ベースの軽量ツール
    - Gatling: Scala ベースの高性能ツール
    - wrk: 軽量で高速なHTTP負荷テストツール

    ボトルネック分析:
    1. アプリケーション層
       - アルゴリズムの効率性
       - データベースクエリの最適化
       - メモリリークやGCの問題

    2. データベース層
       - インデックスの最適化
       - クエリの実行計画分析
       - 接続プールの設定

    3. インフラ層
       - サーバーリソース（CPU、メモリ、ディスク）
       - ネットワーク帯域幅
       - ロードバランサーの設定

    4. 外部依存
       - 外部APIの応答時間
       - CDNのパフォーマンス
       - DNS解決時間`,

    keyPoints: [
      "本番環境に近い条件でテスト実行",
      "段階的な負荷増加でボトルネック特定",
      "複数の指標を組み合わせて総合判断",
      "継続的な監視とテストの自動化",
      "ビジネス要件に基づいた性能目標設定",
    ],

    examples: [
      {
        title: "ECサイトのセール負荷対策",
        description: "ブラックフライデー等の大規模セールに向けた負荷テスト",
        scenario:
          "通常の10倍トラフィックを想定 → k6で段階的負荷増加テスト → データベース接続プールがボトルネック判明 → 接続数増加とリードレプリカ追加で対応",
      },
      {
        title: "API サーバーのスケーラビリティ検証",
        description: "マイクロサービスアーキテクチャでの個別サービス負荷テスト",
        scenario:
          "各マイクロサービスの限界を特定 → 認証サービスが1000 RPS で限界 → Redis キャッシュ導入とインスタンス増強で 5000 RPS まで向上",
      },
      {
        title: "WebSocket 接続の大規模負荷テスト",
        description: "リアルタイムアプリケーションの同時接続数限界測定",
        scenario:
          "チャットアプリで10万同時接続テスト → メモリ使用量が限界に → 接続管理の最適化とサーバー増設で目標達成",
      },
    ],
  },

  quiz: [
    {
      question:
        "負荷テストでレスポンス時間を評価する際、最も重要な指標はどれですか？",
      options: [
        "平均レスポンス時間のみ",
        "最大レスポンス時間のみ",
        "95パーセンタイル値",
        "最小レスポンス時間のみ",
      ],
      correctAnswer: 2,
      explanation:
        "95パーセンタイル値は、95%のユーザーが体験するレスポンス時間を示し、外れ値の影響を受けにくいため、実際のユーザー体験を最もよく表します。",
    },
    {
      question: "スパイクテストの主な目的は何ですか？",
      options: [
        "システムの通常動作確認",
        "長時間の安定性確認",
        "急激な負荷増加への対応確認",
        "データベースの容量確認",
      ],
      correctAnswer: 2,
      explanation:
        "スパイクテストは、バズやセール開始時のような急激なトラフィック増加に対してシステムがどう対応するかを確認するテストです。",
    },
    {
      question:
        "負荷テスト結果でCPU使用率は正常だがレスポンス時間が遅い場合、最も疑うべきボトルネックは何ですか？",
      options: [
        "メモリ不足",
        "ディスクI/O",
        "データベースクエリ",
        "ネットワーク帯域",
      ],
      correctAnswer: 2,
      explanation:
        "CPU使用率が正常でもレスポンスが遅い場合、多くはデータベースクエリが原因です。インデックス不足や非効率なクエリがボトルネックになっている可能性が高いです。",
    },
  ],
};

export const webInterviewNetworkLessons: NetworkLessonContent[] = [
  httpStatusCodesLesson,
  corsLesson,
  webPerformanceLesson,
  websocketLesson,
  loadTestingLesson,
];
