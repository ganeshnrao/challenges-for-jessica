const names = require("../assets/names.json");
const { runIfMain } = require("../assets/utils");

// function sample(array) {
//   let item = Math.floor(array.length * Math.random());
//   return sample;
// }

/**
 * @param  {string[]} firstNames - array of strings of first names
 * @param  {string[]} lastNames - array of strings of last names
 * @returns {string} - a random generated full name, e.g. Alan Hurst, Wayne Booker etc.
 */

function generateFullName(firstNames, lastNames) {
  let fName = Math.floor(Math.random() * firstNames.length);
  let lName = Math.floor(Math.random() * lastNames.length);

  if (firstNames[fName] === lastNames[lName]) {
    lName = Math.floor(Math.random() * lastNames.length);
  }

  let fullName = `${firstNames[fName]} ${lastNames[lName]}`;
  return fullName;
}

runIfMain(module, function() {
  console.log(generateFullName(names.first, names.last));
  console.log(generateFullName(names.first, names.last));
  console.log(generateFullName(names.first, names.last));
  console.log(generateFullName(names.first, names.last));
  console.log(generateFullName(names.first, names.last));
});

module.exports = {
  generateFullName
};

//fizzbuzz

function fizzbuzz(count) {
  for (let i = 0; i < count; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzbuzz(20);
