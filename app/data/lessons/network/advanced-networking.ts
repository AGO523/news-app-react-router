import type { NetworkLessonContent } from "./types";

export const dnsLesson: NetworkLessonContent = {
  id: "dns",
  title: "DNS（Domain Name System）",
  description:
    "ドメイン名とIPアドレスを相互変換するDNSの仕組みと動作について学習します",
  category: "protocol",
  difficulty: 3,
  content: {
    theory: `DNS（Domain Name System）は、人間が理解しやすいドメイン名（例：google.com）をコンピュータが理解できるIPアドレス（例：142.250.196.110）に変換するシステムです。

    DNSの仕組み:
    - 階層構造でドメイン名を管理
    - ルートサーバー → TLDサーバー → 権威サーバーの順で問い合わせ
    - キャッシュ機能により効率的な名前解決
    - 再帰問い合わせと反復問い合わせ

    主要なレコードタイプ:
    - Aレコード: ドメイン名をIPv4アドレスにマッピング
    - AAAAレコード: ドメイン名をIPv6アドレスにマッピング
    - CNAMEレコード: ドメイン名の別名（エイリアス）
    - MXレコード: メール交換サーバーの指定
    - NSレコード: ネームサーバーの指定
    - TXTレコード: テキスト情報の格納`,

    keyPoints: [
      "DNS は分散データベースシステム",
      "階層構造でスケーラビリティを実現",
      "キャッシュにより応答速度を向上",
      "UDPポート53を使用（大容量時はTCP）",
      "逆引きでIPアドレスからドメイン名を取得可能",
    ],

    examples: [
      {
        title: "Webサイトアクセス時のDNS解決",
        description: "ブラウザでgoogle.comにアクセスする際のDNS動作",
        scenario:
          "1. ブラウザがローカルDNSキャッシュを確認 → 2. リゾルバーが再帰問い合わせを開始 → 3. ルートサーバーに.comのTLDサーバーを問い合わせ → 4. TLDサーバーにgoogle.comの権威サーバーを問い合わせ → 5. 権威サーバーからIPアドレスを取得",
      },
      {
        title: "メール送信時のMXレコード解決",
        description: "メール送信時にMXレコードでメールサーバーを特定",
        scenario:
          "example@gmail.comにメール送信時、gmail.comのMXレコードを問い合わせてGoogleのメールサーバー（gmail-smtp-in.l.google.com）のIPアドレスを取得",
      },
    ],
  },

  quiz: [
    {
      question: "DNSで使用される標準的なポート番号はどれですか？",
      options: ["22", "53", "80", "443"],
      correctAnswer: 1,
      explanation:
        "DNSは通常UDPポート53を使用します。大容量のデータ転送時にはTCPポート53も使用されます。",
    },
    {
      question:
        "ドメイン名の別名を設定するために使用されるDNSレコードはどれですか？",
      options: ["Aレコード", "MXレコード", "CNAMEレコード", "NSレコード"],
      correctAnswer: 2,
      explanation:
        "CNAMEレコードは、あるドメイン名に対して別名（エイリアス）を設定するために使用されます。",
    },
    {
      question: "DNS階層構造の最上位に位置するのはどれですか？",
      options: ["TLDサーバー", "権威サーバー", "ルートサーバー", "リゾルバー"],
      correctAnswer: 2,
      explanation:
        "ルートサーバーはDNS階層構造の最上位に位置し、TLD（トップレベルドメイン）サーバーの情報を管理しています。",
    },
  ],

  practicalExercise: {
    title: "DNS問い合わせの実行",
    description:
      "実際にDNS問い合わせコマンドを使用してドメイン名の解決を体験しましょう",
    scenario:
      "nslookupやdigコマンドを使用して、google.comのAレコード、MXレコード、NSレコードを調べ、DNS階層構造を理解する",
    expectedResult:
      "各レコードタイプで異なる情報が取得でき、DNSキャッシュやTTL値の概念が理解できる",
  },
};

