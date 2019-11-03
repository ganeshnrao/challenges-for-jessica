const names = require("../assets/names.json");
const { runIfMain } = require("../assets/utils");

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
