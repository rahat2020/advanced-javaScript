const numbers = [2,3,4,5,6,7];
const output =[];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result= element*element; // [i ] er valuek element*element multiply kora 
    output.push(result); //output result er value k push kora hoyece
    
}
console.log(output);