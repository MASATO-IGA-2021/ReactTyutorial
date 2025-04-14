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
- <script>要素は不要→バンドルによって生成された.jsファイルの名前に基づいて、webpackが後から.htmlファイルに反映するため。

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

### 2-3.JSX の基本
