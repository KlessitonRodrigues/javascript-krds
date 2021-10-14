import { DatabaseInterface } from "./interfaces/database";
import { ShopCartInterface as ShopCart } from "../classes/interfaces/shopCart";
import {
  ValidationInterface as Validation,
  Status,
} from "./interfaces/validation";

export class Database implements DatabaseInterface {
  constructor(readonly validation: Validation) {}

  storeCartOnDB(shopCart: ShopCart): Status {
    if (shopCart.products.length <= 0)
      return this.validation.error(`cart is empty!`);
    return this.validation.success(
      `Saved:${shopCart.products.map((prod) =>  " " + prod.name)}`
    );
  }
}