export const httpHttpsLesson: NetworkLessonContent = {
  id: "http-https",
  title: "HTTP/HTTPSプロトコル",
  description:
    "Webの基盤となるHTTP/HTTPSプロトコルの仕組みとセキュリティについて学習します",
  category: "protocol",
  difficulty: 3,
  content: {
    theory: `HTTP（HyperText Transfer Protocol）は、WebブラウザとWebサーバー間でデータをやり取りするためのプロトコルです。HTTPS（HTTP Secure）は、HTTPにTLS/SSL暗号化を追加したセキュアな版です。

    HTTPの特徴:
    - ステートレスプロトコル（状態を保持しない）
    - リクエスト/レスポンスモデル
    - TCPポート80を使用
    - テキストベースのプロトコル

    HTTPSの特徴:
    - HTTPにTLS/SSL暗号化を追加
    - TCPポート443を使用
    - データの機密性、完全性、認証を提供
    - デジタル証明書による サーバー認証

    主要なHTTPメソッド:
    - GET: リソースの取得
    - POST: データの送信/リソースの作成
    - PUT: リソースの更新/作成
    - DELETE: リソースの削除
    - HEAD: ヘッダー情報のみ取得
    - OPTIONS: サポートされているメソッドの確認`,

    keyPoints: [
      "HTTPはステートレス、クッキーで状態管理",
      "HTTPSは暗号化により通信内容を保護",
      "ステータスコードで処理結果を通知",
      "ヘッダーで追加情報を送信",
      "REST APIの基盤プロトコル",
    ],

    examples: [
      {
        title: "GET リクエストによるWebページ取得",
        description: "ブラウザがWebページを取得する際の基本的な流れ",
        scenario:
          "GET /index.html HTTP/1.1\\nHost: example.com → サーバーが200 OKステータスでHTMLコンテンツを返送",
      },
      {
        title: "POST リクエストによるフォーム送信",
        description: "ユーザーがフォームを送信する際のHTTP通信",
        scenario:
          "POST /login HTTP/1.1でユーザー名とパスワードを送信 → サーバーが認証後に302 Foundでリダイレクト",
      },
      {
        title: "HTTPS通信における証明書検証",
        description: "HTTPS接続時のTLS/SSL証明書検証プロセス",
        scenario:
          "ブラウザがサーバー証明書の有効性、発行者、ドメイン名を検証してからHTTPS通信を確立",
      },
    ],
  },

  quiz: [
    {
      question: "HTTPSで使用される標準的なポート番号はどれですか？",
      options: ["80", "443", "8080", "8443"],
      correctAnswer: 1,
      explanation:
        "HTTPSは標準的にTCPポート443を使用します。HTTPは80番ポートです。",
    },
    {
      question: "HTTPステータスコード「404」の意味は何ですか？",
      options: [
        "サーバーエラー",
        "認証が必要",
        "リソースが見つからない",
        "リクエストが不正",
      ],
      correctAnswer: 2,
      explanation:
        "404 Not Foundは、要求されたリソース（ページやファイル）がサーバー上に見つからないことを示します。",
    },
    {
      question: "HTTPSで使用される暗号化技術はどれですか？",
      options: ["TLS/SSL", "IPSec", "WEP", "AES単体"],
      correctAnswer: 0,
      explanation:
        "HTTPSはTLS（Transport Layer Security）またはSSL（Secure Sockets Layer）を使用してHTTP通信を暗号化します。",
    },
  ],
};

export const firewallLesson: NetworkLessonContent = {
  id: "firewall",
  title: "ファイアウォール基礎",
  description:
    "ネットワークセキュリティの要であるファイアウォールの種類と動作原理を学習します",
  category: "security",
  difficulty: 4,
  content: {
    theory: `ファイアウォールは、ネットワーク間を流れるトラフィックを監視し、事前に定義されたセキュリティルールに基づいて通信を許可または拒否するセキュリティシステムです。

    ファイアウォールの種類:
    1. パケットフィルタリング型
       - IPアドレス、ポート番号、プロトコルで判定
       - ステートレス、高速処理
       - OSI第3層・第4層で動作

    2. ステートフルインスペクション型
       - 通信の状態（接続確立状況）を追跡
       - より詳細なセキュリティポリシーが可能
       - パケットフィルタリングの進化版

    3. アプリケーションゲートウェイ型（プロキシ型）
       - アプリケーション層まで解析
       - プロトコル固有の検査が可能
       - OSI第7層で動作

    4. 次世代ファイアウォール（NGFW）
       - アプリケーション識別
       - 侵入防止システム（IPS）機能
       - マルウェア検知機能`,

    keyPoints: [
      "デフォルト拒否の原則を採用",
      "インバウンド・アウトバウンド両方向の制御",
      "ログ記録と監視機能",
      "DMZ（非武装地帯）の構築",
      "定期的なルール見直しとメンテナンス",
    ],

    examples: [
      {
        title: "Webサーバー向けファイアウォール設定",
        description: "公開Webサーバーの基本的なファイアウォール設定例",
        scenario:
          "インバウンド: HTTP(80)、HTTPS(443)、SSH(22)のみ許可。アウトバウンド: HTTP/HTTPS、DNS、NTPを許可。その他すべて拒否",
      },
      {
        title: "内部ネットワークの保護",
        description: "企業内ネットワークにおけるファイアウォール配置",
        scenario:
          "境界ファイアウォールでインターネットからの攻撃をブロック、内部セグメント間にファイアウォールを配置してラテラルムーブメントを防止",
      },
      {
        title: "DMZの構築",
        description: "公開サーバーを安全に設置するためのDMZ設計",
        scenario:
          "インターネット↔外部FW↔DMZ（Webサーバー、メールサーバー）↔内部FW↔内部NWの構成で、段階的セキュリティを実現",
      },
    ],
  },

  quiz: [
    {
      question:
        "パケットフィルタリング型ファイアウォールが主に検査する情報はどれですか？",
      options: [
        "アプリケーションの内容",
        "IPアドレスとポート番号",
        "ユーザーの認証情報",
        "ファイルの種類",
      ],
      correctAnswer: 1,
      explanation:
        "パケットフィルタリング型ファイアウォールは、主にIPアドレス、ポート番号、プロトコル情報を基にトラフィックの許可/拒否を判定します。",
    },
    {
      question: "DMZ（非武装地帯）の主な目的は何ですか？",
      options: [
        "通信速度の向上",
        "公開サーバーの安全な設置",
        "内部ネットワークの拡張",
        "帯域幅の節約",
      ],
      correctAnswer: 1,
      explanation:
        "DMZは、インターネットからアクセス可能な公開サーバーを、内部ネットワークから分離して安全に設置するための領域です。",
    },
    {
      question:
        "ステートフルインスペクション型ファイアウォールの特徴は何ですか？",
      options: [
        "パケットの内容を暗号化",
        "通信の状態を追跡",
        "帯域幅を制限",
        "DNSキャッシュを管理",
      ],
      correctAnswer: 1,
      explanation:
        "ステートフルインスペクション型は、TCP接続の確立状況など通信の状態を追跡し、より詳細なセキュリティ制御を行います。",
    },
  ],

  practicalExercise: {
    title: "iptablesによる基本的なファイアウォール設定",
    description:
      "Linuxのiptablesを使用して基本的なファイアウォールルールを設定してみましょう",
    scenario:
      "SSH(22)、HTTP(80)、HTTPS(443)のインバウンドアクセスのみを許可し、その他をすべて拒否するルールを作成",
    expectedResult:
      "指定されたポートのみアクセス可能で、セキュリティが向上したサーバー設定が完成",
  },
};

