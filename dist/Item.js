"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(category, description, price) {
        this.category = category;
        this.description = description;
        this.price = price;
    }
    calculateTax() {
        const category = this.category.toLowerCase();
        if (category === 'beer') {
            return this.price * 0.1;
        }
        if (category === 'whisky') {
            return this.price * 0.2;
        }
        return 0;
    }
}
exports.default = Item;
