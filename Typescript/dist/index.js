const message = "Hello World";
console.log(message);
const nullValue = null;
const undefinedValue = undefined;
import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("文字列を入力してください", (answer) => {
    const num = Number(answer);
    console.log(`${num} + 1000 = ${num + 1000}`);
    rl.close();
});
