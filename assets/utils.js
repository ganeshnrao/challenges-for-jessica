function logWithSerialNumbers(array) {
  if (array && array.length) {
    const slNumberLength = String(array.length).length;
    array.forEach(function(name, i) {
      const slNumber = String(i + 1).padStart(slNumberLength, "0");
      console.log(`${slNumber}. ${name}`);
    });
  } else {
    console.error(`{ No items given }`);
  }
}

function runIfMain(module, fn) {
  if (require.main === module) {
    fn();
  }
}

module.exports = {
  logWithSerialNumbers,
  runIfMain
};
