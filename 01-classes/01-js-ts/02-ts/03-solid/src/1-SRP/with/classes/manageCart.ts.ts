import { ValidationInterface } from "./interfaces/validation";
import { ShopCart } from "./shopCart";
import { Database } from "../services/database";
import { Validation } from "../services/validation";

export class ManagerCart {
  constructor(
    private readonly shopCart: ShopCart,
    private readonly database: Database,
    private readonly validation: Validation
  ) {}

  saveCart(): ValidationInterface {
    if (this.shopCart.isEmpty())
      return this.validation.error("cart is Empty!");
    try {
      this.database.storeCartOnDB(this.shopCart);
      this.shopCart.clearCart();
      return this.validation.success();
    } catch (err) {
      return this.validation.error("error on store the cart!");
    }
  }
}
