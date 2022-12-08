import { ShopCart } from "./classes/shopCart";
import { ManagerCart } from "./classes/manageCart.ts";
import { Database } from "./services/database";
import { Validation } from "./services/validation";

const cart = new ShopCart();
const validation = new Validation();
const db = new Database(validation);
const managerCart = new ManagerCart(cart, db);

console.log(managerCart.saveCart());

cart.addProduct({ name: "test1", value: 12 });
cart.addProduct({ name: "test2", value: 10.5 });
cart.addProduct({ name: "test3", value: 30.8 });

console.log(cart.products);

cart.removeProduct({ name: "test3", value: 30.8 });

console.log(cart.products);
console.log(cart.total);

console.log(managerCart.saveCart());
