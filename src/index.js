const Basket = require("./Basket/Basket");
const Product = require("./Product/Product");

const pricingRules = require("./helpers/pricing-rules-api");


const basket = new Basket(pricingRules);

const products = [
  new Product("FR1", "Fruit Tea", 311),
  new Product("SR1", "Strawberries", 500),
  new Product("FR1", "Fruit Tea", 311),
  new Product("CF1", "Coffee", 1123),
];

products.forEach(product => {
  basket.add(product);
});
const total = basket.total();
console.log(total);

//FR1, SR1, FR1, CF1
// SR1, SR1, FR1, SR1
// FR1, FR1