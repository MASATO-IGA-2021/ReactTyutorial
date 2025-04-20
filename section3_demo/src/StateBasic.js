import { useState } from "react";

export default function StateBasic({init}) {
  //prop（init)でState（count）を初期化
  const [count, setCount] = useState(init);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button value={count} onClick={handleClick}>
        +
      </button>
      <p>{count}回クリックされました。</p>
    </div>
  );
}
