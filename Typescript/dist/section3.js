"use strict";
// type FooBar = {
//     foo: string;
//     bar: number;
// }
const data = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;
const users = [];
const arrayData = data.split("\n");
for (const dataItem of arrayData) {
    if (dataItem === "") {
        continue;
    }
    const [name, age, premiumUser] = dataItem.split(",");
    users.push({
        name,
        age: Number(age),
        premiumUser: Boolean(premiumUser),
    });
}
for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} ${user.age}はプレミアムユーザーです。`);
    }
    else {
        console.log(`${user.name} ${user.age}はプレミアムユーザーではありません。`);
    }
}
