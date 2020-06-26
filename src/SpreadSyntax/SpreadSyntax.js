const pikachu = { name: "Pikachu 🐹" };
const stats = { hp: 40, attack: 60, defense: 45 };

// Mutating the original object 🙊

pikachu["hp"] = stats.hp;
pikachu["attack"] = stats.attack;
pikachu["defense"] = stats.defense;

// the pokemon will level up

// not bad
let pikachuLvl10 = Object.assign(pikachu, stats);
let pikachuLvl11 = Object.assign(pikachu, { hp: 45 });

// better left to right
let pikachuLvl10 = { ...pikachu, ...stats };
let pikachuLvl11 = { ...pikachu, hp: 45 };

// Arrays

let pokemons = ["Arbok", "Raichu", "Eevee", "Heracross"];

// old school
pokemons.push("Bulbasaur");
pokemons.push("Metapod");
pokemons.push("Weedle");

// better
pokemons = [...pokemons, "Bulbasaur", "Metapod", "Weedle"];
pokemons = ["Bulbasaur", "Metapod", "Weedle", ...pokemons];
pokemons = ["Bulbasaur", "Metapod", ...pokemons, "Weedle"];
