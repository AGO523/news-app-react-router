// TypeScript学習レッスンのデータ定義

// 学習コンテンツの型定義
export interface LessonContent {
  id: string;
  title: string;
  description: string;
  example: string;
  exercise: string;
  solution: string;
  explanation: string;
  detailedExplanation: string;
}

// 学習レッスンのデータ
export const lessons: LessonContent[] = [
  {
    id: "basic-types",
    title: "基本型",
    description: "TypeScriptの基本的な型について学びましょう。",
    example: `// 基本型の例
let name: string = "太郎";
let age: number = 25;
let isStudent: boolean = true;
let items: string[] = ["apple", "banana"];`,
    exercise: `// 練習問題: 以下の変数に適切な型を追加してください
let userName = "田中";
let userAge = 30;
let isActive = false;
let hobbies = ["読書", "映画鑑賞"];`,
    solution: `let userName: string = "田中";
let userAge: number = 30;
let isActive: boolean = false;
let hobbies: string[] = ["読書", "映画鑑賞"];`,
    explanation:
      "基本型（string, number, boolean, array）は最も頻繁に使用される型です。明示的に型を指定することで、コードの安全性が向上します。",
    detailedExplanation: `TypeScriptの基本型について詳しく解説します：

■ string型（文字列）
文字列を表現する型です。シングルクォート、ダブルクォート、バッククォートが使用できます。
バッククォートを使うとテンプレートリテラル（変数埋め込み）も可能です。
例: "こんにちは"、'Hello'、\`私の名前は\${name}です\`

■ number型（数値）
整数や小数点数などすべての数値を表現します。
16進数（0xFF）、8進数（0o77）、2進数（0b1010）も含みます。
特殊な値として NaN（非数値）、Infinity（無限大）、-Infinity（負の無限大）も扱えます。

■ boolean型（真偽値）
真（true）または偽（false）のみを表現する型です。
条件分岐やフラグの管理によく使用されます。

■ 配列型
複数の同じ型の値を格納できます。
書き方は「T[]」または「Array<T>」の2種類があります。
例: string[]（文字列の配列）、number[]（数値の配列）

【重要ポイント】
型を明示することで、IDEが適切な補完を提供し、コンパイル時にタイプミスや型の不一致を検出できます。
これにより、実行時エラーを大幅に減らすことができます。`,
  },
  {
    id: "interface",
    title: "インターフェース",
    description:
      "オブジェクトの形状を定義するインターフェースについて学習します。",
    example: `// インターフェースの例
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // オプショナルプロパティ
}

const user: User = {
  id: 1,
  name: "山田太郎",
  email: "yamada@example.com"
};`,
    exercise: `// 練習問題: Product インターフェースを作成し、使用してください
// 必須: id(number), name(string), price(number)
// オプション: description(string)

interface Product {
  // ここにプロパティを定義
}

const product: Product = {
  // ここに実装
};`,
    solution: `interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

const product: Product = {
  id: 1,
  name: "ノートパソコン",
  price: 120000,
  description: "高性能なプログラミング用ノートPC"
};`,
    explanation:
      "インターフェースはオブジェクトの構造を定義します。?を使ってオプショナルプロパティを作ることができ、柔軟性を保ちながら型安全性を確保できます。",
    detailedExplanation: `インターフェースについて詳しく解説します：

■ インターフェースの基本概念
オブジェクトの「形」や「構造」を定義する契約のようなものです。
どのプロパティが必要で、それぞれの型は何かを明確に指定します。
実装時には定義されたすべての必須プロパティを含む必要があります。

■ オプショナルプロパティ（?マーク）
プロパティ名の後に「?」を付けると、そのプロパティは省略可能になります。
例: age?: number（年齢は必須ではない）
オブジェクト作成時にそのプロパティがなくても型エラーになりません。

■ 読み取り専用プロパティ（readonly）
「readonly」キーワードを付けると、一度設定した値を変更できません。
例: readonly id: number（IDは変更不可）
データの不変性を保ちたい場合に有効です。

■ インターフェースの継承（extends）
既存のインターフェースを拡張して新しいインターフェースを作れます。
例: interface Admin extends User { permissions: string[] }
コードの再利用性が向上し、保守性が良くなります。

■ メソッドの定義
オブジェクトが持つべき関数も定義できます。
書き方: methodName(): 戻り値の型
または methodName: () => 戻り値の型

【実用性】
インターフェースにより、チーム開発でオブジェクトの構造を統一でき、
APIレスポンスやデータベースモデルの型定義に威力を発揮します。`,
  },
  {
    id: "union-types",
    title: "ユニオン型",
    description:
      "複数の型のうちいずれかである値を表現するユニオン型について学習します。",
    example: `// ユニオン型の例
type Status = "loading" | "success" | "error";
type ID = string | number;

function handleStatus(status: Status) {
  switch (status) {
    case "loading":
      console.log("読み込み中...");
      break;
    case "success":
      console.log("成功しました！");
      break;
    case "error":
      console.log("エラーが発生しました");
      break;
  }
}`,
    exercise: `// 練習問題: Theme型を作成し、関数を実装してください
// "light" | "dark" | "auto" の3つの値を取れるTheme型を定義
// applyTheme関数でテーマに応じた処理を実装

type Theme = // ここに定義

function applyTheme(theme: Theme): string {
  // ここに実装
}`,
    solution: `type Theme = "light" | "dark" | "auto";

function applyTheme(theme: Theme): string {
  switch (theme) {
    case "light":
      return "ライトテーマを適用しました";
    case "dark":
      return "ダークテーマを適用しました";
    case "auto":
      return "自動テーマを適用しました";
    default:
      return "不明なテーマです";
  }
}`,
    explanation:
      "ユニオン型は|演算子で複数の型を組み合わせます。特定の値のセットを制限したい場合に非常に有用で、型安全なswitch文と組み合わせて使用できます。",
    detailedExplanation: `ユニオン型について詳しく解説します：

**基本的な使い方**: 複数の型を組み合わせる
- type ValueType = string | number | boolean
- 値が指定した型のいずれかである必要がある

**リテラル型との組み合わせ**: 具体的な値を制限
- type Status = "loading" | "success" | "error"
- type Size = "small" | "medium" | "large"

**型ガード**: 実行時に型を判定
- typeof演算子を使用: if (typeof value === "string")
- in演算子を使用: if ("property" in object)

**判別可能なユニオン**: 共通プロパティで型を識別
- type Shape = Circle | Rectangle
- 各型に共通のtypeプロパティを持たせる

**never型**: 到達できない分岐
- switch文で全ケースを処理すると自動的にnever型になる`,
  },
  {
    id: "generics",
    title: "ジェネリクス",
    description: "型を動的に決定できるジェネリクスについて学習します。",
    example: `// ジェネリクスの例
function identity<T>(value: T): T {
  return value;
}

// 使用例
const stringResult = identity<string>("hello"); // string型
const numberResult = identity<number>(42);      // number型

// 配列を扱うジェネリクス関数
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}`,
    exercise: `// 練習問題: ジェネリクスを使って関数を作成してください
// createPair関数: 2つの同じ型の値を受け取り、配列として返す

function createPair<T>(/* パラメータを定義 */): /* 戻り値の型を定義 */ {
  // ここに実装
}

// 使用例（これが動作するように実装してください）
// const stringPair = createPair("a", "b"); // ["a", "b"]
// const numberPair = createPair(1, 2);     // [1, 2]`,
    solution: `function createPair<T>(first: T, second: T): [T, T] {
  return [first, second];
}

// 使用例
const stringPair = createPair("a", "b"); // ["a", "b"]
const numberPair = createPair(1, 2);     // [1, 2]`,
    explanation:
      "ジェネリクスは型を変数のように扱える機能です。<T>のようにしてタイプパラメータを定義し、関数やクラスを再利用可能にします。コードの重複を避けながら型安全性を保てます。",
    detailedExplanation: `ジェネリクスについて詳しく解説します：

**基本概念**: 型をパラメータとして扱う機能
- <T>のように型変数を定義
- 実際に使用される時に具体的な型が決まる

**関数でのジェネリクス**: 
- function func<T>(param: T): T { return param; }
- 呼び出し時に型を指定: func<string>("hello")

**制約付きジェネリクス**: extends キーワードで制限
- <T extends string | number>
- 特定の型のみを受け入れる

**複数の型パラメータ**: 
- <T, U, V>のように複数定義可能
- それぞれ独立した型を表現

**実用例**: 
- Array<T>, Promise<T>, Map<K, V>など
- React: Component<Props, State>`,
  },
  {
    id: "api-types",
    title: "API型定義",
    description:
      "WebアプリケーションでよくあるAPI型定義のパターンを学習します。",
    example: `// API レスポンス型の例
interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

// 使用例
const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "田中", email: "tanaka@example.com" },
  status: 'success'
};

const usersResponse: ApiResponse<User[]> = {
  data: [
    { id: 1, name: "田中", email: "tanaka@example.com" },
    { id: 2, name: "佐藤", email: "sato@example.com" }
  ],
  status: 'success'
};`,
    exercise: `// 練習問題: 商品管理APIの型定義を作成してください
// Product型を定義し、ApiResponse型を使ってAPIレスポンス型を作成

interface Product {
  // 商品の型定義をここに記述
  // 必須: id(number), name(string), price(number), category(string)
  // オプション: description(string), inStock(boolean)
}

// エラーレスポンス用の型
interface ErrorResponse {
  // エラー情報の型定義
  // 必須: code(string), message(string)
  // オプション: details(string)
}

// API関数の型定義
async function getProduct(id: number): Promise</* 型を定義 */> {
  // 実装は省略
  return {} as any;
}

async function getProducts(): Promise</* 型を定義 */> {
  // 実装は省略
  return {} as any;
}`,
    solution: `interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description?: string;
  inStock?: boolean;
}

interface ErrorResponse {
  code: string;
  message: string;
  details?: string;
}

// API関数の型定義
async function getProduct(id: number): Promise<ApiResponse<Product> | ErrorResponse> {
  // 実装は省略
  return {} as any;
}

async function getProducts(): Promise<ApiResponse<Product[]> | ErrorResponse> {
  // 実装は省略
  return {} as any;
}`,
    explanation:
      "API型定義では、レスポンスの構造を明確にし、成功・失敗パターンを型で表現することで、フロントエンドでの型安全な処理が可能になります。",
    detailedExplanation: `API型定義について詳しく解説します：

**ジェネリックなレスポンス型**: ApiResponse<T>
- 共通のレスポンス構造を定義
- データ部分の型をジェネリクスで指定
- status, messageなどの共通フィールドを含める

**エラーハンドリング**: 
- 成功時とエラー時の型を分離
- Union型でどちらかを返すように定義
- エラーコードやメッセージを構造化

**データ型の設計**: 
- 必須フィールドとオプショナルフィールドを明確に分離
- ビジネスロジックに応じた適切な型を選択
- フロントエンドでの使いやすさを考慮

**Promise型**: 
- 非同期処理の戻り値を明確に定義
- await時に正しい型推論が働く
- エラーハンドリングが型安全に行える

**実際の使用例**: 
- フェッチ関数での型安全なAPI呼び出し
- レスポンスデータの型チェック
- エラー処理の分岐`,
  },
  {
    id: "form-validation",
    title: "フォーム型定義",
    description:
      "フォームバリデーションとステート管理の型定義パターンを学習します。",
    example: `// フォーム関連の型定義例
interface FormData {
  name: string;
  email: string;
  age: number;
  terms: boolean;
}

interface FormErrors {
  [K in keyof FormData]?: string;
}

interface FormState {
  data: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  touched: { [K in keyof FormData]?: boolean };
}

// バリデーション関数の型
type Validator<T> = (value: T) => string | undefined;

const emailValidator: Validator<string> = (email) => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email) ? undefined : '有効なメールアドレスを入力してください';
};`,
    exercise: `// 練習問題: 会員登録フォームの型定義を作成してください
// ユーザー登録フォームのデータ型とバリデーション型を定義

interface RegistrationForm {
  // 登録フォームの型定義
  // 必須: username(string), password(string), confirmPassword(string), email(string)
  // オプション: firstName(string), lastName(string), newsletter(boolean)
}

// フォームの各フィールドのエラー型
interface RegistrationErrors {
  // エラーメッセージの型定義（各フィールドは省略可能）
}

// フォーム全体のステート型
interface RegistrationState {
  // フォームの状態を管理する型定義
  // form: RegistrationForm, errors: RegistrationErrors, 
  // loading: boolean, submitted: boolean
}

// バリデーション関数の型定義
const validatePassword: Validator<string> = (password) => {
  // パスワードは8文字以上で大文字・小文字・数字を含む
  // 実装してください
};`,
    solution: `interface RegistrationForm {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  firstName?: string;
  lastName?: string;
  newsletter?: boolean;
}

interface RegistrationErrors {
  username?: string;
  password?: string;
  confirmPassword?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

interface RegistrationState {
  form: RegistrationForm;
  errors: RegistrationErrors;
  loading: boolean;
  submitted: boolean;
}

const validatePassword: Validator<string> = (password) => {
  if (password.length < 8) {
    return 'パスワードは8文字以上で入力してください';
  }
  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/.test(password)) {
    return 'パスワードは大文字・小文字・数字を含む必要があります';
  }
  return undefined;
};`,
    explanation:
      "フォーム型定義では、データ構造、エラー状態、バリデーションルールを型安全に管理することで、ユーザー入力の処理を確実に行えます。",
    detailedExplanation: `フォーム型定義について詳しく解説します：

**Mapped Types**: { [K in keyof T]?: string }
- 元の型のキーを使って新しい型を生成
- 全フィールドに対応するエラーフィールドを自動生成
- オプショナルにすることでエラーのないフィールドも表現

**バリデーション関数型**: Validator<T>
- 入力値を受け取り、エラーメッセージまたはundefinedを返す
- 再利用可能なバリデーション関数を型安全に定義
- 複数のバリデーションを組み合わせ可能

**フォーム状態管理**: 
- データ、エラー、ローディング状態を一元管理
- touchedフィールドでユーザーの操作状況を追跡
- 送信状態やバリデーション状態を管理

**実用的なパターン**: 
- リアルタイムバリデーション
- 条件付きバリデーション
- フィールド間の依存関係チェック

**型安全性の利点**: 
- フィールド名の typo を防止
- バリデーション関数の引数・戻り値の型チェック
- ステート更新時の型安全性確保`,
  },
  {
    id: "state-management",
    title: "状態管理パターン",
    description: "React/Reduxスタイルの状態管理パターンの型定義を学習します。",
    example: `// 状態管理の型定義例
interface AppState {
  user: User | null;
  todos: Todo[];
  ui: UIState;
}

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface UIState {
  loading: boolean;
  error: string | null;
  theme: 'light' | 'dark';
}

// Action型の定義
type TodoAction = 
  | { type: 'ADD_TODO'; payload: { text: string } }
  | { type: 'TOGGLE_TODO'; payload: { id: string } }
  | { type: 'DELETE_TODO'; payload: { id: string } };

// Reducer型の定義
type TodoReducer = (state: Todo[], action: TodoAction) => Todo[];`,
    exercise: `// 練習問題: ショッピングカートの状態管理型を作成してください
// カート機能の状態とアクションを型定義

interface CartItem {
  // カートアイテムの型定義
  // 必須: productId(string), name(string), price(number), quantity(number)
  // オプション: image(string), discount(number)
}

interface CartState {
  // カート状態の型定義
  // items: CartItem[], total: number, itemCount: number
}

// カートアクション型を定義してください
type CartAction = 
  // ADD_ITEM: { productId, name, price, quantity?, image? }
  // REMOVE_ITEM: { productId }
  // UPDATE_QUANTITY: { productId, quantity }
  // CLEAR_CART: {} (ペイロードなし)

// セレクター関数の型定義
interface CartSelectors {
  // getCartTotal: (state: CartState) => number
  // getItemCount: (state: CartState) => number
  // getItemById: (state: CartState, productId: string) => CartItem | undefined
}`,
    solution: `interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  discount?: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: { productId: string; name: string; price: number; quantity?: number; image?: string } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

interface CartSelectors {
  getCartTotal: (state: CartState) => number;
  getItemCount: (state: CartState) => number;
  getItemById: (state: CartState, productId: string) => CartItem | undefined;
}`,
    explanation:
      "状態管理パターンでは、アプリケーションの状態、アクション、セレクターを型安全に定義することで、予測可能で保守しやすいコードを書けます。",
    detailedExplanation: `状態管理パターンについて詳しく解説します：

**Union型によるAction定義**: 
- 各アクションをオブジェクト型として定義
- type フィールドで判別可能なUnion型
- payloadで必要なデータを型安全に渡す

**Discriminated Union**: 
- typeフィールドによる型の絞り込み
- switch文でのパターンマッチング
- 各分岐で正確な型推論が働く

**State設計**: 
- 正規化されたデータ構造
- 計算可能な値は基本的には含めない
- 単一責任の原則に従った状態分割

**Selector型**: 
- 状態から必要なデータを取得する関数
- 再利用可能な計算ロジック
- メモ化による最適化が可能

**型安全性のメリット**: 
- アクション作成時の型チェック
- Reducer内での型安全な状態更新
- Component側での型安全な状態参照
- リファクタリング時の影響範囲把握

**実装パターン**: 
- Redux Toolkit での型定義
- Zustand での状態管理
- React Context + useReducer`,
  },
  {
    id: "conditional-types",
    title: "条件付き型",
    description:
      "TypeScriptの条件付き型（Conditional Types）について学習します。",
    example: `// 条件付き型の例
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>;  // true
type Test2 = IsString<number>;  // false

// より実用的な例
type NonNullable<T> = T extends null | undefined ? never : T;

type ApiResult<T> = T extends string 
  ? { message: T } 
  : T extends number 
  ? { code: T } 
  : { data: T };

// 関数の戻り値型を抽出
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type FuncReturn = ReturnType<() => string>; // string`,
    exercise: `// 練習問題: 条件付き型を使ってユーティリティ型を作成してください

// 1. 配列型かどうかを判定する型
type IsArray<T> = // ここに実装

// 2. Promise型から値の型を抽出する型
type Unwrap<T> = // ここに実装

// 3. 関数型から引数の型を抽出する型
type Parameters<T> = // ここに実装

// 4. オブジェクトのプロパティから特定の型のみを抽出する型
type PickByType<T, U> = // ここに実装

// テストケース（これらが正しく動作するように実装してください）
type Test1 = IsArray<string[]>;        // true
type Test2 = IsArray<string>;          // false
type Test3 = Unwrap<Promise<number>>; // number
type Test4 = Parameters<(a: string, b: number) => void>; // [string, number]`,
    solution: `// 1. 配列型かどうかを判定する型
type IsArray<T> = T extends any[] ? true : false;

// 2. Promise型から値の型を抽出する型
type Unwrap<T> = T extends Promise<infer U> ? U : T;

// 3. 関数型から引数の型を抽出する型
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

// 4. オブジェクトのプロパティから特定の型のみを抽出する型
type PickByType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// テストケース
type Test1 = IsArray<string[]>;        // true
type Test2 = IsArray<string>;          // false
type Test3 = Unwrap<Promise<number>>; // number
type Test4 = Parameters<(a: string, b: number) => void>; // [string, number]`,
    explanation:
      "条件付き型は `T extends U ? X : Y` の形式で、型レベルでの条件分岐を可能にします。高度な型操作や型推論に必須の機能です。",
    detailedExplanation: `条件付き型について詳しく解説します：

**基本構文**: T extends U ? X : Y
- T が U に代入可能な場合は X、そうでなければ Y
- 型レベルでの三項演算子のような動作

**infer キーワード**: 型推論
- 条件付き型内で型を推論・抽出
- infer R で推論された型を R として利用可能
- 関数の戻り値型や Promise の値型抽出に活用

**分散的条件付き型**: Union型での動作
- T が Union型の場合、各要素に対して条件が適用
- type Exclude<T, U> = T extends U ? never : T

**実用例**: 
- ユーティリティ型の実装（ReturnType, Parameters等）
- 型ガードの強化
- API レスポンス型の自動変換

**高度なパターン**: 
- 再帰的な条件付き型
- テンプレートリテラル型との組み合わせ
- Mapped Types との連携`,
  },
  {
    id: "mapped-types",
    title: "マップ型",
    description: "既存の型から新しい型を生成するマップ型について学習します。",
    example: `// マップ型の例
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

// より高度な例
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface User {
  name: string;
  age: number;
}

type UserGetters = Getters<User>;
// {
//   getName: () => string;
//   getAge: () => number;
// }

// 条件付きマッピング
type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];`,
    exercise: `// 練習問題: マップ型を使って便利なユーティリティ型を作成してください

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  isAvailable: boolean;
  createdAt: Date;
}

// 1. 全てのプロパティを string 型に変換する型
type Stringify<T> = // ここに実装

// 2. 関数プロパティのみを抽出する型
type FunctionProperties<T> = // ここに実装

// 3. プロパティ名にプレフィックスを追加する型
type Prefixed<T, P extends string> = // ここに実装

// 4. 特定の型のプロパティのみを必須にする型
type RequireByType<T, U> = // ここに実装

// テスト用
type StringifiedProduct = Stringify<Product>;
type PrefixedProduct = Prefixed<Product, "product">;
type RequiredStrings = RequireByType<Partial<Product>, string>;`,
    solution: `// 1. 全てのプロパティを string 型に変換する型
type Stringify<T> = {
  [K in keyof T]: string;
};

// 2. 関数プロパティのみを抽出する型
type FunctionProperties<T> = {
  [K in keyof T]: T[K] extends Function ? T[K] : never;
};

// 3. プロパティ名にプレフィックスを追加する型
type Prefixed<T, P extends string> = {
  [K in keyof T as \`\${P}\${Capitalize<string & K>}\`]: T[K];
};

// 4. 特定の型のプロパティのみを必須にする型
type RequireByType<T, U> = T & {
  [K in keyof T as T[K] extends U ? K : never]-?: T[K];
};

// テスト結果
type StringifiedProduct = Stringify<Product>;
// { id: string; name: string; price: string; ... }

type PrefixedProduct = Prefixed<Product, "product">;
// { productId: number; productName: string; ... }

type RequiredStrings = RequireByType<Partial<Product>, string>;
// 文字列プロパティ（name, category）が必須になる`,
    explanation:
      "マップ型は既存の型のプロパティを変換して新しい型を作成します。TypeScriptの型システムの中でも最も強力な機能の一つです。",
    detailedExplanation: `マップ型について詳しく解説します：

**基本構文**: { [K in keyof T]: 変換 }
- keyof で元の型のプロパティ名を取得
- in でそれぞれのプロパティに対して処理を実行
- 型レベルでのfor...inループのような動作

**キー再マッピング**: as を使った名前変更
- [K in keyof T as NewKey]: 新しいキー名を指定
- テンプレートリテラル型と組み合わせて動的な命名
- 条件付きでキーを除外（never を返す）

**修飾子の操作**: 
- ? の追加・削除（オプショナル化）
- readonly の追加・削除
- -? や -readonly で修飾子を除去

**実用的なパターン**: 
- Pick, Omit, Record の実装
- API レスポンスの型変換
- フォームデータの型生成

**テンプレートリテラル型との連携**: 
- 動的なプロパティ名生成
- getter/setter の自動生成
- イベントハンドラーの型定義`,
  },
  {
    id: "utility-types",
    title: "ユーティリティ型",
    description:
      "TypeScript標準のユーティリティ型と独自のユーティリティ型作成について学習します。",
    example: `// TypeScript標準のユーティリティ型
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

// Pick - 特定のプロパティのみを選択
type UserProfile = Pick<User, 'name' | 'email'>;

// Omit - 特定のプロパティを除外
type CreateUser = Omit<User, 'id'>;

// Required - 全てのプロパティを必須に
type CompleteUser = Required<User>;

// Partial - 全てのプロパティをオプショナルに
type UpdateUser = Partial<User>;

// Record - キーと値の型を指定してオブジェクト型を作成
type UserRoles = Record<string, 'admin' | 'user' | 'guest'>;

// カスタムユーティリティ型
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};`,
    exercise: `// 練習問題: 独自のユーティリティ型を作成してください

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    email: string;
  };
  tags: string[];
  publishedAt: Date;
  isPublished: boolean;
}

// 1. ネストしたオブジェクトも含めて全てを必須にする型
type DeepRequired<T> = // ここに実装

// 2. 特定の型のプロパティのみを抽出する型
type PickByType<T, U> = // ここに実装

// 3. 配列型のプロパティを除外する型
type NonArrayProperties<T> = // ここに実装

// 4. 関数型を除外してデータのみの型を作成する型
type DataOnly<T> = // ここに実装

// 5. プロパティを flatten する型（ネストを1階層展開）
type Flatten<T> = // ここに実装

// テストケース
type RequiredBlogPost = DeepRequired<Partial<BlogPost>>;
type StringProperties = PickByType<BlogPost, string>;
type NonArrayBlogPost = NonArrayProperties<BlogPost>;`,
    solution: `// 1. ネストしたオブジェクトも含めて全てを必須にする型
type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object 
    ? T[P] extends any[] 
      ? T[P] 
      : DeepRequired<T[P]>
    : T[P];
};

// 2. 特定の型のプロパティのみを抽出する型
type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

// 3. 配列型のプロパティを除外する型
type NonArrayProperties<T> = {
  [K in keyof T as T[K] extends any[] ? never : K]: T[K];
};

// 4. 関数型を除外してデータのみの型を作成する型
type DataOnly<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};

// 5. プロパティを flatten する型（ネストを1階層展開）
type Flatten<T> = {
  [K in keyof T]: T[K];
} & {
  [K in keyof T as T[K] extends object 
    ? T[K] extends any[]
      ? never
      : keyof T[K] extends string
        ? \`\${string & K}.\${keyof T[K] & string}\`
        : never
    : never]: T[K] extends object
      ? T[K] extends any[]
        ? never
        : T[K][keyof T[K]]
      : never;
};

// テスト結果
type RequiredBlogPost = DeepRequired<Partial<BlogPost>>;
// 全てのプロパティが必須になり、ネストしたauthorオブジェクトも必須

type StringProperties = PickByType<BlogPost, string>;
// { title: string; content: string; }

type NonArrayBlogPost = NonArrayProperties<BlogPost>;
// tagsプロパティが除外される`,
    explanation:
      "ユーティリティ型は既存の型を変換・操作するための再利用可能な型定義です。TypeScriptの型システムを最大限活用するために重要です。",
    detailedExplanation: `ユーティリティ型について詳しく解説します：

**標準ユーティリティ型**: 
- Pick<T, K>: 特定のプロパティを選択
- Omit<T, K>: 特定のプロパティを除外
- Partial<T>: 全プロパティをオプショナルに
- Required<T>: 全プロパティを必須に
- Record<K, T>: キー・値の型でオブジェクト型作成

**カスタムユーティリティ型の作成**: 
- 条件付き型とマップ型の組み合わせ
- 再帰的な型定義でネスト構造を処理
- テンプレートリテラル型で動的な型生成

**実用的なパターン**: 
- API レスポンスの型変換
- フォームデータの型生成
- データベースエンティティの型操作

**パフォーマンス考慮**: 
- 複雑な型は TypeScript コンパイラーに負荷
- 適切な制約で型の複雑さを制限
- 型エイリアスで可読性向上

**デバッグテクニック**: 
- 型の展開確認にインライン型を使用
- TypeScript playground での型チェック
- IDE のホバー機能で型を確認`,
  },
  {
    id: "template-literals",
    title: "テンプレートリテラル型",
    description:
      "TypeScript 4.1で導入されたテンプレートリテラル型について学習します。",
    example: `// テンプレートリテラル型の例
type Greeting = \`Hello, \${string}!\`;

type Color = "red" | "green" | "blue";
type Shade = "light" | "dark";
type ColorVariant = \`\${Shade}-\${Color}\`;
// "light-red" | "light-green" | "light-blue" | "dark-red" | "dark-green" | "dark-blue"

// 実用的な例：イベント名の型生成
type EventName<T extends string> = \`on\${Capitalize<T>}\`;

type MouseEvents = EventName<"click" | "hover" | "focus">;
// "onClick" | "onHover" | "onFocus"

// CSS プロパティの型生成
type CSSProperty = \`--\${string}\`;
type BorderProperty = \`border-\${string}\`;

// API エンドポイントの型
type ApiEndpoint<T extends string> = \`/api/\${T}\`;
type UserEndpoints = ApiEndpoint<"users" | "profile" | "settings">;`,
    exercise: `// 練習問題: テンプレートリテラル型を使って実用的な型を作成してください

// 1. HTTP メソッドとパスを組み合わせたルート型
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiRoute<M extends HttpMethod, P extends string> = // ここに実装

// 2. データベースのテーブル操作関数名を生成する型
type CrudOperation = "create" | "read" | "update" | "delete";
type TableName = "user" | "post" | "comment";
type CrudFunction<T extends TableName, O extends CrudOperation> = // ここに実装

// 3. React のイベントハンドラー型を生成
type DomEvent = "click" | "change" | "submit" | "focus" | "blur";
type EventHandler<E extends DomEvent> = // ここに実装

// 4. CSS-in-JS のスタイルプロパティ型
type CssUnit = "px" | "rem" | "em" | "%" | "vh" | "vw";
type CssSizeProperty<T extends string> = // ここに実装

// 5. 環境変数の型を生成
type EnvPrefix = "NEXT_PUBLIC" | "VITE" | "REACT_APP";
type EnvVariable<P extends EnvPrefix, V extends string> = // ここに実装

// テストケース
type UserRoute = ApiRoute<"GET", "users">;
type CreateUser = CrudFunction<"user", "create">;
type ClickHandler = EventHandler<"click">;
type WidthProperty = CssSizeProperty<"width">;
type NextEnv = EnvVariable<"NEXT_PUBLIC", "API_URL">;`,
    solution: `// 1. HTTP メソッドとパスを組み合わせたルート型
type ApiRoute<M extends HttpMethod, P extends string> = \`\${M} /\${P}\`;

// 2. データベースのテーブル操作関数名を生成する型
type CrudFunction<T extends TableName, O extends CrudOperation> = 
  \`\${O}\${Capitalize<T>}\`;

// 3. React のイベントハンドラー型を生成
type EventHandler<E extends DomEvent> = \`on\${Capitalize<E>}\`;

// 4. CSS-in-JS のスタイルプロパティ型
type CssSizeProperty<T extends string> = {
  [K in CssUnit]: \`\${T}: \${number}\${K}\`;
}[CssUnit];

// 5. 環境変数の型を生成
type EnvVariable<P extends EnvPrefix, V extends string> = \`\${P}_\${Uppercase<V>}\`;

// テスト結果
type UserRoute = ApiRoute<"GET", "users">;        // "GET /users"
type CreateUser = CrudFunction<"user", "create">; // "createUser"
type ClickHandler = EventHandler<"click">;        // "onClick"
type WidthProperty = CssSizeProperty<"width">;    // "width: \${number}px" | "width: \${number}rem" | ...
type NextEnv = EnvVariable<"NEXT_PUBLIC", "API_URL">; // "NEXT_PUBLIC_API_URL"`,
    explanation:
      "テンプレートリテラル型は文字列の型レベル操作を可能にし、動的な型生成や厳密な文字列型の定義に活用されます。",
    detailedExplanation: `テンプレートリテラル型について詳しく解説します：

**基本構文**: \`\${T}\` 形式
- 通常のテンプレートリテラルと同じ構文
- 型レベルでの文字列結合・操作
- Union型との組み合わせで複数パターン生成

**文字列操作関数**: 
- Uppercase<T>: 大文字変換
- Lowercase<T>: 小文字変換
- Capitalize<T>: 先頭文字を大文字に
- Uncapitalize<T>: 先頭文字を小文字に

**実用的な活用場面**: 
- API エンドポイントの型安全性確保
- CSS プロパティやクラス名の型定義
- イベントハンドラーの命名規則強制
- 環境変数名の型チェック

**パターンマッチング**: 
- infer と組み合わせて文字列を解析
- 条件付き型で文字列の構造をチェック
- 正規表現的な型レベル処理

**制限と注意点**: 
- 複雑すぎると TypeScript の性能に影響
- 文字列リテラル型の数に上限あり
- デバッグが困難になる場合がある`,
  },
  {
    id: "advanced-patterns",
    title: "高度なパターン",
    description:
      "実際のプロジェクトで使われる高度なTypeScriptパターンを学習します。",
    example: `// 高度なパターンの例

// 1. Builder パターンの型安全な実装
class QueryBuilder<T> {
  private query: Partial<T> = {};
  
  where<K extends keyof T>(key: K, value: T[K]): QueryBuilder<T> {
    this.query[key] = value;
    return this;
  }
  
  build(): T {
    return this.query as T;
  }
}

// 2. 関数オーバーロードと条件付き型
function processData<T>(data: T[]): T[];
function processData<T>(data: T): T;
function processData<T>(data: T | T[]): T | T[] {
  return Array.isArray(data) ? data.map(item => item) : data;
}

// 3. 高階関数の型推論
function createValidator<T>() {
  return function<K extends keyof T>(
    key: K,
    validator: (value: T[K]) => boolean
  ): (obj: T) => boolean {
    return (obj: T) => validator(obj[key]);
  };
}

// 4. 型レベルでの配列操作
type Head<T extends readonly unknown[]> = T extends readonly [infer H, ...unknown[]] ? H : never;
type Tail<T extends readonly unknown[]> = T extends readonly [unknown, ...infer Rest] ? Rest : [];`,
    exercise: `// 練習問題: 高度なパターンを使って実用的なシステムを作成してください

// 1. 型安全なイベントエミッター
interface EventMap {
  'user:login': { userId: string; timestamp: Date };
  'user:logout': { userId: string };
  'data:update': { id: number; data: any };
}

class TypedEventEmitter<T extends Record<string, any>> {
  // イベントリスナーを追加するメソッドの型定義
  on<K extends keyof T>(event: K, handler: (data: T[K]) => void): void {
    // ここに実装
  }
  
  // イベントを発火するメソッドの型定義
  emit<K extends keyof T>(event: K, data: T[K]): void {
    // ここに実装
  }
}

// 2. 型安全なAPIクライアント
interface ApiEndpoints {
  'GET /users': { response: User[]; params: never };
  'GET /users/:id': { response: User; params: { id: string } };
  'POST /users': { response: User; params: never; body: CreateUser };
  'PUT /users/:id': { response: User; params: { id: string }; body: UpdateUser };
}

class ApiClient<T extends Record<string, any>> {
  // APIを呼び出すメソッドの型定義
  request<K extends keyof T>(
    endpoint: K,
    // パラメータとボディの型をエンドポイントから推論
    options?: /* ここに適切な型を定義 */
  ): Promise</* レスポンス型を定義 */> {
    // ここに実装
  }
}

// 3. 型安全なフォームバリデーター
type ValidationRule<T> = {
  required?: boolean;
  minLength?: T extends string ? number : never;
  maxLength?: T extends string ? number : never;
  min?: T extends number ? number : never;
  max?: T extends number ? number : never;
  pattern?: T extends string ? RegExp : never;
};

type FormSchema<T> = {
  [K in keyof T]: ValidationRule<T[K]>;
};

class FormValidator<T extends Record<string, any>> {
  constructor(private schema: FormSchema<T>) {}
  
  validate(data: T): /* バリデーション結果の型を定義 */ {
    // ここに実装
  }
}`,
    solution: `// 1. 型安全なイベントエミッター
class TypedEventEmitter<T extends Record<string, any>> {
  private listeners: {
    [K in keyof T]?: Array<(data: T[K]) => void>;
  } = {};

  on<K extends keyof T>(event: K, handler: (data: T[K]) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(handler);
  }
  
  emit<K extends keyof T>(event: K, data: T[K]): void {
    const handlers = this.listeners[event];
    if (handlers) {
      handlers.forEach(handler => handler(data));
    }
  }
}

// 2. 型安全なAPIクライアント
type ApiOptions<T> = T extends { params: infer P; body: infer B }
  ? { params: P; body: B }
  : T extends { params: infer P }
  ? { params: P }
  : T extends { body: infer B }
  ? { body: B }
  : {};

class ApiClient<T extends Record<string, any>> {
  async request<K extends keyof T>(
    endpoint: K,
    options?: T[K] extends { params: any } | { body: any } 
      ? ApiOptions<T[K]> 
      : never
  ): Promise<T[K] extends { response: infer R } ? R : never> {
    // 実装省略 - 実際のHTTPリクエスト処理
    throw new Error("Not implemented");
  }
}

// 3. 型安全なフォームバリデーター
type ValidationError = {
  field: string;
  message: string;
};

type ValidationResult<T> = {
  isValid: boolean;
  errors: ValidationError[];
  data: T;
};

class FormValidator<T extends Record<string, any>> {
  constructor(private schema: FormSchema<T>) {}
  
  validate(data: T): ValidationResult<T> {
    const errors: ValidationError[] = [];
    
    for (const [field, rules] of Object.entries(this.schema)) {
      const value = data[field as keyof T];
      
      if (rules.required && (value === undefined || value === null)) {
        errors.push({ field, message: "This field is required" });
      }
      
      if (typeof value === "string" && rules.minLength && value.length < rules.minLength) {
        errors.push({ field, message: \`Minimum length is \${rules.minLength}\` });
      }
      
      // 他のバリデーション処理...
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      data
    };
  }
}

// 使用例
const emitter = new TypedEventEmitter<EventMap>();
emitter.on('user:login', (data) => {
  // data は { userId: string; timestamp: Date } 型
  console.log(\`User \${data.userId} logged in\`);
});

const api = new ApiClient<ApiEndpoints>();
const user = await api.request('GET /users/:id', { params: { id: '123' } });
// user は User 型`,
    explanation:
      "高度なパターンでは、TypeScriptの型システムを活用して実行時とコンパイル時の両方で安全性を確保するアーキテクチャを構築します。",
    detailedExplanation: `高度なパターンについて詳しく解説します：

**型安全なイベントシステム**: 
- イベント名と引数の型を事前定義
- リスナーとエミッターの型安全性確保
- 実行時エラーの大幅な削減

**API クライアントの型安全性**: 
- エンドポイント定義から型を自動推論
- パラメータとレスポンスの型チェック
- 開発時にAPIの変更を即座に検知

**Builder パターンの型活用**: 
- 段階的な型絞り込み
- 必須プロパティの強制
- メソッドチェーンでの型安全性

**高階関数の型推論**: 
- 関数の引数から型を推論
- カリー化された関数の型安全性
- 部分適用での型保持

**実装時の考慮点**: 
- パフォーマンスと型安全性のバランス
- エラーメッセージの可読性
- チーム開発での型定義の共有
- ライブラリ設計での型エクスポート戦略`,
  },

  // 新しいレッスン: 13. TypeScript パフォーマンス最適化
  {
    id: "performance-optimization",
    title: "パフォーマンス最適化",
    description:
      "TypeScriptのコンパイル速度と実行時パフォーマンスを最適化する方法を学びます。",
    example: `// パフォーマンス最適化の例

// 1. 遅延読み込み型定義
type LazyUser = {
  id: string;
  profile?: () => Promise<UserProfile>;
};

// 2. 型レベルでのキャッシュ
type CachedResult<T, K extends string> = {
  [P in K]: T;
} & { _cache: true };

// 3. 効率的な型演算
type FastPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 4. 型ガードの最適化
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}`,
    exercise: `// 練習問題: 以下のコードを最適化してください

// 1. 重い型計算を避ける
type SlowUnion<T> = T extends any ? T[] : never;
type Example1 = SlowUnion<string | number | boolean>; // 改善が必要

// 2. 循環参照を避ける
interface Node {
  value: string;
  children: Node[]; // この定義を改善
}

// 3. 条件付きで型を読み込む
interface HeavyConfig {
  database: DatabaseConfig;
  redis: RedisConfig;
  elasticsearch: ElasticsearchConfig;
}

// この型を軽量化してください
type AppConfig = HeavyConfig;`,
    solution: `// 最適化されたコード

// 1. 分散条件型を避けて直接定義
type FastUnion = string[] | number[] | boolean[];

// 2. 循環参照を遅延評価で解決
interface OptimizedNode {
  value: string;
  children?: OptimizedNode[];
  getChildren?: () => OptimizedNode[];
}

// 3. 遅延読み込みとオプショナル
interface LightConfig {
  database?: () => Promise<DatabaseConfig>;
  redis?: () => Promise<RedisConfig>;
  elasticsearch?: () => Promise<ElasticsearchConfig>;
}

type OptimizedAppConfig = Partial<LightConfig>;

// 補助型定義
interface DatabaseConfig {
  host: string;
  port: number;
}

interface RedisConfig {
  url: string;
}

interface ElasticsearchConfig {
  nodes: string[];
}`,
    explanation:
      "TypeScriptの型システムは強力ですが、複雑な型定義はコンパイル速度に影響を与える可能性があります。適切な最適化により、開発効率を向上させることができます。",
    detailedExplanation: `TypeScriptパフォーマンス最適化の詳細：

**コンパイル速度の最適化**:
- 複雑な条件型の回避
- 型引数の制限（extends keyof T の活用）
- インデックス型アクセスの最小化
- 型エイリアスの効果的な使用

**実行時パフォーマンス**:
- 型ガードの最適化
- 不要な型アサーションの除去
- オブジェクトリテラルの型推論活用
- 遅延評価パターンの採用

**メモリ使用量の最適化**:
- 大きなユニオン型の分割
- 循環参照の回避
- オプショナルプロパティの活用
- WeakMap/WeakSetの型活用

**開発時の最適化**:
- tsconfig.json の適切な設定
- インクリメンタルコンパイル
- プロジェクト参照の活用
- 型チェックの段階的実行

**測定とモニタリング**:
- --extendedDiagnostics フラグ
- tsc --listFiles で依存関係確認
- IDE の TypeScript サービス監視
- ビルド時間の継続的測定`,
  },

  // 新しいレッスン: 14. 実践的なデザインパターン
  {
    id: "design-patterns",
    title: "TypeScriptデザインパターン",
    description:
      "TypeScriptでよく使用されるデザインパターンを実装し、型安全性を活用する方法を学びます。",
    example: `// TypeScriptでのデザインパターン例

// 1. Factory パターン（型安全）
abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return "ワンワン";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "ニャー";
  }
}

type AnimalType = 'dog' | 'cat';

class AnimalFactory {
  static create(type: AnimalType): Animal {
    switch (type) {
      case 'dog':
        return new Dog();
      case 'cat':
        return new Cat();
      default:
        const _exhaustive: never = type;
        throw new Error(\`Unsupported animal type: \${_exhaustive}\`);
    }
  }
}

// 2. Observer パターン（型安全）
interface Observer<T> {
  update(data: T): void;
}

class Subject<T> {
  private observers: Observer<T>[] = [];

  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  notify(data: T): void {
    this.observers.forEach(observer => observer.update(data));
  }
}`,
    exercise: `// 練習問題: 以下のデザインパターンを実装してください

// 1. Singleton パターン（型安全）
class DatabaseConnection {
  // シングルトンパターンを実装
  // 型安全性を保ちながら実装してください
}

// 2. Strategy パターン
interface PaymentMethod {
  // 支払い方法のインターフェース
}

class PaymentProcessor {
  // 戦略パターンを使用して複数の支払い方法に対応
}

// 3. Builder パターン（流れるようなインターフェース）
class UserBuilder {
  // ユーザーオブジェクトを段階的に構築
  // 型レベルで必須プロパティを保証
}

// 使用例：
// const user = new UserBuilder()
//   .setName("太郎")
//   .setEmail("taro@example.com")
//   .setAge(25)
//   .build();`,
    solution: `// デザインパターンの実装解答

// 1. Singleton パターン（型安全）
class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;
  private connectionString: string;

  private constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  static getInstance(connectionString?: string): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      if (!connectionString) {
        throw new Error("Connection string is required for first initialization");
      }
      DatabaseConnection.instance = new DatabaseConnection(connectionString);
    }
    return DatabaseConnection.instance;
  }

  query(sql: string): Promise<any[]> {
    console.log(\`Executing: \${sql}\`);
    return Promise.resolve([]);
  }
}

// 2. Strategy パターン
interface PaymentMethod {
  processPayment(amount: number): Promise<{ success: boolean; transactionId: string }>;
}

class CreditCardPayment implements PaymentMethod {
  constructor(private cardNumber: string, private cvv: string) {}

  async processPayment(amount: number) {
    // クレジットカード処理
    return { success: true, transactionId: \`cc_\${Date.now()}\` };
  }
}

class PayPalPayment implements PaymentMethod {
  constructor(private email: string) {}

  async processPayment(amount: number) {
    // PayPal処理
    return { success: true, transactionId: \`pp_\${Date.now()}\` };
  }
}

class PaymentProcessor {
  constructor(private strategy: PaymentMethod) {}

  setStrategy(strategy: PaymentMethod): void {
    this.strategy = strategy;
  }

  async processPayment(amount: number) {
    return await this.strategy.processPayment(amount);
  }
}

// 3. Builder パターン（段階的な型制約）
type UserBase = {};
type WithName<T> = T & { name: string };
type WithEmail<T> = T & { email: string };
type WithAge<T> = T & { age: number };

class UserBuilder<T = UserBase> {
  constructor(private data: T = {} as T) {}

  setName(name: string): UserBuilder<WithName<T>> {
    return new UserBuilder({ ...this.data, name });
  }

  setEmail(email: string): UserBuilder<WithEmail<T>> {
    return new UserBuilder({ ...this.data, email });
  }

  setAge(age: number): UserBuilder<WithAge<T>> {
    return new UserBuilder({ ...this.data, age });
  }

  build(this: UserBuilder<WithName<WithEmail<WithAge<UserBase>>>>): WithName<WithEmail<WithAge<UserBase>>> {
    return this.data;
  }
}

// 使用例
const user = new UserBuilder()
  .setName("太郎")
  .setEmail("taro@example.com")
  .setAge(25)
  .build(); // 型安全: すべての必須プロパティが設定されている`,
    explanation:
      "TypeScriptでデザインパターンを実装する際は、型システムを活用してコンパイル時により多くの制約を表現できます。",
    detailedExplanation: `TypeScriptデザインパターンの詳細解説：

**Singleton パターン**:
- 型安全なインスタンス管理
- private constructorの活用
- 初期化時のエラーハンドリング
- スレッドセーフティ（必要に応じて）

**Observer パターン**:
- ジェネリクスを使った型安全なイベント
- WeakMap を使ったメモリリーク対策
- async/await 対応オブザーバー
- エラーハンドリングとイベント伝播

**Strategy パターン**:
- インターフェースの型安全性
- 実行時戦略切り替え
- パフォーマンス考慮（戦略のキャッシュ）
- 複数戦略の組み合わせ

**Builder パターン**:
- 段階的型制約（Type-level State Machine）
- 必須プロパティの強制
- 流れるようなインターフェース
- 部分的な設定値の型安全性

**Factory パターン**:
- never型を使った網羅性チェック
- 型ガードとの組み合わせ
- 抽象ファクトリの実装
- 依存注入との組み合わせ

**実用的な考慮点**:
- パフォーマンスと型安全性のバランス
- テスタビリティの向上
- コードの可読性維持
- ライブラリとの連携方法`,
  },

  // 新しいレッスン: 15. エラーハンドリングとモナド
  {
    id: "error-handling",
    title: "型安全なエラーハンドリング",
    description:
      "TypeScriptでの型安全なエラーハンドリング、Result型、Maybe型などの関数型プログラミングの概念を学びます。",
    example: `// 型安全なエラーハンドリングの例

// 1. Result型の定義
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

// 2. Maybe型の定義
type Maybe<T> = T | null | undefined;

// 3. 実用的なResult型操作
class ResultOps {
  static ok<T>(data: T): Result<T> {
    return { success: true, data };
  }

  static err<E>(error: E): Result<never, E> {
    return { success: false, error };
  }

  static map<T, U, E>(
    result: Result<T, E>,
    fn: (data: T) => U
  ): Result<U, E> {
    return result.success 
      ? ResultOps.ok(fn(result.data))
      : result;
  }

  static flatMap<T, U, E>(
    result: Result<T, E>,
    fn: (data: T) => Result<U, E>
  ): Result<U, E> {
    return result.success ? fn(result.data) : result;
  }
}

// 4. 実際の使用例
async function fetchUser(id: string): Promise<Result<User, string>> {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) {
      return ResultOps.err("User not found");
    }
    const user = await response.json();
    return ResultOps.ok(user);
  } catch (error) {
    return ResultOps.err("Network error");
  }
}

type User = { id: string; name: string; email: string };`,
    exercise: `// 練習問題: エラーハンドリングシステムを構築してください

// 1. カスタムエラー型を定義
type ValidationError = {
  field: string;
  message: string;
};

type NetworkError = {
  status: number;
  message: string;
};

// 2. 複数のエラー型を扱えるResult型
type ApiResult<T> = Result<T, ValidationError | NetworkError>;

// 3. チェーン可能な操作を実装
class ApiClient {
  // async fetchユーザー情報
  // バリデーション
  // エラーハンドリング
  // すべてを型安全に実装してください
}

// 4. パイプライン処理
// 複数の非同期操作をチェーンし、どこかで失敗した場合は
// 適切なエラーを返すシステムを実装してください

async function processUserData(id: string): Promise<ApiResult<ProcessedUser>> {
  // 実装してください
}

type ProcessedUser = {
  id: string;
  displayName: string;
  isValid: boolean;
};`,
    solution: `// エラーハンドリングシステムの実装解答

// 1. カスタムエラー型
type ValidationError = {
  type: 'validation';
  field: string;
  message: string;
};

type NetworkError = {
  type: 'network';
  status: number;
  message: string;
};

type BusinessError = {
  type: 'business';
  code: string;
  message: string;
};

type AppError = ValidationError | NetworkError | BusinessError;

// 2. 強化されたResult型
type Result<T, E = AppError> = 
  | { success: true; data: T }
  | { success: false; error: E };

// 3. ResultOpsの拡張
class ResultOps {
  static ok<T>(data: T): Result<T> {
    return { success: true, data };
  }

  static err<E>(error: E): Result<never, E> {
    return { success: false, error };
  }

  static async fromAsync<T>(
    promise: Promise<T>
  ): Promise<Result<T, NetworkError>> {
    try {
      const data = await promise;
      return ResultOps.ok(data);
    } catch (error) {
      return ResultOps.err({
        type: 'network',
        status: 500,
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  static mapError<T, E1, E2>(
    result: Result<T, E1>,
    fn: (error: E1) => E2
  ): Result<T, E2> {
    return result.success ? result : ResultOps.err(fn(result.error));
  }

  static combine<T extends readonly Result<any, any>[]>(
    results: T
  ): Result<{[K in keyof T]: T[K] extends Result<infer U, any> ? U : never}, AppError> {
    for (const result of results) {
      if (!result.success) {
        return result;
      }
    }
    return ResultOps.ok(results.map(r => r.success ? r.data : never) as any);
  }
}

// 4. ApiClient実装
class ApiClient {
  async fetchUser(id: string): Promise<Result<User, AppError>> {
    // バリデーション
    if (!id.trim()) {
      return ResultOps.err({
        type: 'validation',
        field: 'id',
        message: 'User ID is required'
      });
    }

    // ネットワーク呼び出し
    try {
      const response = await fetch(\`/api/users/\${id}\`);
      
      if (response.status === 404) {
        return ResultOps.err({
          type: 'business',
          code: 'USER_NOT_FOUND',
          message: 'User not found'
        });
      }

      if (!response.ok) {
        return ResultOps.err({
          type: 'network',
          status: response.status,
          message: 'Failed to fetch user'
        });
      }

      const user = await response.json();
      return ResultOps.ok(user);
    } catch (error) {
      return ResultOps.err({
        type: 'network',
        status: 0,
        message: 'Network connection failed'
      });
    }
  }

  validateUser(user: User): Result<User, ValidationError> {
    if (!user.email.includes('@')) {
      return ResultOps.err({
        type: 'validation',
        field: 'email',
        message: 'Invalid email format'
      });
    }
    return ResultOps.ok(user);
  }
}

// 5. パイプライン処理
async function processUserData(id: string): Promise<Result<ProcessedUser, AppError>> {
  const client = new ApiClient();
  
  // ユーザー取得
  const userResult = await client.fetchUser(id);
  if (!userResult.success) return userResult;
  
  // バリデーション
  const validatedResult = client.validateUser(userResult.data);
  if (!validatedResult.success) return validatedResult;
  
  // 処理
  const processedUser: ProcessedUser = {
    id: validatedResult.data.id,
    displayName: validatedResult.data.name.toUpperCase(),
    isValid: true
  };
  
  return ResultOps.ok(processedUser);
}

// 使用例
async function handleUserRequest(id: string) {
  const result = await processUserData(id);
  
  if (result.success) {
    console.log('Processed user:', result.data);
  } else {
    switch (result.error.type) {
      case 'validation':
        console.error(\`Validation error in \${result.error.field}: \${result.error.message}\`);
        break;
      case 'network':
        console.error(\`Network error (\${result.error.status}): \${result.error.message}\`);
        break;
      case 'business':
        console.error(\`Business error (\${result.error.code}): \${result.error.message}\`);
        break;
    }
  }
}

type User = { id: string; name: string; email: string };
type ProcessedUser = { id: string; displayName: string; isValid: boolean };`,
    explanation:
      "型安全なエラーハンドリングにより、実行時エラーを減らし、エラーの種類を明確に区別できます。関数型プログラミングの概念を活用することで、より予測可能なコードが書けます。",
    detailedExplanation: `型安全なエラーハンドリングの詳細解説：

**Result型パターンの利点**:
- エラーの可能性を型で表現
- 例外の代わりに明示的なエラーハンドリング
- 関数の戻り値でエラー状態を表現
- コンパイル時にエラーハンドリング漏れを検出

**Maybe/Option型**:
- null/undefined の安全な処理
- 値の存在/非存在を型で表現
- チェーン操作での安全性確保
- デフォルト値の提供メカニズム

**エラー型の設計**:
- ドメイン固有エラーの定義
- エラーの分類と階層化
- 復旧可能/不可能エラーの区別
- 国際化対応のエラーメッセージ

**関数型操作**:
- map, flatMap, filter などの操作
- エラーショートサーキット
- パイプライン処理
- モナド則の遵守

**実用的パターン**:
- async/await との組み合わせ
- 複数エラーの集約
- エラー変換とマッピング
- ロギングとモニタリング連携

**パフォーマンス考慮**:
- エラーオブジェクトの軽量化
- スタックトレースの管理
- メモリリークの防止
- エラー処理のオーバーヘッド最小化`,
  },

  // 新しいレッスン: 16. 実世界のTypeScript
  {
    id: "real-world-typescript",
    title: "実世界のTypeScript",
    description:
      "大規模なアプリケーションでTypeScriptを効果的に使用するためのベストプラクティスとパターンを学びます。",
    example: `// 実世界のTypeScript例

// 1. モジュール境界の設計
namespace UserManagement {
  export interface User {
    readonly id: UserId;
    profile: UserProfile;
    preferences: UserPreferences;
  }

  export type UserId = string & { readonly brand: unique symbol };
  
  export function createUserId(id: string): UserId {
    if (!id || id.length < 3) {
      throw new Error('Invalid user ID');
    }
    return id as UserId;
  }

  export class UserService {
    private users = new Map<UserId, User>();

    async createUser(profile: UserProfile): Promise<Result<User, CreateUserError>> {
      // 実装...
      return ResultOps.ok({} as User);
    }

    async findUser(id: UserId): Promise<Maybe<User>> {
      return this.users.get(id) ?? null;
    }
  }
}

// 2. 設定の型安全管理
interface AppConfig {
  readonly database: DatabaseConfig;
  readonly api: ApiConfig;
  readonly features: FeatureFlags;
}

interface DatabaseConfig {
  readonly host: string;
  readonly port: number;
  readonly database: string;
  readonly ssl: boolean;
}

interface FeatureFlags {
  readonly enableBetaFeatures: boolean;
  readonly maxFileUploadSize: number;
  readonly rateLimitPerMinute: number;
}

// 3. 環境別設定
type Environment = 'development' | 'staging' | 'production';

const createConfig = (env: Environment): AppConfig => {
  const baseConfig = {
    database: {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME || 'app',
      ssl: env === 'production'
    },
    api: {
      baseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
      timeout: 30000,
      retries: 3
    }
  };

  const environmentConfigs: Record<Environment, Partial<AppConfig>> = {
    development: {
      features: {
        enableBetaFeatures: true,
        maxFileUploadSize: 10 * 1024 * 1024, // 10MB
        rateLimitPerMinute: 1000
      }
    },
    staging: {
      features: {
        enableBetaFeatures: true,
        maxFileUploadSize: 5 * 1024 * 1024, // 5MB
        rateLimitPerMinute: 500
      }
    },
    production: {
      features: {
        enableBetaFeatures: false,
        maxFileUploadSize: 2 * 1024 * 1024, // 2MB
        rateLimitPerMinute: 100
      }
    }
  };

  return { ...baseConfig, ...environmentConfigs[env] } as AppConfig;
};`,
    exercise: `// 練習問題: 企業向けアプリケーションのアーキテクチャを設計してください

// 1. マルチテナント対応のUser システム
// - テナント分離
// - 権限管理
// - 組織階層

// 2. プラグインシステム
// - 動的プラグイン読み込み
// - プラグイン間の型安全な通信
// - ライフサイクル管理

// 3. 国際化（i18n）対応
// - 型安全な翻訳キー
// - 複数言語サポート
// - 日付・数値フォーマット

// 4. 監査ログシステム
// - すべての操作を記録
// - 型安全なログエントリ
// - 検索・フィルタ機能

// 実装してください：
interface TenantContext {
  // テナント情報
}

interface PluginManager {
  // プラグイン管理
}

interface I18nManager {
  // 国際化管理
}

interface AuditLogger {
  // 監査ログ
}`,
    solution: `// 企業向けアプリケーションアーキテクチャの実装

// 1. マルチテナント対応システム
type TenantId = string & { readonly brand: unique symbol };
type UserId = string & { readonly brand: unique symbol };
type RoleId = string & { readonly brand: unique symbol };

interface TenantContext {
  readonly tenantId: TenantId;
  readonly name: string;
  readonly plan: 'starter' | 'professional' | 'enterprise';
  readonly features: TenantFeatures;
  readonly limits: TenantLimits;
}

interface TenantFeatures {
  readonly sso: boolean;
  readonly auditLogs: boolean;
  readonly customBranding: boolean;
  readonly apiAccess: boolean;
}

interface TenantLimits {
  readonly maxUsers: number;
  readonly maxStorageGB: number;
  readonly maxApiCallsPerDay: number;
}

interface MultiTenantUser {
  readonly id: UserId;
  readonly tenantId: TenantId;
  readonly email: string;
  readonly roles: RoleId[];
  readonly organizationPath: string[]; // 階層構造 ["company", "division", "team"]
}

class TenantService {
  private tenants = new Map<TenantId, TenantContext>();

  async getTenant(tenantId: TenantId): Promise<Maybe<TenantContext>> {
    return this.tenants.get(tenantId) ?? null;
  }

  async validateAccess(
    tenantId: TenantId, 
    feature: keyof TenantFeatures
  ): Promise<boolean> {
    const tenant = await this.getTenant(tenantId);
    return tenant?.features[feature] ?? false;
  }
}

// 2. プラグインシステム
interface Plugin {
  readonly id: string;
  readonly name: string;
  readonly version: string;
  readonly dependencies: string[];
  
  initialize(context: PluginContext): Promise<void>;
  destroy(): Promise<void>;
}

interface PluginContext {
  readonly tenantId: TenantId;
  readonly eventBus: EventBus;
  readonly storage: PluginStorage;
  readonly logger: Logger;
}

interface PluginStorage {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T): Promise<void>;
  delete(key: string): Promise<void>;
}

interface EventBus {
  emit<T>(event: string, data: T): void;
  on<T>(event: string, handler: (data: T) => void): void;
  off(event: string, handler: Function): void;
}

class PluginManager {
  private plugins = new Map<string, Plugin>();
  private contexts = new Map<string, PluginContext>();

  async loadPlugin(plugin: Plugin, tenantId: TenantId): Promise<Result<void, string>> {
    try {
      // 依存関係チェック
      for (const dep of plugin.dependencies) {
        if (!this.plugins.has(dep)) {
          return ResultOps.err(\`Missing dependency: \${dep}\`);
        }
      }

      const context: PluginContext = {
        tenantId,
        eventBus: new EventBusImpl(),
        storage: new PluginStorageImpl(tenantId, plugin.id),
        logger: new LoggerImpl(plugin.id)
      };

      await plugin.initialize(context);
      this.plugins.set(plugin.id, plugin);
      this.contexts.set(plugin.id, context);

      return ResultOps.ok(undefined);
    } catch (error) {
      return ResultOps.err(\`Plugin initialization failed: \${error}\`);
    }
  }

  async unloadPlugin(pluginId: string): Promise<void> {
    const plugin = this.plugins.get(pluginId);
    if (plugin) {
      await plugin.destroy();
      this.plugins.delete(pluginId);
      this.contexts.delete(pluginId);
    }
  }
}

// 3. 国際化（i18n）システム
type TranslationKey = 
  | 'common.save'
  | 'common.cancel'
  | 'user.profile.title'
  | 'user.profile.email.label'
  | 'error.validation.required'
  | 'error.network.timeout';

type Language = 'ja' | 'en' | 'zh' | 'ko';

interface Translation {
  [key: string]: string | Translation;
}

interface I18nManager {
  setLanguage(lang: Language): void;
  translate(key: TranslationKey, params?: Record<string, string>): string;
  formatDate(date: Date): string;
  formatNumber(num: number): string;
  formatCurrency(amount: number, currency: string): string;
}

class I18nManagerImpl implements I18nManager {
  private currentLanguage: Language = 'ja';
  private translations = new Map<Language, Translation>();

  constructor() {
    // 翻訳データの初期化
    this.translations.set('ja', {
      common: {
        save: '保存',
        cancel: 'キャンセル'
      },
      user: {
        profile: {
          title: 'プロフィール',
          email: { label: 'メールアドレス' }
        }
      },
      error: {
        validation: { required: 'この項目は必須です' },
        network: { timeout: 'ネットワークタイムアウトが発生しました' }
      }
    });

    this.translations.set('en', {
      common: {
        save: 'Save',
        cancel: 'Cancel'
      },
      user: {
        profile: {
          title: 'Profile',
          email: { label: 'Email Address' }
        }
      },
      error: {
        validation: { required: 'This field is required' },
        network: { timeout: 'Network timeout occurred' }
      }
    });
  }

  setLanguage(lang: Language): void {
    this.currentLanguage = lang;
  }

  translate(key: TranslationKey, params?: Record<string, string>): string {
    const translation = this.translations.get(this.currentLanguage);
    if (!translation) return key;

    const keys = key.split('.');
    let current: any = translation;
    
    for (const k of keys) {
      current = current[k];
      if (!current) return key;
    }

    let result = typeof current === 'string' ? current : key;
    
    // パラメータ置換
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        result = result.replace(new RegExp(\`{{\${param}}}\`, 'g'), value);
      });
    }

    return result;
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat(this.currentLanguage).format(date);
  }

  formatNumber(num: number): string {
    return new Intl.NumberFormat(this.currentLanguage).format(num);
  }

  formatCurrency(amount: number, currency: string): string {
    return new Intl.NumberFormat(this.currentLanguage, {
      style: 'currency',
      currency
    }).format(amount);
  }
}

// 4. 監査ログシステム
type AuditAction = 
  | 'user.create'
  | 'user.update'
  | 'user.delete'
  | 'login.success'
  | 'login.failure'
  | 'data.export'
  | 'settings.change';

interface AuditEntry {
  readonly id: string;
  readonly tenantId: TenantId;
  readonly userId: UserId;
  readonly action: AuditAction;
  readonly entityType: string;
  readonly entityId: string;
  readonly changes: Record<string, { from: any; to: any }>;
  readonly metadata: Record<string, any>;
  readonly timestamp: Date;
  readonly ipAddress: string;
  readonly userAgent: string;
}

interface AuditQuery {
  tenantId: TenantId;
  userId?: UserId;
  action?: AuditAction;
  entityType?: string;
  entityId?: string;
  fromDate?: Date;
  toDate?: Date;
  limit?: number;
  offset?: number;
}

interface AuditLogger {
  log(entry: Omit<AuditEntry, 'id' | 'timestamp'>): Promise<void>;
  query(query: AuditQuery): Promise<AuditEntry[]>;
  export(query: AuditQuery): Promise<Blob>;
}

class AuditLoggerImpl implements AuditLogger {
  private entries: AuditEntry[] = [];

  async log(entry: Omit<AuditEntry, 'id' | 'timestamp'>): Promise<void> {
    const auditEntry: AuditEntry = {
      ...entry,
      id: \`audit_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`,
      timestamp: new Date()
    };
    
    this.entries.push(auditEntry);
    
    // 実際の実装では、データベースに保存
    console.log('Audit log:', auditEntry);
  }

  async query(query: AuditQuery): Promise<AuditEntry[]> {
    let filtered = this.entries.filter(entry => entry.tenantId === query.tenantId);

    if (query.userId) {
      filtered = filtered.filter(entry => entry.userId === query.userId);
    }

    if (query.action) {
      filtered = filtered.filter(entry => entry.action === query.action);
    }

    if (query.entityType) {
      filtered = filtered.filter(entry => entry.entityType === query.entityType);
    }

    if (query.fromDate) {
      filtered = filtered.filter(entry => entry.timestamp >= query.fromDate!);
    }

    if (query.toDate) {
      filtered = filtered.filter(entry => entry.timestamp <= query.toDate!);
    }

    // ソートとページネーション
    filtered.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    
    const offset = query.offset || 0;
    const limit = query.limit || 100;
    
    return filtered.slice(offset, offset + limit);
  }

  async export(query: AuditQuery): Promise<Blob> {
    const entries = await this.query({ ...query, limit: undefined, offset: undefined });
    const csv = this.entriesToCsv(entries);
    return new Blob([csv], { type: 'text/csv' });
  }

  private entriesToCsv(entries: AuditEntry[]): string {
    const headers = ['Timestamp', 'User ID', 'Action', 'Entity Type', 'Entity ID', 'IP Address'];
    const rows = entries.map(entry => [
      entry.timestamp.toISOString(),
      entry.userId,
      entry.action,
      entry.entityType,
      entry.entityId,
      entry.ipAddress
    ]);
    
    return [headers, ...rows].map(row => row.join(',')).join('\\n');
  }
}

