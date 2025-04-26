function sleep (delay) {
    let start = 0;
    while(Date.now() - start < delay);
}

export default function HeavyUI ({delay}) {
    sleep(delay);
    return <p>遅延時間{delay}ミリ秒</p>
}