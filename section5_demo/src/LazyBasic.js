import { Suspense, lazy } from 'react';

// msミリ秒の遅延を発生させるsleep関数
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//LazyButtonを遅延ロード
const LazyButton = lazy(() => sleep(2000).then(() => import ('./reportWebVitals')));

export default function LazyBasic() {
    return (
        <Suspense fallback={<p>Now Loading...</p>}>
            <LazyButton />
        </Suspense>
    )
}