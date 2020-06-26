const Jean = { name: "Jean", age: "26", hearColor: "brown" };
const JP = { name: "JPP", age: "36", hearColor: "black" };
const Dylan = { name: "Dylan", age: "24", hearColor: "brown" };

console.log(Jean);
console.log(JP);
console.log(Dylan);

// object deconstruction

console.log({ Jean, JP, Dylan });

// fancy console log

console.log("%c Team", "color: orange; font-weight: bold;");
console.log({ Jean, JP, Dylan });

// table logging

console.table([Jean, JP, Dylan]);

// time loggin
console.time("work");

let i = 0;
while (i < 100000) {
  i++;
}

console.timeEnd("work");

// time log

console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");

// Console count

let i = 0;
while (i < 10) {
  console.count();
  i++;
}

console.countReset();

// Stack trace

const catastroficDeleteFunction = () =>
  console.trace(
    `this is a catrastofic delete function that we don't want to run more than once`
  );

catastroficDeleteFunction();
catastroficDeleteFunction();

const Logger = (block) => {
  console.time("logger");
  console.log(block);
  console.timeEnd("logger");
};

export default Logger;
