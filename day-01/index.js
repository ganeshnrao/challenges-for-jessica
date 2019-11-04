const names = require("../assets/names.json");
const { runIfMain } = require("../assets/utils");

function getFirstName(firstName) {
  let fName = Math.floor(Math.random() * firstName.length);
  //console.log(Math.floor(Math.random() * firstName.length));
  //console.log(`first name : ${fName}`);
  //console.log(`first name is... ${names.first[fName]}`);
  return fName;
}

function getLastName(lastName) {
  let lName = Math.floor(Math.random() * lastName.length);
  //console.log(Math.floor(Math.random() * lastName.length));
  //console.log(`last name: ${lName}`);
  //console.log(`last name is... ${names.last[lName]}`);
  return lName;
}

function noRepeats(firstName, lastName) {
  let fName = getFirstName(firstName);
  let lName = getLastName(lastName);

  if (fName !== lName) {
    //console.log(`Testing... ${names.first[fName]} ${names.last[lName]}`);
  } else {
    lName = getLastName(lastName);
  }
  //console.log(`${names.first[fName]} ${names.last[lName]}`);
  return `${names.first[fName]} ${names.last[lName]}`;
}

/**
 * @param  {string[]} firstNames - array of strings of first names
 * @param  {string[]} lastNames - array of strings of last names
 * @returns {string} - a random generated full name, e.g. Alan Hurst, Wayne Booker etc.
 */
function generateFullName(firstNames, lastNames) {
  let fullName = noRepeats(firstNames, lastNames);
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
