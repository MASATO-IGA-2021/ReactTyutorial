import { useRef } from "react";

export default function StateFormUC() {
  //React要素参照を準備
  const name = useRef(null);
  const age = useRef(null);
  //要素(参照)経由で入力値を準備
  const show = () => {
    console.log(`こんにちは、${name.current.value}さん。${age.current.value}歳`);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input
          type="text"
          name="name"
          id="name"
          ref={name}
          defaultValue="五十嵐真人"
        />
      </div>
      <div>
        <label htmlFor="age">年齢：</label>
        <input type="number" name="age" id="age" ref={age} defaultValue={20} />
      </div>
      <div>
        <button type="button" onClick={show}>送信</button>
      </div>
    </form>
  );
}
