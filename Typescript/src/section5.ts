// class UserClass {
//   name: string = "";
//   age: number = 0;

//   isAdult(): boolean {
//     return this.age >= 20;
//   }
//   setName(newName: string): void {
//     this.name = newName;
//   }

//   setAge(newAge: number): void {
//     this.age = newAge;
//   }
// }

// const user1 = new UserClass();
// console.log(user1);
// user1.setName("Mark Gonzales");
// console.log(user1);
// console.log(user1.isAdult());
// user1.setAge(24);
// console.log(user1.isAdult());

// class UserClass1 {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   isAdult(): boolean {
//     return this.age >= 20;
//   }
// }
// const sampleUser = new UserClass1("五十嵐真人", 24);
// console.log(sampleUser);

// class UserClass2 {
//   static adminName: string = "uhyo";
//   static getAdminUser() {
//     return new UserClass2(UserClass2.adminName, 25);
//   }
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   isAdult(): boolean {
//     return this.age >= 20;
//   }
// }

// class User3 {
//   name: string = "";
//   age: number = 0;
//   isAdult(): boolean {
//     return this.age >= 20;
//   }
// }

// const john: User3 = {
//   name: "john",
//   age: 15,
//   isAdult: () => true,
// };

// console.log(john);

// class User4 {
//   name: string;
//   private age: number;
//   private _isAdult: boolean;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     this._isAdult = age >= 20;
//   }

//   isAdult(): boolean {
//     return this._isAdult;
//   }
// }

// const throwError = (): void => {
//   const error = new Error("これは新規エラーです");
//   throw error;
// };

// try {
//   console.log("エラーを発生させます");
//   throwError();
//   console.log("エラーが発生しました");
// } catch (error) {
//   console.log("エラーをキャッチしました");
//   console.log(error);
// }
// console.log("終了");

class UserClass {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }
  getMessage(message: string):string {
    return `${this.name} (${this.#age}) ${message}`;
  }
}
