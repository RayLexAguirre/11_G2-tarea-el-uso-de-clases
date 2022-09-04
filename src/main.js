import Amount from './amount.js';
import Product from './product.js'
import Item from './item.js';
import Cart from './cart.js';

console.log("Amount");
let a1 = new Amount(6);
console.log(a1.getValue());
console.log(a1.getValueAsString()); 

console.log("Product");
let p1 = new Product("catsoup", 12);
console.log(p1.getName());
console.log(p1.getPrice()); 

console.log("Item");
let i1 = new Item(p1, a1);
console.log(i1.getName());
console.log(i1.getAmount());
console.log(i1.getAmountAsString());
console.log(i1.getPrice());
console.log(i1.getTotalPrice());

console.log("Cart");
let c1 = new Cart();
console.log(c1.addItem("Pera"));
console.log(c1.getNumberOfItems());
//console.log(c1.getNumberOfProducts());
console.log(c1.getCost());
console.log(c1.getMostExpensive());

