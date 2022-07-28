class Item {
  category: string;
  description: string;
  price: number;

  constructor(category: string, description: string, price: number) {
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

export default Item;
