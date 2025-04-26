# 基本編

## 5.コンポーネント開発(応用)

### 5-1.組み込みコンポーネント

#### 5-1-1 コンポーネントの描画町を検知する -Suspense コンポーネント(1)

- Suspense コンポーネント：待ちを検知して一時的にフォールバック(代替コンテンツ)を表示

  - コンポーネントを遅延ロードする
  - ネットワーク経由でデータを取得する

- コンポーネントを遅延ロードする
  - 動的インポートしたコンポーネント
  ```
  lazy(() => statements)
  statements: コンポーネント読み込みコード
  ```
  - <Suspense>要素が複数の遅延コンポーネントをラップしている場合、全てのコンポーネントがロードされたところで配下の内容を表示する。

#### 5-1-2 非同期処理の終了を待ち受ける -Suspense コンポーネント(2)

- コンポーネント以外のリソース取得(=Promise による非同期処理)を<Suspense>要素で待ち受けることが可能になっている。
- Promise による非同期処理を受け取る
  `throw new Promise((resolve, reject) => { })`
  - **<Suspense>要素**：子要素から投げられた Promise を補足すると、フォールバック(代替コンテンツ)を表示するコンポーネント
  - Promise と状態管理
    - Promise は非同期処理の状態を管理するためのオブジェクト
      - Promise オブジェクトは生成直後 Pending(保留中)状態であり、非同期処理を終了することで Fulfilled(成功)/Rejected(失敗)の状態になる。
      - Promise オブジェクトは必ず一方向性であるため、Fulfilled(成功)/Rejected(失敗)から Pending に戻ることはない。
- Promise の状態の変化を検知する
- Promise の結果を表示する
  - <Suspense>要素は Promise の変化に応じて描画を再試行するだけで、非同期処理の中身を見ているわけではない。

#### 5-1-3 コンポーネントの描画時間を計測する - Profiler コンポーネント

```
<Profiler id='id' onRender={handleRender}>
  contents
</Profiler>

id: Profilerを識別するid値
handleRender: 配下のコンポーネントが描画される際に実行するコールバック関数
contents: パフォーマンスを計測する対象
```

### 5-2.コンポーネント開発でのスタイル定義

#### 5-2-1 JSX 式にスタイルシートを埋め込む -Styled JSX

- **Styled JSX(CSS-in-JS)**:JSX 式にスタイル定義を埋め込む形式のライブラリ

  - コンポーネントファイルでロジック/スタイルをまとめて管理できる
  - .vue ファイルともよく似た仕組み
  - Styled JSX をインストール

  ```
  npm install styled-jsx
  npm run eject
  ```

  - Styled JSX の基本

  ```
  <style jsx>{`
  スタイル定義
  `}</style>
  ```

  - `<style>`要素に jsx 属性を付与する、スタイル全体を{`・・・`}で括る。

  - Styled JSX の様々な記法

    1. **グローバルスタイル**: アプリ全体に適用されるスタイルを定義したい場合に global 属性を付与する

    ```
    …(省略)
    return (
      <>
      <style jsx global>{`
      h3 {
        background-color: Yellow;
        }
      `}</style>

      <div className="panel"><b>Styled JSX</b>は、JSX式にスタイル定義を</div>
      </>
    )
    ```

    2. スタイル定義の外部化

    - より複雑なコンポーネントでは、.js ファイルの肥大化を防ぐためにスタイル定義を外部化したくなることがある。その場合、css 関数を利用することでスタイル定義を定数として切り出すことも可能
    - グローバルスタイルで定義したい場合`css`→`css.global`

    3. ダイナミックスタイル

    - テンプレート文字式に式・変数を埋め込むだけ
      - 埋め込みの式は{...}ではなく、${...}
      - 性的なスタイル定義と動的なスタイル定義は切り離す

#### 5-2-2 標準タグを拡張してスタイル付きタグを定義する -Styled Components

- **Styled Components**は CSS-in-JS に分類されるライブラリの一種

```
styled.tag`
//style
`
```

- tag: 拡張するタグ名
- style: 適用するスタイル

- 既存のコンポーネントにスタイル付けする
- スタイル定義を外部化する
- グローバルなスタイルを定義する

  ```
  createGlobalStyle`
  {
    ...
  }`

  ```

- Props 経由で動的なスタイルを設定する

#### 5-2-3. 複数の記法に対した CSS-in-JS ライブラリ -Emotion

- `npm install @emotion/react @emotion/styled`で Emotion をインストール
- Emotion を利用する際は、以下のソースコードで Emotion の利用を宣言
  `/** @jsxImportSource @emotion/react */`
  - **JSX Pragma**: Emotion をどのように処理するかを決めるコンパイラーへの宣言
    ` css`` `でスタイル定義を行う
- Styled Components ライクな記法

### 5-3.コンポーネントのその他の話題

#### 5-3-1. コンポーネント配下のコンテンツを任意の領域に描画する -ポータル

- **ポータル**:コンポーネント配下のコンテンツをページ内の任意の場所の領域(=コンポーネント以外の場所)に描画できる

  - ポータルを利用することで、テンプレート内の特定の要素を自由に配置可能

- ダイアログの実装
  `createPortal(children, domNode[,key])`
  - children: 引数 domNode 配下に埋め込む React 要素
  - domNode: 埋め込み先となる要素
  - key: ポータルを一意に特定するキー

#### 5-3-2. コンポーネントで発生したエラーを処理する -Error Boundary

- **Error Boundary**:配下のコンポーネントで発生したエラーを補足して代わりの UI をフォールバック
  (表示)する役割の React コンポーネント

`npm install react-error-boundary`

- Error Boundary の基本

  - `react-error-boundary`の核となるのは ErrorBoundary コンポーネント。
  - <ErrorBoundary>要素のもっとも簡単な使用方法は、エラー発生可能性が高い領域を括り、fallback 属性にエラー発生時のコンテンツ(React 要素)を指定する。
  - エラー時、表示制御だけでなく何らかの処理を実装することも可能。onError 属性を指定することで可能になる。

- より詳細なエラーメッセージを生成

  - error: Error Boundary 配下で発生したエラー情報
  - resetErrorBoundary: Error Boundary をリセットするための関数

- イベントハンドラーからの例外を Error Boundary で処理する
  - Error Boundary をコードから利用するためには、`useErrorBoundary`の戻り値の 1 つである関数の`showBoundary(error)`で関数を利用して ErrorBoundary を操作しなければいけない。
    - `showBoundary(error)`: Error Boundary に対して例外情報を引き渡さなければいけない
