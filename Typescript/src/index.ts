const message: string = "Hello World";
console.log(message);

const nullValue: null = null;
const undefinedValue: undefined = undefined;

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("文字列を入力してください", (answer) => {
  const num: number = Number(answer)
  console.log(`${num} + 1000 = ${num+1000}`);
  rl.close();
});
