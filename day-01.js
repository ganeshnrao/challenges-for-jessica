// node day-01.js - should output ten random names as shown below.
// 01. Pamela Clements
// 02. Alan Hurst
// 03. Joe Reilly
// 04. Stephanie Bentley
// 05. Wayne Booker
// 06. Carol Tate
// 07. Jeremy Houston
// 08. Jack Lucas
// 09. Linda Riggs
// 10. Arthur Frost

const names = require("./assets/names.json");

/**
 * @param  {string[]} firstNames - array of strings of first names
 * @param  {string[]} lastNames - array of strings of last names
 * @returns {string} - a random generated full name, e.g. Alan Hurst, Wayne Booker etc.
 */
function generateOneFullName(firstNames, lastNames) {
  // TODO: Implement
}

/**
 * @param  {number} count - number of names to generate
 * @param  {string[]} firstNames - array of strings of first names
 * @param  {string[]} lastNames - array of strings of last names
 * @returns {string[]} - array of random full names as strings
 */
function generateFullNames(count, firstNames, lastNames) {
  // TODO: Implement
  return [];
}

/**
 * @param  {string[]} fullNames - array of strings of full names
 * @description logs the given full names with serial numbers prefixes
 */
function logWithSerialNumbers(fullNames) {
  if (fullNames && fullNames.length) {
    const slNumberLength = String(fullNames.length).length;
    fullNames.forEach(function(name, i) {
      const slNumber = String(i + 1).padStart(slNumberLength, "0");
      console.log(`${slNumber}. ${name}`);
    });
  } else {
    console.error(`{ No names given }`);
  }
}

if (require.main === module) {
  const fullNames = generateFullNames(10, names.first, names.last);
  logWithSerialNumbers(fullNames);
}

module.exports = {
  generateOneFullName,
  generateFullNames,
  logWithSerialNumbers
};