// 使用例とアーキテクチャ統合
class EnterpriseApplication {
  constructor(
    private tenantService: TenantService,
    private pluginManager: PluginManager,
    private i18n: I18nManager,
    private auditLogger: AuditLogger
  ) {}

  async processUserAction(
    tenantId: TenantId,
    userId: UserId,
    action: AuditAction,
    data: any
  ): Promise<Result<any, string>> {
    // 監査ログ
    await this.auditLogger.log({
      tenantId,
      userId,
      action,
      entityType: 'user',
      entityId: userId,
      changes: {},
      metadata: { data },
      ipAddress: '192.168.1.1',
      userAgent: 'Mozilla/5.0...'
    });

    // アクション実行
    // ...

    return ResultOps.ok(data);
  }
}

// 実装クラス（簡略版）
class EventBusImpl implements EventBus {
  private handlers = new Map<string, Function[]>();

  emit<T>(event: string, data: T): void {
    const eventHandlers = this.handlers.get(event) || [];
    eventHandlers.forEach(handler => handler(data));
  }

  on<T>(event: string, handler: (data: T) => void): void {
    const handlers = this.handlers.get(event) || [];
    handlers.push(handler);
    this.handlers.set(event, handlers);
  }

  off(event: string, handler: Function): void {
    const handlers = this.handlers.get(event) || [];
    const index = handlers.indexOf(handler);
    if (index > -1) {
      handlers.splice(index, 1);
      this.handlers.set(event, handlers);
    }
  }
}

