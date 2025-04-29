// type FooBar = {
//     foo: string;
//     bar: number;
// }

// type FooBarBaz = {
//     foo: string;
//     bar: number;
//     baz: boolean;
// }

// const obj: FooBarBaz = {
//     foo: 'Hello World',
//     bar: 123456789,
//     baz: true
// }
// const obj2:FooBar = obj;

// //分割代入
// const nested = {
//     num: 123,
//     obj3: {
//         foo: 'hello',
//         bar: 'world'
//     }
// }
// const { num, obj3:{foo} } = nested;
// console.log(num, foo);

// const arr = [1,2,4,8,16,32,64,128,256,512,1024];
// const [first, second, third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);

//3-8-1
type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;
const users: User[] = [];

const arrayData: string[] = data.split("\n");

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
  } else {
    console.log(`${user.name} ${user.age}はプレミアムユーザーではありません。`);
  }
}
