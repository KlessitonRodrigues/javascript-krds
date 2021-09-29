import { ShopCart } from "../entities/shopCart";

export class Database {
  storeCartOnDB(shopCart: ShopCart): void {
    console.log(
      "BD: Saved!",
      shopCart.products.map((prooduct) => prooduct.name)
    );
  }
}
