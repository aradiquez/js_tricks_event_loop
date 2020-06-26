const carSellPrices = [500, 700, 1200, 540, 400, 2100];

let total = 0;
let totalWithTax = [];
let aLotOfMoney = [];
let orderList = [];

for (i = 0; i < carSellPrices.length; i++) {
  total += carSellPrices[i];

  totalWithTax.push(carSellPrices[i] * 1.4);

  if (carSellPrices[i] > 2000) {
    aLotOfMoney.push(carSellPrices[i]);
  }
}

// ordering
let orderList = carSellPrices.sort(function (priceA, priceB) {
  if (priceA > priceB) {
    return 1;
  } else {
    return -1;
  }
});

for (const price in carSellPrices) {
  total += price;

  totalWithTax.push(price * 1.4);

  if (price > 2000) {
    aLotOfMoney.push(price);
  }
}

let orderList = carSellPrices.sort((priceA, priceB) =>
  priceA > priceB ? 1 : -1
);

// use functions ES5 -6

let total = carSellPrices.reduce(
  (accumulator, current) => accumulator + current
);

let totalWithTax = carSellPrices.map((prices) => prices * 1.4);

let totalWithTax = carSellPrices.filter((prices) => prices > 2000);

let orderList = carSellPrices.sort((priceA, priceB) => priceA - priceB);
