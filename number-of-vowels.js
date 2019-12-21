let numberOfVowels = function(string) {
  return string.match(/[aeiou]/g).length;
};

// alternative solution without using match or regex

// let numberOfVowels = function(string) {
//   let count = 0;

//   for (let i = 0; i < string.length; i++) {
//     switch (string[i]) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         count++;
//     }
//   }

//   return count;
// }

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));