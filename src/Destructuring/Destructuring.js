const cow = {
  name: "Bob 🐮",
  legs: 4,
  fur: true,
  type: "Mamal",
  meal_per_day: 100,
  diet: "grass",
};

// old way to concat
console.log(cow.name + " " + cow.meal_per_day + " kilos of " + cow.diet);

// New interpolation syntax
console.log(`${cow.name}  ${cow.meal_per_day}  kilos of ${cow.diet}`);

// object destructuring interpolation
const feed = (cow) => {
  return `${cow.name} ${cow.meal_per_day} kilos of ${cow.diet}`;
};

const feed = ({ name, meal_per_day, diet }) => {
  return `${name} ${meal_per_day} kilos of ${diet}`;
};

const feed = (cow) => {
  const { name, meal_per_day, diet } = cow;
  return `${name} ${meal_per_day} kilos of ${diet}`;
};
