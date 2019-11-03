const { runIfMain } = require("../assets/utils");

/**
 * @param  {string} startDate - date given in format YYYY-MM-DD
 * @param  {string} endDate - date given in format YYYY-MM-DD
 * @returns {string} - a random date between startDate and endDate in format YYYY-MM-DD
 */
function randomDateInRange(startDate, endDate) {
  // TODO: implement
}

runIfMain(module, function() {
  console.log(randomDateInRange("2019-01-01", "2019-01-01"));
  console.log(randomDateInRange("2010-01-01", "2010-02-01"));
  console.log(randomDateInRange("2019-01-01", "2010-01-01"));
  console.log(randomDateInRange("01-01", "2010-01-01"));
});

module.exports = {
  randomDateInRange
};
