import StateCount from "./StateCounter";
import { useState } from 'react';

export default function StateParent() {
    //カウンタ合計を表すcountを初期化
    const [count, setCount] = useState(0);
    //State値(count)を更新するためのupdate関数を準備
    const update = step => setCount(c => c + step);
    return (
        <>
            {/* update関数をStateCounterコンポーネントに引き渡す */}
            <p>総カウント：{count}</p>
            <StateCount step={1} onUpdate={update} />
            <StateCount step={2} onUpdate={update} />
            <StateCount step={3} onUpdate={update} />
        </>
    )
}