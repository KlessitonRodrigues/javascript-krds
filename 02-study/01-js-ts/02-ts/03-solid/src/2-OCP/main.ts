import { ShopCart } from "./classes/shopCart ";
import { ThirtyPercetOfDescount, FiftyPercetOfDescount, NoDescount } from "./classes/discount";

// const discount = new NoDescount()
// const discount = new FiftyPercetOfDescount();
const discount = new ThirtyPercetOfDescount();

const cart = new ShopCart(discount);

cart.addProduct({ name: "test1", value: 40 });
cart.addProduct({ name: "test2", value: 30 });
cart.addProduct({ name: "test3", value: 30 });
console.log(cart.total);
console.log(cart.totalWithDiscount)
