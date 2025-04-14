//1-3-2主なリテラル表現
//テンプレート文字列
//リスト1-3-3
const fullname = "Taro Suzuki";
const msg = `Hello, ${fullname} How are you today?`;
console.log(msg);

//数値セパレーター
//リスト1-3-4
const value = 123_456_789;
console.log(value);

//アロー関数
function circle(radius) {
  return radius ** 2 * Math.PI;
}
const circle0 = (radius0) => {
  return radius0 ** 2 * Math.PI;
};

const circle1 = (radius1) => radius1 ** 2 * Math.PI;

const circle2 = (radius2) => radius2 ** 2 * Math.PI;

const show = () => console.log("show");

//オブジェクトリテラルの簡易構文
//リスト1-3-5
const title = "速習React";
const price = 500;
const book = { title, price };
console.log(book); //{ title: '速習React', price: 500 }
const book1 = { title: title, price: price };
console.log(book1);

//1-3-6
const member = {
    name:'佐藤理央',
    greet: function() {
        console.log(`こんにちは${this.name}さん`)
    }
}
const member1 = {
    name:'佐藤理央',
    greet() {
        console.log(`こんにちは${this.name}さん`)
    }
}
//1-3-7
let i = 0
const member2 = {
    [`attr${i++}`]:'佐藤理央',
    [`attr${i++}`]:'女性',
    [`attr${i++}`]:'18歳'
}
console.log(member2)