export const vlanLesson: NetworkLessonContent = {
  id: "vlan",
  title: "VLAN（Virtual LAN）",
  description:
    "物理的なネットワークを論理的に分割するVLAN技術について学習します",
  category: "advanced",
  difficulty: 4,
  content: {
    theory: `VLAN（Virtual LAN）は、物理的に同一のネットワーク機器上で、論理的に複数のネットワークセグメントを作成する技術です。

    VLANの種類:
    1. ポートベースVLAN
       - スイッチのポートごとにVLANを割り当て
       - 最も基本的で理解しやすい方式

    2. タグVLAN（IEEE 802.1Q）
       - イーサネットフレームにVLANタグを追加
       - 複数のVLANを1つの物理リンクで伝送可能
       - トランクポートで使用

    3. MACアドレスベースVLAN
       - デバイスのMACアドレスでVLANを決定
       - デバイスの移動に対応可能

    VLAN間通信:
    - 異なるVLAN間の通信にはルーターが必要
    - レイヤー3スイッチで高速なVLAN間ルーティング
    - デフォルトゲートウェイの設定が重要`,

    keyPoints: [
      "ブロードキャストドメインを分割",
      "セキュリティとパフォーマンスの向上",
      "柔軟なネットワーク設計が可能",
      "物理的な配線変更なしで構成変更",
      "トランクポートで複数VLAN伝送",
    ],

    examples: [
      {
        title: "企業ネットワークのVLAN設計",
        description: "部署ごとにVLANを分割した企業ネットワーク",
        scenario:
          "VLAN10:営業部、VLAN20:開発部、VLAN30:総務部、VLAN99:管理VLAN として分割し、部署間のトラフィック分離とセキュリティ向上を実現",
      },
      {
        title: "トランクポートによるVLAN伝送",
        description: "複数のスイッチ間でVLAN情報を伝送",
        scenario:
          "スイッチ間をトランクポート（IEEE 802.1Q）で接続し、VLANタグ付きフレームで複数VLANを1本のケーブルで伝送",
      },
      {
        title: "VLAN間ルーティング",
        description: "異なるVLAN間での通信実現",
        scenario:
          "レイヤー3スイッチまたはルーターを使用して、VLAN10とVLAN20間の通信を制御・許可",
      },
    ],
  },

  quiz: [
    {
      question: "VLANの主な利点として正しくないものはどれですか？",
      options: [
        "ブロードキャストドメインの分割",
        "通信速度の向上",
        "セキュリティの向上",
        "柔軟なネットワーク構成",
      ],
      correctAnswer: 1,
      explanation:
        "VLANは主にセキュリティ向上とネットワーク管理の柔軟性を提供しますが、通信速度自体は向上しません。",
    },
    {
      question:
        "IEEE 802.1QでVLANタグに使用されるフィールドのビット数はどれですか？",
      options: ["8ビット", "12ビット", "16ビット", "24ビット"],
      correctAnswer: 1,
      explanation:
        "IEEE 802.1QのVLAN IDフィールドは12ビットで、4096個のVLAN（0-4095）を識別できます。",
    },
    {
      question: "異なるVLAN間で通信を行うために必要なものはどれですか？",
      options: [
        "より高速なスイッチ",
        "ルーター またはレイヤー3スイッチ",
        "追加のVLANタグ",
        "特別なケーブル",
      ],
      correctAnswer: 1,
      explanation:
        "異なるVLAN間はレイヤー2で分離されているため、レイヤー3でのルーティング機能が必要です。",
    },
  ],
};

