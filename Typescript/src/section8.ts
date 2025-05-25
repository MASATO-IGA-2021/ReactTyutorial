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

const p1 = readFile("foo.txt", "utf8");
p1.then((result) => {
  console.log("No.1", result);
});
p1.catch((error: unknown) => {
  console.log("失敗", error);
});

const p2 = readFile("foo.txt", "utf8");
p2.then((result) => {
  console.log("No.1", result);
});
p2.catch((error: unknown) => {
  console.log("失敗", error);
});
p2.finally(() => {
  console.log("終了");
});

const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  });
};

const p3 = Promise.allSettled([readFile("foo.txt", "utf8"), sleepReject(5000)]);

p3.then(
  (result) => {
    console.log("成功", result);
  },
  (error: unknown) => {
    console.log("失敗", error);
  }
);