class PluginStorageImpl implements PluginStorage {
  constructor(private tenantId: TenantId, private pluginId: string) {}

  async get<T>(key: string): Promise<T | null> {
    // 実装
    return null;
  }

  async set<T>(key: string, value: T): Promise<void> {
    // 実装
  }

  async delete(key: string): Promise<void> {
    // 実装
  }
}

class LoggerImpl {
  constructor(private context: string) {}
  // ロガー実装
}

// 型定義の継続
interface UserProfile {
  name: string;
  email: string;
}

interface UserPreferences {
  language: Language;
  timezone: string;
}

interface ApiConfig {
  baseUrl: string;
  timeout: number;
  retries: number;
}

type CreateUserError = 'INVALID_EMAIL' | 'USER_EXISTS' | 'TENANT_LIMIT_EXCEEDED';

interface Logger {
  info(message: string, meta?: any): void;
  error(message: string, error?: Error): void;
  warn(message: string, meta?: any): void;
}

// Result型の再利用
type Maybe<T> = T | null;`,
    explanation:
      "実世界のTypeScriptアプリケーションでは、型安全性を保ちながら複雑なビジネス要件に対応する必要があります。モジュール設計、エラーハンドリング、拡張性を考慮したアーキテクチャが重要です。",
    detailedExplanation: `実世界のTypeScriptアプリケーション設計の詳細：

