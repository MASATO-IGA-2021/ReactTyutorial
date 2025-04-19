# 導入

## 3.コンポーネント開発(基本)

### 3-1.コンポーネントを支える基本概念 - Props と State

#### 3-1-1.Props/State とは？

- コンポーネントで値を扱うための仕組み
  - Props: コンポーネントにパラメータを渡すための引数
  - State: コンポーネント内の状態を表す変数

#### 3-1-2.Props の基本

- Props の命名はキャメルケース記法で表す
- Props のデータ型
  - Props には配列、関数、オブジェクトなど渡すことが可能
- Props の分割代入
  - 呼び出しのコードがわずかながら簡単化できる
  - 要求する Props がシグニチャを見れば明確になる
  - Props の既定値も宣言できる
  ```
  export default function MyHelllo({myName="権兵衛"}){...}
  ```

#### 3-1-3.イベント処理の基本

- **イベント**: 状態を変化させるトリガー。イベントによって呼び出されるコードのことをイベントハンドラーと言う。
- 以下つまづいた点をまとめる。

```
export default function EventBasic(type) {
  //clickのイベントハンドラー
  const current = () => {
    console.log("処理開始");
    const d = new Date();
    switch (type) {
      case "date":
        console.log(d.toLocaleDateString());
        break;
      case "time":
        console.log(d.toLocaleTimeString());
        break;
      default:
        console.log(d.toLocaleString());
    }
  };
  return (
    <div>
      <button onClick={current}>現在時刻取得</button>
    </div>
  );
}
```

`<button onClick={current}>現在時刻取得</button>`を`<button onClick={current()}>現在時刻取得</button>`とコーディングしていたため Click 時に動作しない事象が起きていた。

- ポイント
- onClick={current} → **クリックされたときに current 関数を「実行する」**
  - ここでは current という**関数の参照（ポインタ）**を渡している
  - React はこの関数を保持しておいて、クリックイベントが発生したときに実行
  - この書き方が基本であり、意図どおり「ボタンを押したら関数が実行される」
- onClick={current()} → **コンポーネントが「レンダリングされたときに」current 関数が「即実行される」**
  - current() と書くことで、関数は **その場で即実行** される
  - つまり、React がコンポーネントをレンダリングするときに current() を実行し、その戻り値（undefined）を onClick に渡すことになる
  - 結果として、onClick に渡るのは関数ではなく undefined になるので、ボタンをクリックしても何も起きません（エラーになることも）

#### 3-1-4.State の基本

- useState 関数
  - `const [state, setState] = useState(initialState)`
  - state: State 値を格納する変数
  - setState: State 値を更新するための関数
  - initialState: State 初期値
- コンポーネントの更新タイミング
  - State が更新された場合
  - 渡された Props が変更された場合
  - 親コンポーネントが再描画された場合

## 3-2.条件分岐と繰り返し処理

### 3-2-1.配列をリスト化する -繰り返し処理

- map メソッド`

```
list.map((value, index, array) => {
  statement...
})

