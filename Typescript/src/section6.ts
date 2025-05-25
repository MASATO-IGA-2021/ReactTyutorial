// type Animal = {
//   species: string;
//   age: number;
// };

// type Human = Animal & {
//   name: string;
// };

// type UserType = Animal | Human;

// const tama: UserType = {
//   species: "Felis silvestris catus",
//   age: 3,
// };

// const uhyo: UserType = {
//   species: "Homo sapiens sapiens",
//   age: 25,
//   name: "uhyo",
// };
// console.log(uhyo.name);
// console.log(tama.species);

// type StringAndNumber = string & number;

// type Human1 = { name: string };
// type Animal1 = { species: string };
// function getName(human: Human1) {
//   return human.name;
// }
// function getSpecies(animal: Animal1) {
//   return animal.species;
// }

// const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;
// console.log(mysteryFunc);

// const newHuman: Human1 & Animal1 = {
//   name: "五十嵐",
//   species: "新人類",
// };
// console.log(mysteryFunc(newHuman));

// function getHelloStr(): `Hello ${string}!`{
//     const rand = Math.random();
//     if (rand < 0.3) {
//         return `Hello wao!`;
//     }else if(rand < 0.6) {
//         return `Hello world!`;
//     }else {
//         return `Hello World!`;
//     }
// } 
// console.log(getHelloStr())

// type SingleType = "plus" | "minus";
// function signNumber(type: SingleType):number {
//     return type === "plus"? 1 : -1
// }
// function numberWithSign(num: number, type: SingleType | "none"): number {
//     if (type === "none") {
//         return 0;
//     } else {
//         return num * signNumber(type);
//     }
// }
// console.log(numberWithSign(5, "plus"));
// console.log(numberWithSign(5, "minus"));
// console.log(numberWithSign(5, "none"));


// const mmConversionTable = {
//     mm: 1,
//     m: 1e3,
//     km: 1e6
// }

// function mmConvert(num: number, unit: keyof typeof mmConversionTable) {
//     const mmValue = num * mmConversionTable[unit];
//     return {
//         mm: mmValue,
//         m: mmValue / 1e3,
//         km: mmValue / 1e6
//     }
// }

// console.log(mmConvert(5600, "m"))
// console.log(mmConvert(6, "km"))

// function get<T, K extends keyof T>(obj: T, key: K) : T[K]{
//     return obj[key]
// }
// //Human = {name: string,age: number, species: string}
// const uhyo2: Human = {
//     name: "uhyo",
//     age: 26,
//     species: '人間'
// }
// console.log(get(uhyo2, "name"));

// type Human2 = {
//     tag: "human";
//     name: string;
// }

// type Animal2 = {
//     tag: "animal";
//     age: number;
//     species: string;
// }

// type User2 = Human2 | Animal2;
// function getNamesIfAllHuman(users: readonly User2[]): string[] | undefined {
//     if (users.every(user => user.tag === "human")) {
//         return (users as Human2[]).map(user => user.name);
//     }
//     return undefined;
// }

type Option<T> = {
    tag: "sample";
    value: T;
 } | {
    tag: "none"
}

function displayValue(option: Option<number>): void {
    if (option.tag !== "none") {
        console.log(option.value);
    }
}
