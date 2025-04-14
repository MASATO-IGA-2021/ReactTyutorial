//Optional Chaining演算子(?.)
//1-3-16
const str = null;
//console.log(str.substring(1));//Cannoot read properties of null (reading 'substring)

//null/undefnedの判定
if (str !== null && str !== undefined) {
  console.log(str.substring(1));
}

const str1 = 'aiu';
console.log(str1?.substring(1));


//Null合体演算子
let value = null;
console.log(value ?? '既定値')//式 ?? 既定値:式がnull or undefinedのとき、既定値になる

value ??= '既定値'
console.log(value);