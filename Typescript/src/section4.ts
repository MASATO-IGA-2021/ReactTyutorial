// type UserInfo = {
//   height: number;
//   weight: number;
// };

// function range(min: number, max: number): number[] {
//   const result: number[] = [];
//   for (let num = min; num <= max; num++) {
//     result.push(num);
//   }
//   return result;
// }

// console.log(range(5, 10));

// const calcBMI = function (height: number, weight: number): number {
//   return weight / height ** 2;
// };
// console.log(calcBMI(1.71, 60));

// const idealStyle: UserInfo = { height: 1.72, weight: 56 };

// const calcBMI2 = ({ height, weight }: UserInfo): number => {
//   return weight / height ** 2;
// };

// console.log(calcBMI2(idealStyle));

// const calcBMI3 = ({ height, weight }: UserInfo): number => weight / height ** 2;

// type ReturnObj = {
//   bmi: number;
// };

// const calcBMI4 = ({ height, weight }: UserInfo): ReturnObj => ({
//   bmi: weight / height ** 2,
// });

// console.log(calcBMI4(idealStyle));

// const obj4 = {
//   double(num: number): number {
//     return num * 2;
//   },
//   double2: (num: number): number => num * 2,
// };

// const sum = (...nums: number[]): number => {
//   let answer: number = 0;
//   for (const num of nums) {
//     answer += num;
//   }
//   return answer;
// };
// console.log(sum(1, 4, 2, 5, 7, 2, 6, 89, 3, 2));

// const numbers = [1, 2, 3, 4, 5];
// console.log(sum(...numbers));

// type UserInfo2 = { name: string; age: number };
// const getName = (u: UserInfo2): string => u.name;
// const userInfos: UserInfo2[] = [
//   { name: "john", age: 20 },
//   { name: "michel", age: 21 },
//   { name: "smith", age: 22 },
// ];

// const names = userInfos.map(getName);
// console.log(names);

// const names1 = userInfos.map((user: UserInfo2) => user.name);
// console.log(names1);

// type F = (repeatNum: number) => string;
// const xRepeat2: F = (num: number): string => "x".repeat(num);

// const xRepeat = (num: number) => "x".repeat(num);
// console.log(xRepeat(34));

// type MyFunc = {
//   isUsed?: boolean;
//   (arg: number): void;
// };

// const double3: MyFunc = (arg: number) => {
//   console.log(arg * 2);
// };

// double3.isUsed = true;
// console.log(double3.isUsed);
// double3(1000);

// type HasName = {
//   name: string;
// }

// type HasNameAndAge = {
//   name: string;
//   age: number;
// }

// const fromAge = (age: number): HasNameAndAge => ({
//   name: 'paul smith',
//   age
// });

// const f: (age: number) => HasName = fromAge;
// const fObj: HasName = f(100);

// console.log(fObj);

// const showName = (obj: HasName) => console.log(obj.name);
// const g: (obj: HasNameAndAge) => void = showName;

// g({name: 'uhyo', age: 26});

// function repeat<T>(element: T, length: number): T[] {
//   const result:T[] = [];
//   for (let i = 0;i < length; i++ ) {
//     result.push(element);
//   }
//   return result;
// }
// console.log(repeat<string>('a', 5));
// console.log(repeat<number>(6, 5));

// const utils = {
//   repeat2<T> (element: T, length: number): T[]{
//     const result: T[] = []
//     return result;
//   }
// }
const getFizzBuzzString = (num: number): string => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return String(num);
  }
};

for (let i = 1; i <= 100; i++) {
  const message = getFizzBuzzString(i);
  console.log(message);
}

function map<T,U>(array: T[], callback: (num: T) => U): U[] {
  const answer: U[] = [];
  for (const item of array) {
    const answerItem = callback(item);
    answer.push(answerItem);
  }
  return answer;
}

const data1 = [1, 1, 2, 3, 5, 8, 13];
const result = map(data1, (x) => x * 10);
console.log(result);


const data2 = [1, -3, -2, 8, 0, -1];
const result2 = map(data2, (x) => x >= 0);
console.log(result2);