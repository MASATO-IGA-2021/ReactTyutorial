# 導入

## 2.React の基本

### 2-1.はじめての React

#### 2-1-1.React アプリの作成

react アプリ名----------------------プロジェクトルート
|
|---/node_modules----------------ライブラリ一式
|---/public
| |---favicon.ico --------ファビコン
| |---index.html --------トップページ
| |---logoXxx.png --------ロゴ画像
| |---manifest.json--------アプリの構成情報
|---/src
| |---App.css--------------App コンポーネントのスタイル
| |---App.js---------------App コンポーネントの本体
| |---App.test.js----------App コンポーネントのテストコード
| |---index.css------------アプリ共通のスタイル
| |---index.js-------------起動ファイル
| |---logo.svg-------------ロゴの画像
| |---reportWebVitals.js---パフォーマンス監視のためのサービス
| |---setupTest.js---------テスト初期設定
|---package.json----------------パッケージ情報

#### 2-1-2npm script

- `npm run build`
  - アプリをビルドして、本番環境にデプロイするためのファイル一式を作成するコマンド
- `npm run eject`
  - Create React App を構成する webpack/Babel の設定をカスタマイズするためのコマンド

### 2-2.サンプルアプリの内容を確認

#### 2-2-1.メインページの準備-index.html

- React アプリは**ルート要素**を基点として開始される
- `<script>`要素は不要 → バンドルによって生成された.js ファイルの名前に基づいて、webpack が後から.html ファイルに反映するため。

#### 2-2-2.アプリを起動するためのエントリーポイント-index.js

- **createRot(container[,options])**
  - container: React アプリの埋め込み先(要素オブジェクト)
  - options: 動作オプション
- **JSX**:Javascript の拡張構文絵 Javascript のコードにタグ構造を埋め込むための仕組み

#### 2-2-3. Strict モード

- 以下のコードは警告を発する
  - 安全でないライフサイクル
  - レガシーな refAPI, contextAPI の使用
  - 非推奨な findDOMNode メソッドの利用

#### 2-2-4.ページを構成する UI 部品-App.js

- ホットリロード

#### 2-2-5.アプリを再描画する

- React では、ビュー描画のオーバーヘッドを最小化している
- **仮想 DOM**:React では、アプリの状態が何かしら変化したときに、実際の DOM ではなく、まず仮想 DOM を操作する。
  仮想 DOM とは、いうなればメモリ上に置かれた DOM のコピー。そして真に変更された最終的な結果(差分)だけを適切なタイミングで実際の DOM に書き戻す。
  DOM の操作は、一般的にオーバーヘッドの大きい処理ですが、これによって更新の範囲も頻度も最小限に抑えられるためパフォーマンス改善できます。
  仮想 DOM は、React に限らず代表的な Javascript フレームワークでも導入されている概念。

#### 2-2-6.関数コンポーネントとクラスコンポーネント

- 関数コンポーネント:関数として定義
- クラスコンポネント:クラスとして定義
  - React.Component クラスを継承する
  - render メソッドで出力(React 要素)を返す
- **関数コンポーネントを推奨**

### 2-3.JSX の基本

#### 2-3-1.JSX のルール

- 唯一のルート要素を持つ

```
//×
root.render(
    <p>こんにちは</p>
    <p>初めまして</p>
)
```

```
//〇
root.render(
    <div>
        <p>こんにちは</p>
        <p>初めまして</p>
    </div>
)
```

- 空要素は~ />で終える

```
×  const tag = <img src={image}>;
〇 const tag = <img src={image} />;
```

- 名前の異なる属性がある

```
const input = (
    <div className="Field">
        <label htmlFor="title">書名</label>
        <input id="title" tabIndex="2" />
    </div>
)
```

#### 2-3-2.JSX に Javascript 式を埋め込む-{...}構文

- {...}構文では式はエスケープ処理される

```
const content = `<h3>WINGSプロジェクト</h3>
    <img src="https://wings.msn.to/image/wings.jpg" />`;
root.render(
    <p>{content}</p>
);
```

- 実体参照の埋め込みに注意
- 注意：bool 値, undefined/null は無視される

#### 2-3-3.{...}構文で属性値を設定する

- 複数の属性をまとめて設定する

```
const attr = {
    href: 'https://wings.msn.to/',
    download: false,
    target: '_blank',
    rel: 'help'
}
//良くない例
root.render(
    <a href={attr.href} download={attr.download} target={attr.target} rel={attr.rel}>
    サポートページへ</a>
)
//良い例
root.render(
    <a {...attr}>サポートページへ</a>
)
```
