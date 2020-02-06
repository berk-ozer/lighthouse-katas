const instructorWithLongestName = function(instructors) {
  let longestName = instructors[0];

  for (let person of instructors) {
    if (person.name.length > longestName.name.length) {
      longestName = person;
    }
  }

  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));