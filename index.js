// Code your solution in this file.

// function lowerCaseDrivers(drivers) {
//   var lowerCaseDrivers = [];
//   for (let i = 0; i < drivers.length; i++) {
//     lowerCaseDrivers.push(drivers[i].toLowerCase());
//   };
//   return lowerCaseDrivers;
// };

function lowerCaseDrivers(drivers) {
  return drivers.map(x => x.toLowerCase());
};

function nameToAttributes(fullNames) {
  var arr = [];
  fullNames.map(x => arr.push(splitMeh(x)));
  return arr;
};

function splitMeh(fullName) {
  var obj = {};
  obj["firstName"] = fullName.split(" ")[0]
  obj["lastName"] = fullName.split(" ")[1]
  return obj;
}

function attributesToPhrase(drivers) {
  return drivers.map(x => `${x.name} is from ${x.hometown}`)
}
