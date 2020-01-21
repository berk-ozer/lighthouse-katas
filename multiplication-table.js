const multiplicationTable = function(maxValue) {
  let output = '';

  for (let i = 1; i <= maxValue; i++) {

    for (let j = 0; j < maxValue; j++) {
      output += i + (j * i) + ' ';
    }

    output += '\n';
  }

  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));