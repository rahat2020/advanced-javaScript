
//Array slice, splice, array join elements

//The slice() method returns the selected elements in an array, as a new array object.The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

// Note: The original array will not be changed 

// const nums = [1,2,3,4,5,6,7];
// const part = nums.slice(2,5);
// console.log(part);
// console.log(nums);


// The splice() method adds/removes items to/from an array, and returns the removed item(s).

// Note: This method changes the original array.
const nums = [1,2,3,4,5,6,7];
// const part = nums.slice(2,5);
const removed = nums.splice(2,3);
console.log(removed);
console.log(nums);