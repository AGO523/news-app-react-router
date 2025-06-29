import type { NetworkLessonContent } from "./types";
import { advancedNetworkLessons } from "./advanced-networking";
import { securityNetworkLessons } from "./security-networking";

export const osi7LayerLesson: NetworkLessonContent = {
  id: "osi-7-layer",
  title: "OSI参照モデル（7階層）",
  description:
    "ネットワーク通信の基礎となるOSI参照モデルの7階層について学習します",
  category: "basic",
  difficulty: 2,
  content: {
    theory: `OSI参照モデル（Open Systems Interconnection Reference Model）は、ネットワーク通信を7つの階層に分けて整理したモデルです。各階層は特定の役割を持ち、下位層から上位層へとデータが処理されていきます。

    第7層（アプリケーション層）: HTTP、SMTP、FTPなどのプロトコル
    第6層（プレゼンテーション層）: データの暗号化、圧縮、文字コード変換
    第5層（セッション層）: 通信セッションの確立、維持、終了
    第4層（トランスポート層）: TCP、UDPによる信頼性のあるデータ転送
    第3層（ネットワーク層）: IPアドレスによるルーティング
    第2層（データリンク層）: MACアドレスによるフレーム転送
    第1層（物理層）: 電気信号、光信号の送受信`,

    keyPoints: [
      "各階層は独立した機能を持つ",
      "上位層は下位層のサービスを利用する",
      "データは各層でカプセル化される",
      "障害の切り分けが容易になる",
      "異なるベンダー間の相互接続が可能",
    ],

    examples: [
      {
        title: "Webサイト閲覧時のデータフロー",
        description: "ブラウザでWebサイトを閲覧する際のOSI各層での処理",
        scenario:
          "ユーザーがブラウザで「https://example.com」にアクセスする場合、アプリケーション層でHTTPS要求が作成され、各層を通ってWebサーバーに到達し、レスポンスが返される",
      },
      {
        title: "メール送信時の処理",
        description: "電子メールを送信する際の各層での役割",
        scenario:
          "SMTPプロトコル（第7層）でメールが作成され、TCP（第4層）で信頼性のある転送が行われ、IP（第3層）でルーティングされてメールサーバーに届く",
      },
    ],
  },

  quiz: [
    {
      question:
        "OSI参照モデルで、IPアドレスによるルーティングを行うのはどの層ですか？",
      options: [
        "第2層（データリンク層）",
        "第3層（ネットワーク層）",
        "第4層（トランスポート層）",
        "第5層（セッション層）",
      ],
      correctAnswer: 1,
      explanation:
        "第3層（ネットワーク層）は、IPアドレスを使用してパケットのルーティングを行います。",
    },
    {
      question: "HTTPプロトコルはOSI参照モデルのどの層に属しますか？",
      options: [
        "第5層（セッション層）",
        "第6層（プレゼンテーション層）",
        "第7層（アプリケーション層）",
        "第4層（トランスポート層）",
      ],
      correctAnswer: 2,
      explanation:
        "HTTPは第7層（アプリケーション層）のプロトコルで、Webアプリケーション間の通信を行います。",
    },
  ],

  practicalExercise: {
    title: "パケットキャプチャ分析",
    description:
      "実際のネットワーク通信をOSI参照モデルの観点から分析してみましょう",
    scenario:
      "Wiresharkなどのツールを使用して、Webサイトアクセス時のパケットを確認し、各OSI層のヘッダ情報を特定する",
    expectedResult:
      "Ethernet（第2層）、IP（第3層）、TCP（第4層）、HTTP（第7層）の各ヘッダが確認できる",
  },
};

