const sumLargestNumbers = function(numArr) {
  numArr.sort((a, b) => b - a) 
  return numArr[0] + numArr[1];
};

//alternative solution without using sort method

// const sumLargestNumbers = function(numArr) {
//   let num1 = -Infinity;
//   let num2 = -Infinity;
  
//   for (let num of numArr) {
//     if (num > num1) {
//       num2 = num1;
//       num1 = num;
//     }
//   }

//   return num1 + num2;

// }

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));