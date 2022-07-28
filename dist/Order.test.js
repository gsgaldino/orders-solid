"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = __importDefault(require("./Order"));
const Item_1 = __importDefault(require("./Item"));
test('Deve criar um pedido e calcular o total', () => {
    const order = new Order_1.default();
    order.addItem(new Item_1.default('Beer', 'Brahma', 10));
    order.addItem(new Item_1.default('Whisky', 'Jack Daniels', 100));
    order.addItem(new Item_1.default('Water', 'Crystal', 1));
    const total = order.getTotal();
    expect(order instanceof Order_1.default).toBeTruthy();
    expect(total).toBe(111);
});
test('Deve criar um pedido e calcular os impostos', () => {
    const order = new Order_1.default();
    order.addItem(new Item_1.default('Beer', 'Brahma', 10));
    order.addItem(new Item_1.default('Whisky', 'Jack Daniels', 100));
    order.addItem(new Item_1.default('Water', 'Crystal', 1));
    const taxes = order.getTaxes();
    expect(order instanceof Order_1.default).toBeTruthy();
    expect(taxes).toBe(21);
});
