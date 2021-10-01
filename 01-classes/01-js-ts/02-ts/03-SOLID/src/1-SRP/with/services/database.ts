import { ShopCart } from "../classes/shopCart";

export class Database {
  storeCartOnDB(shopCart: ShopCart): void {
    console.log(
      "BD: Saved!",
      shopCart.products.map((prooduct) => prooduct.name)
    );
  }
}
