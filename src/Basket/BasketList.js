const Product = require("../Product/Product");

class BasketList extends Product {
  constructor(code, name, price) {
    super(code, name, price);
    this.quantity = 1;
    this.discount = 0;
  }
}

module.exports = BasketList;
