// 1-3-1変数の宣言
//リスト1-3-1
if (true) {
    let x = 13;
}
console.log(x) //ReferenceError: x is not defined

//同名の変数を監視する
let msg = 'Hello!';
// let msg = 'Good Bye!';
console.log(msg); //Identifier 'msg' has already been declared

//リスト1-3-2
const author = 'YAMADA.Yoshihiro';
author = 'WINGS Project'
//エラー

//Constは定数で変更できないわけではなく、再代入が不可