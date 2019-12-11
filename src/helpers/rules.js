
const apply2x1rule = (product) => {
    if(product.quantity > 1) {
        const totalItems = Math.ceil(product.quantity / 2);
        return product.price * totalItems;
    }
    return 0;
    
};

const applyBulkrule = (product, rule) => {
    if (product.quantity >= rule.quantity) {
        return product.quantity * rule.discount;
    }
    return 0;
};


module.exports = {
    apply2x1rule,
    applyBulkrule
}