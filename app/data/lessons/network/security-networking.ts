import type { NetworkLessonContent } from "./types";

export const vpnLesson: NetworkLessonContent = {
  id: "vpn",
  title: "VPN（Virtual Private Network）",
  description:
    "セキュアなリモートアクセスとサイト間接続を実現するVPN技術について学習します",
  category: "security",
  difficulty: 4,
  content: {
    theory: `VPN（Virtual Private Network）は、パブリックネットワーク（インターネット）上に仮想的なプライベートネットワークを構築し、セキュアな通信を実現する技術です。

    VPNの種類:
    1. サイト間VPN（Site-to-Site VPN）
       - 拠点間を常時接続
       - IPSec VPNが一般的
       - ゲートウェイ同士が自動接続

    2. リモートアクセスVPN
       - 個人ユーザーが企業ネットワークにアクセス
       - SSL-VPN、IPSec VPNを使用
       - クライアントソフトウェアが必要

    主要なVPNプロトコル:
    - IPSec: ネットワーク層での暗号化、強固なセキュリティ
    - SSL/TLS: アプリケーション層、Webブラウザで簡単接続
    - L2TP/IPSec: L2TPとIPSecの組み合わせ
    - OpenVPN: オープンソース、柔軟な設定が可能

    VPNのセキュリティ機能:
    - 暗号化: データの機密性を保護
    - 認証: ユーザー・デバイスの身元確認
    - 完全性チェック: データの改ざん検知
    - トンネリング: 仮想的な専用回線を構築`,

    keyPoints: [
      "インターネット経由でもセキュアな通信",
      "リモートワークの基盤技術",
      "拠点間の安全な接続",
      "暗号化によるデータ保護",
      "認証による不正アクセス防止",
    ],

    examples: [
      {
        title: "企業の拠点間VPN",
        description: "本社と支社をセキュアに接続",
        scenario:
          "本社（大阪）と支社（東京）をIPSec VPNで接続し、専用線のようなセキュアな通信を実現。社内システムへの安全なアクセスが可能",
      },
      {
        title: "リモートワーク用SSL-VPN",
        description: "在宅勤務者の安全な社内アクセス",
        scenario:
          "従業員が自宅からWebブラウザを使用してSSL-VPNに接続し、社内ファイルサーバーやアプリケーションに安全にアクセス",
      },
      {
        title: "公衆Wi-Fi利用時のセキュリティ",
        description: "カフェや空港でのセキュアな通信",
        scenario:
          "信頼できないパブリックWi-Fiを使用する際、VPN接続により通信内容を暗号化して盗聴を防止",
      },
    ],
  },

  quiz: [
    {
      question:
        "IPSec VPNで使用される暗号化はOSI参照モデルのどの層で行われますか？",
      options: [
        "第2層（データリンク層）",
        "第3層（ネットワーク層）",
        "第4層（トランスポート層）",
        "第7層（アプリケーション層）",
      ],
      correctAnswer: 1,
      explanation:
        "IPSecは第3層（ネットワーク層）で動作し、IPパケットレベルで暗号化とカプセル化を行います。",
    },
    {
      question: "SSL-VPNの特徴として正しいものはどれですか？",
      options: [
        "専用クライアントが必須",
        "Webブラウザで接続可能",
        "第2層で暗号化",
        "UDP専用プロトコル",
      ],
      correctAnswer: 1,
      explanation:
        "SSL-VPNはWebブラウザを使用してVPN接続が可能で、専用ソフトウェアのインストールが不要な場合が多いです。",
    },
    {
      question: "VPNトンネリングの主な目的は何ですか？",
      options: [
        "通信速度の向上",
        "帯域幅の削減",
        "セキュアな仮想回線の構築",
        "DNSキャッシュの最適化",
      ],
      correctAnswer: 2,
      explanation:
        "VPNトンネリングは、パブリックネットワーク上に仮想的な専用回線（トンネル）を構築し、セキュアな通信を実現することを目的としています。",
    },
  ],
};