```

- プロパティ説明

  - list: 元の配列
  - value: 要素値
  - index: インデックス値
  - array: 元の配列
  - statements: 要素に対する処理(戻り値は加工後の値)

- **コールバック関数**:他の関数に引数として渡され、後でその関数によって呼び出される関数

- リスト項目を特定する key 属性
  - key 属性がない現状だと React は配列の変更を検知できない。
  ```
  //変更前
  {targets.map((book) => (
      <>
      ...
      </>
  ))}
  //変更後
  {targets.map((book) => (
      <React.Fragment key={book.isbn}>
      ...
      </React.Fragment>
  ))}
  ```
  - index を一意的な key 属性とすることもできますが、要素の追加/削除/ソートによって変更する可能性があるため非推奨になる
- リスト項目を異なるコンポーネントに切り出す

  - コンポーネントはネストすることが可能

- リストを絞り込む/ソートする
  - リストを絞り込む filter メソッド
- リストをソートする sort メソッド

```
list.sort((m, n) => statements)
```

- list:元の配列
- 比較する要素
- 比較ルール

```
//example
list.sort((item1, item2) => item1.price - item2.price);
// →priceの昇順で整列
list.sort((item1, item2) => item2.price - item1.price);
// →priceの降順で整列
```

### 3-2-2.式の真偽に応じて表示を切り替える - 条件分岐

- if 文
- 即時間数

```
export default function ForItem({ book }) {
  return (
    <>
      <dt>
        <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
          {book.title} {book.price}円
        </a>
      </dt>
      {(() => {
        if (book.download) {
          return <dd>{book.summary}<Download isbn={book.isbn} /></dd>
        } else {
          return <dd>{book.summary</dd>
        }
      }})()} //()より即時実行される
    </>
  )
}
```

- `?:` `&&` 演算子


### 3-3.Props/State の理解を深める
#### 3-3-1 コンポーネントは以下のコンテンツをテンプレートに反映させる
#### 3-3-2 複数のchildrenを引き渡す
- propsを利用する
- childrenから目的の要素を取り出す
#### 3-3-3 childrenに対してパラメーターを引き渡す
- props.childrenプロパティが表すコンテンツは、あくまで呼び出し元のスコープなので、コンポーネント配下の情報にアクセスすることはできない。
- 呼び出し元配下のテンプレートを「テンプレートを返す関数」化することで呼び出し元から呼び出し先の処理を実行

```
export default function ListTemplsate({ src, children }) {
  return (
    <dl>
      {src.map(elem => (
        <React.Fragment key={elem.isbn}>
          {children(elem)}
        </React.Fragment>
      ))}
    </dl>
  )
}
```

```
...

root.render(
  <ListTemplate src={books}>
    {elem => (
      <>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
            {elem.title} {elem.price}円
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </>
    )}
  </ListTemplate>
)
```
#### 3-3-4 プロパティ型の検証
#### 3-3-5 State値更新のための2つの構文
- Stateに新しい値が反映するのはイベントハンドラーを終えた後
#### 3-3-6 子コンポーネントから親コンポーネントへの情報伝達
- 親コンポーネントでStateを更新する処理を実装し、子コンポーネントでは任意のタイミングで親コンポーネントの処理を呼び出すようにすることで親コンポーネントで集中的に管理を行うことができる。

### 3-4.より高度なイベント処理
#### 3-4-1 Reactで利用できるイベント
- マウスの出入りに応じて画像を入れ替える
- mouseenter/mouseleave/mouseover/mouseoutの相違点
- 画像が読み込めない場合にダミー画像を表示する
    - ```onError``` を用いて<img>要素で指定の賀ぞオウガ正しく読み込めなかった場合に大体の画像を表示する
#### 3-4-2 イベントオブジェクト
- **イベントオブジェクト**：イベントに関わる情報を管理するためのオブジェクト。イベントに関する情報(発生したイベントの種類や発生元など)にアクセスしたり、イベントハンドラーの挙動を操作することが可能となる。
    - SyntheticEventのメンバー
        - target: イベントの発生元(要素)
        - currentTarget: イベントハンドラーが登録されている要素
        - key: 押下されたキー
        などなど

- イベント発生時のマウス情報を取得したい
- キーイベントでのキーを識別する
- イベントハンドラーに任意の引数を渡す
   - onEvent属性に渡すのは、**関数呼び出しではなく**関数そのものでなくてはいけない。
- 独自データ属性を利用する
   - **独自データ属性**:任意タグにdata-xxxxxの形式で指定できる属性
      - 小文字の英数字
      - ハイフン(-)
      - ドット(.)
      - コロン(:)
   - ```e.target.dataset.名前```でアクセス
   - 手法の使い分け
   - 実行時に引数の値が変更するとき
   ```onXXXX={e => handleXXXX(e, variable)}```
   - あらかじめ引数の値が決まるとき
   ```onXXXX={handleXXXX}```
#### 3-4-3 イベントの伝播を抑制する
- イベントが目的要素に達するまでの過程
    - **キャプチャフェーズ**：最上位のwindowsオブジェクトから下位の要素にイベントを伝播するフェーズ→
    - **ターゲットフェーズ**：イベント発生元の要素を特定するフェーズ→
    - **バブリングフェーズ**：イベント発生元から上位の要素に向かってイベントが伝播していくフェーズ→終了
    **⇒イベント処理はイベントの発生元だけで実行されるわけではない。**
- 処理の順序を変更する
   - **onXXXCapture**属性を設定する