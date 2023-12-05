const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceMap = prices.map(function (value, index) {
  return { price: value, salePrice: value / 2 };
});
console.log('price map', priceMap);

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const formattedMap = priceMap.map(function (value) {
  return formatter.format(value.price);
});

console.log('formatted map', formattedMap);
