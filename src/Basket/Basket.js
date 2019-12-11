const BasketList = require("../Basket/BasketList");
const { applyBulkrule, apply2x1rule } = require('../helpers/rules');
class Basket {
    constructor(pricingRules) {
        this.products = [];
        this.pricingRules = pricingRules || []; 
    }

    add(product) {
        let addedProduct = this.products.find(p => p.code === product.code);

        if (!addedProduct) {
            addedProduct = new BasketList(
            product.code,
            product.name,
            product.price
        );
        this.products.push(addedProduct);
        } else {
        addedProduct.quantity++;
        }   
        
        this.applyPricingRules(addedProduct);
    }

    applyPricingRules(product) {
        const rule = this.pricingRules.find(
           rules => rules.productCode === product.code
        );
    
        if(rule) {
            const discount = rule.code === 'bulk' ? applyBulkrule(product, rule) : apply2x1rule(product);
            product.discount = discount;
        }       
      }

    total() {
      let total = this.products.reduce((total, product) => {
            total += product.price * product.quantity - product.discount;
            return total;
          }, 0);
       return total/100;
    }

}
module.exports = Basket;