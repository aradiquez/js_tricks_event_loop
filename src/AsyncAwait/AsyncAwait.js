// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

const random = () => {
  return Promise.resolve(Math.random());
};

// old promise

const sumValues = () => {
  let first;
  let second;
  let third;

  return random()
    .then((result) => {
      first = result;
      return random();
    })
    .then((result) => {
      second = result;
      return random();
    })
    .then((result) => {
      third = result;
      return [first, second, third];
    });
};

sumValues().then((result) => console.log(result));

// async - await syntax sugar

const sumAsyncValues = async () => {
  const first = await random();
  const second = await random();
  const third = await random();

  return [first, second, third];
};

await sumAsyncValues();

// promise array

const randomList = await Promise.all([random(), random(), random()]);

const values = randomList.map((number) => number);

// Basic

let tick = Date.now();
let log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const getFruit = async (name) => {
  const fruits = {
    pineapple: "🍍",
    peach: "🍑",
    strawberry: "🍓",
  };

  return fruits[name];
};

log(await getFruit("peach"));

// Async + Await

let tick = Date.now();
let log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const makeSmoothie = async () => {
  const a = await getFruit("pineapple");
  const b = await getFruit("strawberry");

  return [a, b];
};

makeSmoothie().then(log);

// old way of using promises, more code, not very readable

let tick = Date.now();
let log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const makeSmoothie2 = () => {
  let a;
  return getFruit("pineapple")
    .then((v) => {
      a = v;
      return getFruit("strawberry");
    })
    .then((v) => [a, v]);
};

makeSmoothie2().then(log);

// throwin an error in promise

let tick = Date.now();
let log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const badSmoothie = async () => {
  try {
    const a = getFruit("pineapple");
    const b = getFruit("strawberry");
    const smoothie = await Promise.all([a, b]);

    throw "broken!";

    return smoothie;
  } catch (err) {
    log(err);
    // return `😬 We are going to be fine...`
    throw `💩 It's broken!`;
  }
};

badSmoothie().then(log);

// Event loop

// https://www.youtube.com/watch?v=cCOL7MC4Pl0

console.log(" 🌵 Synchronous 1");

setTimeout((_) => console.log(" 🌪 Timeout 2"), 0);

Promise.resolve().then((_) => console.log(" 🥦 Delicious promise 3"));

console.log(" 🍺 Final Promise");

// Solving promises

const url = "https://jsonplaceholder.typicode.com/posts/1";

const withThenPromise = () => {
  const promise = fetch(url);

  return promise
    .then((response) => response.json())
    .then((response) => console.log("🤺", response.title));
};

withThenPromise();

console.log(" 🥬 Synchronous lettuce");

// Logging errors

const withThenErrors = () => {
  const promise = fetch(url);

  return promise
    .then((response) => response.json())
    .then((response) => {
      throw new Error(" Everyone escape!!");
    })
    .then((response) => console.log("🤺", response.title))
    .catch((error) => console.error(error));
};

withThenErrors();

console.log(" 🌶 Synchronous chilli");

// Elapsed time

let tick = Date.now();
let log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

// Normal while loop threat blocking

let normalCodeBlocker = () => {
  let i = 0;
  while (i < 1000000) {
    i++;
  }

  return " 👟 finish running a marathon million times";
};

log(" 🦷 Synchronous tooth first ");

log(normalCodeBlocker());

log(" 🦷 Synchronous tooth last");

// Using a promise to unblock the execution

let tick = Date.now();
let log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

let promiseCodeBlocker = () => {
  return new Promise((resolve, reject) => {
    let i = 0;
    while (i < 1000000) {
      i++;
    }

    resolve(" 👟 finish running a marathon million times");
  });
};

log(" 🦷 Synchronous tooth first ");

promiseCodeBlocker().then(log);

log(" 🦷 Synchronous tooth last");

// Using a promise to try to unblock the execution

let tick = Date.now();
let log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

let promiseCodeBlocker = () => {
  return new Promise((resolve, reject) => {
    let i = 0;
    while (i < 1000000) {
      i++;
    }

    resolve(" 👟 finish running a marathon million times");
  });
};

log(" 🦷 Synchronous tooth first ");

promiseCodeBlocker().then(log);

log(" 🦷 Synchronous tooth last");

// Using a promise to succede on unblock the execution

let tick = Date.now();
let log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

let promiseCodeBlocker = () => {
  return Promise.resolve().then((result) => {
    let i = 0;
    while (i < 1000000) {
      i++;
    }
    return " 👟 finish running a marathon million times";
  });
};

log(" 🦷 Synchronous tooth first ");

promiseCodeBlocker().then(log);

log(" 🦷 Synchronous tooth last");
