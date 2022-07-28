import Item from './Item';

class Order {
  items: Item[];
  constructor() {
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  getTaxes() {
    let taxes = 0;

    this.items.forEach(item => taxes += item.calculateTax());
    return taxes;
  }

  getTotal() {
    let total = 0;

    this.items.forEach(item => total += item.price);
    return total;
  }
}

export default Order;