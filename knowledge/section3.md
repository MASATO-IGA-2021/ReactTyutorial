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
   - リストを絞り込むfilterメソッド
   

### 3-3.Props/State の理解を深める

### 3-4.より高度なイベント処理