export const networkSecurityLesson: NetworkLessonContent = {
  id: "network-security",
  title: "ネットワークセキュリティ基礎",
  description:
    "ネットワークに対する脅威と対策、セキュリティベストプラクティスについて学習します",
  category: "security",
  difficulty: 5,
  content: {
    theory: `ネットワークセキュリティは、ネットワークインフラストラクチャとそこを流れるデータを様々な脅威から保護するための総合的な取り組みです。

    主要な脅威:
    1. 盗聴（Eavesdropping）
       - 通信内容の不正傍受
       - 暗号化で対策

    2. なりすまし（Spoofing）
       - IPアドレス、MACアドレス偽装
       - 認証機能で対策

    3. 中間者攻撃（Man-in-the-Middle）
       - 通信経路への割り込み
       - デジタル証明書で対策

    4. DDoS攻撃
       - 大量のトラフィックでサービス停止
       - 負荷分散、帯域制御で対策

    5. マルウェア感染
       - ウイルス、ワーム、トロイの木馬
       - アンチウイルス、サンドボックスで対策

    セキュリティ対策の原則:
    - 多層防御（Defense in Depth）
    - 最小権限の原則
    - 定期的なセキュリティ監査
    - インシデント対応計画
    - セキュリティ意識の向上

    ネットワークセキュリティツール:
    - IDS/IPS（侵入検知・防止システム）
    - SIEM（セキュリティ情報・イベント管理）
    - ネットワーク監視ツール
    - 脆弱性スキャナー`,

    keyPoints: [
      "CIA（機密性、完全性、可用性）の確保",
      "ゼロトラストネットワークの考え方",
      "定期的なセキュリティアップデート",
      "ログ監視と異常検知",
      "従業員のセキュリティ教育",
    ],

    examples: [
      {
        title: "企業ネットワークのセキュリティ設計",
        description: "多層防御による包括的なセキュリティ",
        scenario:
          "境界ファイアウォール → IPS → DMZ → 内部ファイアウォール → セグメント化されたLAN → エンドポイント保護の多層構造",
      },
      {
        title: "ゼロトラストネットワーク実装",
        description: "「信頼しない、常に検証する」アプローチ",
        scenario:
          "すべてのユーザー・デバイスを信頼せず、アクセスのたびに身元確認と認可を実施。マイクロセグメンテーションで最小権限アクセス",
      },
      {
        title: "インシデント対応プロセス",
        description: "セキュリティ侵害発生時の対応手順",
        scenario:
          "検知 → 分析 → 封じ込め → 根絶 → 復旧 → 教訓の抽出という標準化されたプロセスで迅速対応",
      },
    ],
  },

  quiz: [
    {
      question: "CIAトライアドのCは何を表しますか？",
      options: [
        "Confidentiality（機密性）",
        "Connectivity（接続性）",
        "Compatibility（互換性）",
        "Capacity（容量）",
      ],
      correctAnswer: 0,
      explanation:
        "CIAトライアドは情報セキュリティの基本原則で、C=Confidentiality（機密性）、I=Integrity（完全性）、A=Availability（可用性）を表します。",
    },
    {
      question: "DDoS攻撃の主な目的は何ですか？",
      options: [
        "データの窃取",
        "システムの改ざん",
        "サービスの可用性妨害",
        "アカウントの乗っ取り",
      ],
      correctAnswer: 2,
      explanation:
        "DDoS（Distributed Denial of Service）攻撃は、大量のトラフィックでサーバーやネットワークを過負荷状態にし、正常なサービス提供を妨害することが目的です。",
    },
    {
      question: "ゼロトラストネットワークの基本原則は何ですか？",
      options: [
        "内部ネットワークは安全",
        "信頼しない、常に検証する",
        "認証は1回だけ",
        "ファイアウォールのみで十分",
      ],
      correctAnswer: 1,
      explanation:
        "ゼロトラストは「Trust Nothing, Verify Everything（信頼しない、常に検証する）」が基本原則で、すべてのアクセスに対して認証・認可を行います。",
    },
  ],
};

