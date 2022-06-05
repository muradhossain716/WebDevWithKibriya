console.log(a)//reference errpr
console.log(sum(2,3))
//variable/function expression/arrow funciton declared with let/const can't be hoisted
let a=3;
//varibale declard with var is hoisted but value is undefined
console.log(x)//undefiend
var x=10;
//function declaration is hoisted
function sum(a,b) {return a+b}