// import { createInterface } from "readline";

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("数値を入力してください", (answer) => {
//   const num: number = Number(answer);
//   const message: string =
//     num >= 0 && num <= 100
//       ? `${num}は0以上100以下`
//       : `${num}は0未満または100より大きい`;
//   console.log(message);
//   rl.close();
// });

//力試し --FizzBuzz--
const answer : string[] = []
for (let i = 1; i <= 100; i++) {
    if (!(i % 3 || i % 5)) answer.push('FizzBuzz');
    else if (!(i % 3)) answer.push('Fizz');
    else if (!(i % 5)) answer.push('Buzz');
    else answer.push(String(i));
}
console.log(...answer);