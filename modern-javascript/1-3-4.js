//引数の既定値構文、可変長引数など
//1-3-13
function getTrapezoidArea(upper = 1, lower = 1, height = 1) {
  return ((upper + lower) * height) / 2;
}
console.log(getTrapezoidArea(10, 5, 3));
console.log(getTrapezoidArea(10, 5));
console.log(getTrapezoidArea(10));
console.log(getTrapezoidArea());

//1-3-14
function sum (...nums){
    let result = 0;
    for (const num of nums) {
        result += num;
    };
    return result;
}
console.log(sum(10, 25, 2))
console.log(sum(7, 13, 25, 6, 100))
console.log(sum([10, 25, 2]));
console.log(sum(...[10, 25, 2]));