export const wifiLesson: NetworkLessonContent = {
  id: "wifi",
  title: "無線LAN（Wi-Fi）基礎",
  description: "無線ネットワークの仕組み、規格、セキュリティについて学習します",
  category: "basic",
  difficulty: 3,
  content: {
    theory: `無線LAN（Wi-Fi）は、電波を使用してデバイス間でデータ通信を行う技術です。IEEE 802.11シリーズの規格に基づいて標準化されています。

    主要なWi-Fi規格:
    - 802.11a（1999年）: 5GHz帯、最大54Mbps
    - 802.11b（1999年）: 2.4GHz帯、最大11Mbps
    - 802.11g（2003年）: 2.4GHz帯、最大54Mbps
    - 802.11n（2009年）: 2.4/5GHz帯、最大600Mbps、MIMO対応
    - 802.11ac（2013年）: 5GHz帯、最大6.9Gbps、MU-MIMO対応
    - 802.11ax（Wi-Fi 6）: 2.4/5GHz帯、最大9.6Gbps、OFDMA対応

    無線LANの構成要素:
    - アクセスポイント（AP）: 有線LANと無線LANを中継
    - ワイヤレスクライアント: PC、スマートフォン等
    - SSID: ネットワーク識別子
    - チャンネル: 電波の周波数帯域
    - 暗号化: WEP、WPA、WPA2、WPA3

    無線特有の課題:
    - 電波干渉: 他の無線機器からの影響
    - 距離による信号減衰
    - 障害物による信号遮断
    - セキュリティリスク: 傍受の可能性`,

    keyPoints: [
      "電波の性質により有線より不安定",
      "暗号化によるセキュリティ確保が重要",
      "チャンネル設計で干渉を回避",
      "MIMO技術で高速化・安定性向上",
      "定期的なセキュリティ設定見直し",
    ],

    examples: [
      {
        title: "企業オフィスのWi-Fi設計",
        description: "従業員用とゲスト用のネットワーク分離",
        scenario:
          "従業員用SSID（社内システムアクセス可）とゲスト用SSID（インターネットのみ）を分離し、VLAN で論理的にネットワークを分割",
      },
      {
        title: "家庭用Wi-Fiの最適化",
        description: "電波干渉を避けた安定通信",
        scenario:
          "2.4GHz帯の混雑を避けて5GHz帯を優先使用、近隣APと異なるチャンネルを選択して干渉を最小化",
      },
      {
        title: "公衆Wi-Fiのセキュリティ",
        description: "オープンネットワークでの安全対策",
        scenario:
          "カフェや空港などの公衆Wi-Fi使用時は、HTTPS接続やVPN使用でデータ保護、重要な操作は避ける",
      },
    ],
  },

  quiz: [
    {
      question: "Wi-Fi 6（802.11ax）の新技術として正しいものはどれですか？",
      options: ["CDMA", "OFDMA", "TDMA", "FDMA"],
      correctAnswer: 1,
      explanation:
        "Wi-Fi 6（802.11ax）では、OFDMA（Orthogonal Frequency Division Multiple Access）技術により、複数のデバイスが同時に効率的に通信できるようになりました。",
    },
    {
      question: "WPA3の前世代の暗号化規格は何ですか？",
      options: ["WEP", "WPA", "WPA2", "WPS"],
      correctAnswer: 2,
      explanation:
        "WPA3の前世代はWPA2です。WPA3は2018年に登場し、より強固なセキュリティを提供します。",
    },
    {
      question: "2.4GHz帯と5GHz帯の特徴で正しいものはどれですか？",
      options: [
        "2.4GHz帯の方が高速",
        "5GHz帯の方が障害物に強い",
        "2.4GHz帯の方が遠くまで届く",
        "5GHz帯の方が消費電力が少ない",
      ],
      correctAnswer: 2,
      explanation:
        "2.4GHz帯は周波数が低いため、障害物を回り込みやすく、5GHz帯より遠くまで電波が届きます。ただし、干渉を受けやすいという欠点があります。",
    },
  ],
};

export const securityNetworkLessons: NetworkLessonContent[] = [
  vpnLesson,
  networkSecurityLesson,
  wifiLesson,
];
