/**
 * Generate random full names
 *
 * You are given an array of 200 most common first names and another array of
 * 1000 most common last names. Your task is to implement a function called
 * "generateFullName" which takes those two arrays as inputs and generates a
 * random full name.
 *
 * Note that there some names that might appear in both the first names array
 * and last names array, so take care to avoid names where the first and last
 * names are the same, e.g. "James James", "Michael Michael" should be avoided.
 */

const names = require("./assets/names.json");
const { runIfMain } = require("./assets/utils");

/**
 * @param  {string[]} firstNames - array of strings of first names
 * @param  {string[]} lastNames - array of strings of last names
 * @returns {string} - a random generated full name, e.g. Alan Hurst, Wayne Booker etc.
 */
function generateFullName(firstNames, lastNames) {
  // TODO: Implement
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
