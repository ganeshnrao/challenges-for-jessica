const { runIfMain } = require("../assets/utils");

/**
 * @param  {number} [length] - optional argument specifying the desired length of identifier
 * @returns {string} - a unique hexadecimal string of the given length
 * @example generateId() should return strings like "87b8ce30e0b0fd6a", "6181c82de03ff57d" etc.
 */
function generateId(length) {
  // TODO: implement
}

runIfMain(module, function() {
  console.log(generateId(4));
  console.log(generateId(8));
  console.log(generateId());
  console.log(generateId(24));
  console.log(generateId(32));
});

module.exports = {
  generateId
};
