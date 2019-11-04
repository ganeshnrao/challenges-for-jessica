function getString(input) {
  console.log(input);
}

getString(4);

getString("bean");

let animals = ["bunny", "rat", "bird", "cat"];
let objects = ["rope", "ball"];
function getThing(array, name) {
  for (let i = 0; i < array.length; i++) {
    console.log(name, array[i]);
  }
}
getThing(animals, "Animal");
getThing(objects, "Object");
