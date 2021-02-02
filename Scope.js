// / Scope, block scope, access outer scope variable

let bonus = 20; ///this called global bcz it is not in functions inside. it may can call from anywhere

function sum (first, second){
    let result = first + second +bonus;
    console.log(bonus);
    return result;
}
const output = sum(3,7);
console.log(bonus);
console.log(output);