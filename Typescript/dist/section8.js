"use strict";
// setTimeout(() => console.log("タイマーが呼び出されました"), 100);
// const startTime = performance.now();
// let countLoop = 0;
// while (performance.now() - startTime < 1000) {
//   countLoop++;
// }
// console.log(countLoop);
// import { readFile } from "fs/promises";
// const p = readFile("foo.txt", "utf8");
// p.then((data) => {
//   console.log(data);
// });
// const p1 = readFile("foo.txt", "utf8");
// p1.then((result) => {
//   console.log("No.1", result);
// });
// p1.catch((error: unknown) => {
//   console.log("失敗", error);
// });
// const p2 = readFile("foo.txt", "utf8");
// p2.then((result) => {
//   console.log("No.1", result);
// });
// p2.catch((error: unknown) => {
//   console.log("失敗", error);
// });
// p2.finally(() => {
//   console.log("終了");
// });
// const sleepReject = (duration: number) => {
//   return new Promise<never>((resolve, reject) => {
//     setTimeout(reject, duration);
//   });
// };
// const p3 = Promise.allSettled([readFile("foo.txt", "utf8"), sleepReject(5000)]);
// p3.then(
//   (result) => {
//     console.log("成功", result);
//   },
//   (error: unknown) => {
//     console.log("失敗", error);
//   }
// );
// const p4 = readFile("foo.txt", "utf8");
// p4.then(() => sleepReject(1000))
//   .then((result3) => console.log(result3))
//   .catch((error) => console.log(error));
// async function get3(): Promise<number> {
//   console.log("get3が呼び出されました");
//   return 3;
// }
// const p5 = get3()
//   .then((result) => console.log("num is ", result))
//   .catch((error) => console.log("num is not 3", error));
// console.log("get3を呼び出します");
// const p6 = get3();
// p6.then((num) => {
//   console.log(`num is ${num}`);
// });
// console.log("get3を呼び出しました");
// const sleep = (duration: number) => {
//   return new Promise<void>((resolve) => {
//     setTimeout(resolve, duration);
//   });
// };
// async function get4() {
//   console.log("get4が呼び出されました");
//   await sleep(2000);
//   console.log("awaitの次に進みました");
//   return 4;
// }
// console.log("get4を呼び出します");
// const p7 = get4();
// p7.then((num) => console.log(`num is ${num}`));
// console.log("get4を呼び出しました");
// async function main() {
//   const num1 = await get4();
//   const num2 = await get4();
//   const num3 = await get4();
//   return num1 + num2 + num3;
// }
// main().then((result) => {
//   console.log(`result is ${result}`);
// });
async function main() {
    console.log("main()が処理を開始しました");
    const { readFile, writeFile } = await import("fs/promises");
    const fooContent = await readFile("foo.txt", "utf8");
    await writeFile("bar.txt", fooContent + fooContent);
    console.log("書き込みました");
}
main().then(() => {
    console.log("main()が完了しました");
});
async function main2() {
    console.log("main2()が処理を開始しました");
    try {
        const { readFile, writeFile } = await import("fs/promises");
        const fooContent = await readFile("foo.txt", "utf8");
        await writeFile("bar.txt", fooContent + fooContent + fooContent);
        console.log("成功");
    }
    catch {
        console.log("失敗時の例外処理");
    }
}
main2().then(() => console.log("main2()が成功しました"));