export const tcpUdpLesson: NetworkLessonContent = {
  id: "tcp-udp",
  title: "TCP/UDP プロトコル",
  description:
    "トランスポート層の主要プロトコルであるTCPとUDPの違いと使い分けを学習します",
  category: "protocol",
  difficulty: 3,
  content: {
    theory: `TCP（Transmission Control Protocol）とUDP（User Datagram Protocol）は、どちらもOSI参照モデルの第4層（トランスポート層）で動作するプロトコルです。

    TCP（信頼性重視）:
    - コネクション型通信
    - データの到達保証、順序保証
    - フロー制御、輻輳制御
    - 3-way handshakeによる接続確立
    - オーバーヘッドが大きい

    UDP（速度重視）:
    - コネクションレス型通信
    - データの到達保証なし
    - 軽量で高速
    - リアルタイム性を重視
    - オーバーヘッドが小さい`,

    keyPoints: [
      "TCPは信頼性、UDPは速度を重視",
      "TCPは接続確立が必要、UDPは不要",
      "TCPはデータの順序を保証、UDPは保証しない",
      "用途に応じて適切なプロトコルを選択",
      "ポート番号により上位アプリケーションを識別",
    ],

    examples: [
      {
        title: "TCPを使用するアプリケーション",
        description: "信頼性が重要なアプリケーション",
        scenario:
          "Webブラウジング（HTTP/HTTPS）、メール（SMTP/POP3）、ファイル転送（FTP）、SSH接続など",
      },
      {
        title: "UDPを使用するアプリケーション",
        description: "リアルタイム性が重要なアプリケーション",
        scenario:
          "DNS名前解決、動画配信、オンラインゲーム、VoIP通話、DHCP、SNMPなど",
      },
    ],
  },

  quiz: [
    {
      question: "TCPの3-way handshakeの正しい手順はどれですか？",
      options: [
        "SYN → ACK → FIN",
        "SYN → SYN-ACK → ACK",
        "ACK → SYN → ACK",
        "FIN → ACK → SYN",
      ],
      correctAnswer: 1,
      explanation:
        "TCPの3-way handshakeは、クライアントからSYN、サーバーからSYN-ACK、クライアントからACKの順で行われます。",
    },
    {
      question: "UDPの特徴として正しいものはどれですか？",
      options: [
        "データの到達保証がある",
        "コネクション型通信",
        "軽量で高速",
        "自動再送機能がある",
      ],
      correctAnswer: 2,
      explanation:
        "UDPはコネクションレス型で、データの到達保証はありませんが、軽量で高速な通信が可能です。",
    },
  ],
};

export const ipAddressingLesson: NetworkLessonContent = {
  id: "ip-addressing",
  title: "IPアドレスとサブネット",
  description:
    "IPアドレスの仕組み、クラス分け、サブネットマスクについて学習します",
  category: "basic",
  difficulty: 3,
  content: {
    theory: `IPアドレスは、ネットワーク上の機器を一意に識別するための32ビット（IPv4）または128ビット（IPv6）のアドレスです。

    IPv4アドレス:
    - 32ビット（4バイト）
    - 8ビットずつ4つに分けて10進数で表記（例: 192.168.1.1）
    - クラスA、B、C、D、Eに分類
    - プライベートアドレスとグローバルアドレス

    サブネットマスク:
    - ネットワーク部とホスト部を区別
    - CIDR記法（例: /24）
    - サブネット分割により効率的なアドレス管理`,

    keyPoints: [
      "IPアドレスはネットワーク部とホスト部に分かれる",
      "サブネットマスクでネットワーク境界を定義",
      "プライベートアドレスは内部ネットワーク用",
      "グローバルアドレスはインターネット通信用",
      "CIDR記法でサブネットを効率的に表現",
    ],

    examples: [
      {
        title: "クラスCネットワークの例",
        description: "192.168.1.0/24 ネットワークの構成",
        scenario:
          "192.168.1.0/24では、192.168.1.1〜192.168.1.254の254台のホストが配置可能（.0はネットワークアドレス、.255はブロードキャストアドレス）",
      },
      {
        title: "サブネット分割の例",
        description: "192.168.1.0/24を4つのサブネットに分割",
        scenario:
          "192.168.1.0/26、192.168.1.64/26、192.168.1.128/26、192.168.1.192/26の4つのサブネットに分割し、各サブネットで62台のホストが利用可能",
      },
    ],
  },

  quiz: [
    {
      question: "192.168.1.100/24のネットワークアドレスはどれですか？",
      options: ["192.168.1.0", "192.168.1.100", "192.168.1.255", "192.168.0.0"],
      correctAnswer: 0,
      explanation:
        "/24（サブネットマスク255.255.255.0）の場合、最後のオクテットがホスト部となり、ネットワークアドレスは192.168.1.0です。",
    },
    {
      question: "プライベートIPアドレスの範囲に含まれないものはどれですか？",
      options: [
        "10.0.0.0 - 10.255.255.255",
        "172.16.0.0 - 172.31.255.255",
        "192.168.0.0 - 192.168.255.255",
        "8.8.8.8",
      ],
      correctAnswer: 3,
      explanation:
        "8.8.8.8はGoogleのパブリックDNSサーバーのグローバルIPアドレスで、プライベートIPアドレスではありません。",
    },
  ],
};

export const basicNetworkLessons: NetworkLessonContent[] = [
  osi7LayerLesson,
  tcpUdpLesson,
  ipAddressingLesson,
];

export const networkLessons: NetworkLessonContent[] = [
  ...basicNetworkLessons,
  ...advancedNetworkLessons,
  ...securityNetworkLessons,
];