export const loadBalancingLesson: NetworkLessonContent = {
  id: "load-balancing",
  title: "ロードバランシング",
  description:
    "高可用性とパフォーマンス向上を実現するロードバランシング技術について学習します",
  category: "advanced",
  difficulty: 4,
  content: {
    theory: `ロードバランシングは、複数のサーバーに負荷を分散することで、システムの可用性とパフォーマンスを向上させる技術です。

    ロードバランシングの種類:
    1. レイヤー4ロードバランシング（トランスポート層）
       - IPアドレスとポート番号で負荷分散
       - 高速処理が可能
       - プロトコルに依存しない

    2. レイヤー7ロードバランシング（アプリケーション層）
       - HTTPヘッダー、URL、コンテンツで負荷分散
       - より詳細な制御が可能
       - SSL終端処理も可能

    負荷分散アルゴリズム:
    - ラウンドロビン: 順番に振り分け
    - 重み付きラウンドロビン: サーバー性能に応じて重み付け
    - 最少接続数: 接続数が最も少ないサーバーに振り分け
    - IPハッシュ: クライアントIPでサーバーを決定
    - 最短応答時間: 応答が最も速いサーバーに振り分け

    ヘルスチェック:
    - サーバーの生存監視
    - 障害サーバーの自動切り離し
    - 復旧サーバーの自動組み込み`,

    keyPoints: [
      "単一障害点（SPOF）の排除",
      "水平スケーリングの実現",
      "セッション管理の考慮が重要",
      "ヘルスチェックによる自動故障検知",
      "SSL終端による暗号化処理の最適化",
    ],

    examples: [
      {
        title: "Webサーバーの負荷分散",
        description: "複数のWebサーバーによる高可用性構成",
        scenario:
          "ロードバランサーが3台のWebサーバーに対してラウンドロビンでHTTPリクエストを分散し、1台障害時も残り2台でサービス継続",
      },
      {
        title: "データベースの読み取り負荷分散",
        description: "マスター・スレーブ構成での読み取り性能向上",
        scenario:
          "書き込みはマスターDB、読み取りは複数のスレーブDBに分散することで、データベースの読み取り性能を向上",
      },
      {
        title: "地理的負荷分散",
        description: "グローバルなサービス提供でのレイテンシ最適化",
        scenario:
          "DNS ベースの地理的ロードバランシングで、ユーザーの所在地に最も近いデータセンターにトラフィックを誘導",
      },
    ],
  },

  quiz: [
    {
      question: "レイヤー4ロードバランシングで使用される情報はどれですか？",
      options: [
        "HTTPヘッダーとURL",
        "IPアドレスとポート番号",
        "ファイルの内容",
        "ユーザーの認証情報",
      ],
      correctAnswer: 1,
      explanation:
        "レイヤー4ロードバランシングは、OSI参照モデルの第4層（トランスポート層）のIPアドレスとポート番号を使用して負荷分散を行います。",
    },
    {
      question: "ラウンドロビン方式の負荷分散アルゴリズムの特徴は何ですか？",
      options: [
        "サーバーの応答時間で判定",
        "順番にリクエストを振り分け",
        "クライアントIPで固定",
        "サーバーの負荷で判定",
      ],
      correctAnswer: 1,
      explanation:
        "ラウンドロビン方式は、利用可能なサーバーに対して順番にリクエストを振り分ける最もシンプルな負荷分散アルゴリズムです。",
    },
    {
      question: "ヘルスチェックの主な目的は何ですか？",
      options: [
        "通信速度の測定",
        "サーバーの生存監視",
        "セキュリティの確認",
        "帯域幅の制御",
      ],
      correctAnswer: 1,
      explanation:
        "ヘルスチェックは、バックエンドサーバーが正常に動作しているかを定期的に監視し、障害時に自動的にトラフィックを他のサーバーに振り分けるために使用されます。",
    },
  ],
};

export const advancedNetworkLessons: NetworkLessonContent[] = [
  dnsLesson,
  httpHttpsLesson,
  firewallLesson,
  vlanLesson,
  loadBalancingLesson,
];
