// map, filter, find, smart way to run for loop////////////

const numbers = [2, 3, 4, 5, 6, 7];
// const output =[];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result= element*element; // [i ] er valuek element*element multiply kora 
//     output.push(result); //output result er value k push kora hoyece

// }
// console.log(output);

// function sqare (Element){
//     return Element*Element;
// }

// const result= numbers.map(function(Element){
//     return Element*Element;
// })

//the different way to write the functions
// const result = numbers.map(x => x*x);

// console.log(result);

///this is filtering method

// const bigger = numbers.filter(x => x < 5);
// const bigger = numbers.filter(x => x > 5);
// console.log(bigger);

// finder
const bigger = numbers.filter(x => x > 5);

const isThere = numbers.find(x => x > 5);
console.log(isThere);