**アーキテクチャ原則**:
- 型安全性を保ちながらの拡張性
- ドメイン駆動設計（DDD）の適用
- 関心の分離とモジュール境界
- 依存性注入とテスタビリティ

**マルチテナント設計**:
- テナント分離の戦略（データベース、スキーマ、行レベル）
- テナント固有設定の型安全管理
- リソース制限と課金体系の実装
- セキュリティとデータ漏洩防止

**プラグインアーキテクチャ**:
- 動的機能拡張のメカニズム
- プラグイン間の型安全通信
- バージョニングと後方互換性
- サンドボックス化とセキュリティ

**国際化戦略**:
- 翻訳キーの型安全性
- 動的言語切り替え
- 右から左（RTL）言語サポート
- 文化的な日付・数値フォーマット

**監査とコンプライアンス**:
- 完全な操作ログ
- GDPR、CCPA等への対応
- データ保持ポリシー
- セキュリティインシデント追跡

**パフォーマンス考慮**:
- 遅延読み込みとコード分割
- キャッシュ戦略
- データベース最適化
- モニタリングとアラート

**開発・運用**:
- CI/CDパイプライン
- 自動テストとカバレッジ
- デプロイ戦略（ブルーグリーン、カナリア）
- エラー追跡とロギング

**チーム開発**:
- コード規約とフォーマッター
- APIドキュメント自動生成
- 型定義の共有戦略
- レビュープロセス`,
  },
];
