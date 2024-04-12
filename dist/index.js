"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(_name, _price, _description) {
        this._name = _name;
        this._price = _price;
        this._description = _description;
        this._id = (0, uuid_1.v4)();
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    display() {
        console.log(`${this.name} : $${this.price}`);
    }
}
class User {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        this._id = (0, uuid_1.v4)();
        this._cart = [];
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    addToCart(item) {
        this._cart.push(item);
    }
    removeFromCart(item) {
        var _a;
        let i = 0;
        while (i < this._cart.length) {
            if (((_a = this._cart[i]) === null || _a === void 0 ? void 0 : _a.name) == item.name) {
                this._cart.splice(i, 1);
            }
            else {
                i++;
            }
        }
    }
    removeQuantityFromCart(item, quantity) {
        var _a;
        let i = 0;
        let count = 0;
        while (i < this._cart.length && count < quantity) {
            if (((_a = this._cart[i]) === null || _a === void 0 ? void 0 : _a.name) == item.name) {
                this._cart.splice(i, 1);
                count++;
            }
            else {
                i++;
            }
        }
    }
    printCart() {
        console.log(`--- ${this.name}'s cart ---`);
        for (let item of this._cart) {
            item.display();
        }
        console.log(`Total Cost: $${this.cartTotal()}`);
    }
    cartTotal() {
        let sum = 0;
        for (let item of this._cart) {
            sum += item.price;
        }
        return Math.round(sum * 100) / 100;
    }
}
class Shop {
    constructor(...items) {
        this._items = items;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    addItem(item) {
        this._items.push(item);
    }
}
// TESTING
const banana = new Item("banana", 0.23, "This is a banana");
const backpack = new Item('backpack', 24.56, "This backpack looks small but clean");
const notebook = new Item('notebook', 5.40, "100 sheets of blank paper. Perfect for notes.");
const bob = new User("bob", 23);
const store = new Shop(banana, backpack, notebook);
bob.printCart();
console.log("adding 5 bananas, 2 backpacks, and 2 notebooks...");
bob.addToCart(store.items[0]);
bob.addToCart(store.items[0]);
bob.addToCart(store.items[0]);
bob.addToCart(store.items[0]);
bob.addToCart(store.items[0]);
bob.addToCart(store.items[1]);
bob.addToCart(store.items[1]);
bob.addToCart(store.items[2]);
bob.addToCart(store.items[2]);
bob.printCart();
console.log("removing 3 bananas from the cart...");
bob.removeQuantityFromCart(store.items[0], 3);
bob.printCart();
console.log("removing all backpacks from the cart...");
bob.removeFromCart(store.items[1]);
bob.printCart();
