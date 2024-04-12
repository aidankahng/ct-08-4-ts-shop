import {v4 as uuidv4} from 'uuid';

class Item {
    private readonly _id;
    constructor(
        private _name: string,
        private _price: number,
        private _description: string
    ){
        this._id = uuidv4()
    }

    public get id(): string {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public display(){
        console.log(`${this.name} : $${this.price}`)
    }
}

class User {
    private readonly _id: string;
    private _cart: Item[];
    constructor(
        private _name: string,
        private _age: number
    ){
        this._id = uuidv4();
        this._cart = [];
    }

    public get id(): string {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
    

    public addToCart(item:Item) {
        this._cart.push(item)
    }

    public removeFromCart(item:Item) {
        let i = 0;
        while (i < this._cart.length) {
            if (this._cart[i]?.name == item.name) {
                this._cart.splice(i,1);
            } else {
                i++
            }
        }
    }

    public removeQuantityFromCart(item:Item, quantity:number) {
        let i = 0;
        let count = 0;
        while (i < this._cart.length && count < quantity) {
            if (this._cart[i]?.name == item.name) {
                this._cart.splice(i,1);
                count++
            } else {
                i++
            }
        } 
    }


    public printCart() {
        console.log(`--- ${this.name}'s cart ---`);
        for (let item of this._cart) {
            item.display();
        }
        console.log(`Total Cost: $${this.cartTotal()}`)
    }

    public cartTotal():number {
        let sum = 0;
        for (let item of this._cart) {
            sum += item.price
        }
        return Math.round(sum * 100) / 100
    }


}

class Shop {
    private _items: Item[];
    constructor(...items:Item[]){
        this._items = items;
    }
    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }

    public addItem(item:Item):void {
        this._items.push(item);
    }
}


// TESTING
const banana = new Item("banana", 0.23, "This is a banana");
const backpack = new Item('backpack', 24.56, "This backpack looks small but clean");
const notebook = new Item('notebook', 5.40, "100 sheets of blank paper. Perfect for notes.")
const bob = new User("bob", 23);
const store = new Shop(banana, backpack, notebook);
bob.printCart()
console.log("adding 5 bananas, 2 backpacks, and 2 notebooks...")
bob.addToCart(store.items[0])
bob.addToCart(store.items[0])
bob.addToCart(store.items[0])
bob.addToCart(store.items[0])
bob.addToCart(store.items[0])
bob.addToCart(store.items[1])
bob.addToCart(store.items[1])
bob.addToCart(store.items[2])
bob.addToCart(store.items[2])
bob.printCart()
console.log("removing 3 bananas from the cart...")
bob.removeQuantityFromCart(store.items[0], 3)
bob.printCart()
console.log("removing all backpacks from the cart...")
bob.removeFromCart(store.items[1])
bob.printCart()


