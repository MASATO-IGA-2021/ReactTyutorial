//分割代入
//配列の場合
//1-3-8
const list = [10, 20, 30];
const [x, y, z] = list;
console.log(x, y, z);//10 20 30

const [a,b] = list;
console.log(a, b);//10 20

const [l, m, n, o] = list;
console.log(l, m, n, o)//10, 20, 30, undefined

const [one, ...rest] = list;
console.log(one, rest); //10, [20, 30]

//1-3-10
const member = {
    fullname: '佐藤理央',
    sex: '女性',
    age: 18
}
const {fullname, sex, memo='---'} = member
console.log(fullname, sex, memo);//佐藤理央 女性 ---

const {sex: gender} = member //:~~で別名を付けることができる
console.log(gender);// 女性

const { fullname1, ...rest1 } = member;
console.log(fullname1, rest1);

//1-3-11
const member3 = {
    fullname: '佐藤理央',
    address:{
        prefecture: '静岡県',
        city: '藤枝市',
    }
};
    const { address, address:{city} } = member3
console.log(address);
console.log(city);

//1-3-12
const list1 = [200, [300, 301, 302]];
const [x1, [y1, y2, y3]] = list1;
console.log(y1, y2, y3);

let fullname2, sex2, memo2;
({fullname2, sex2, memo2 = '----'} = member3);