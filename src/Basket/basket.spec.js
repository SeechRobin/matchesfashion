const Basket = require('./Basket');
const Product = require('../Product/Product');
const pricingRules = require('../helpers/pricing-rules-api');

describe('Basket', () => {
  it('FR1, SR1, FR1, CF1', () => {
    const products = [
      new Product("FR1", "Fruit Tea", 311),
      new Product("SR1", "Strawberries", 500),
      new Product("FR1", "Fruit Tea", 311),
      new Product("CF1", "Coffee", 1123),
    ];
  
    const basket = new Basket(pricingRules);
  
    products.forEach(product => {
      basket.add(product);
    });
  
    expect(basket.total()).toBe(19.34);
  });

  it('FR1, FR1', () => {
    const products = [
      new Product("FR1", "Fruit Tea", 311),
      new Product("FR1", "Fruit Tea", 311),
    ];
  
    const basket = new Basket(pricingRules);
  
    products.forEach(product => {
      basket.add(product);
    });
  
    expect(basket.total()).toBe(3.11);
  });

  it('SR1, SR1, FR1, SR1', () => {
    const products = [
      new Product("SR1", "Strawberries", 500),
      new Product("SR1", "Strawberries", 500),
      new Product("FR1", "Fruit Tea", 311),
      new Product("SR1", "Strawberries", 500),
    ];
  
    const basket = new Basket(pricingRules);
  
    products.forEach(product => {
      basket.add(product);
    });
  
    expect(basket.total()).toBe(16.61);
  });

  it('SR1, SR1, FR1, SR1, SR1, SR1, CF1', () => {
    const products = [
      new Product("SR1", "Strawberries", 500),
      new Product("SR1", "Strawberries", 500),
      new Product("FR1", "Fruit Tea", 311),
      new Product("SR1", "Strawberries", 500),
      new Product("SR1", "Strawberries", 500),
      new Product("SR1", "Strawberries", 500),
      new Product("CF1", "Coffee", 1123),
    ];
  
    const basket = new Basket(pricingRules);
  
    products.forEach(product => {
      basket.add(product);
    });
  
    expect(basket.total()).toBe(36.84);
  });

});