import { performance } from "perf_hooks";
setTimeout(() => console.log("タイマーが呼び出されました"), 100);
const startTime = performance.now();
let countLoop = 0;
while (performance.now() - startTime < 1000) {
    countLoop++;
}
console.log(countLoop);
import { readFile } from "fs/promises";
const p = readFile("foo.txt", "utf8");
p.then((data) => {
    console.log(data);
});
