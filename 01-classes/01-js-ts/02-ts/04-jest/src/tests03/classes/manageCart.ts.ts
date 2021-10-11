import { ShopCartInterface as ShopCart } from "./interfaces/shopCart";
import { DatabaseInterface as Database } from "../services/interfaces/database";
import { Status } from "../services/interfaces/validation";

export class ManagerCart {
  constructor(
    private readonly shopCart: ShopCart,
    private readonly database: Database
  ) {}

  saveCart(): Status {
    const status = this.database.storeCartOnDB(this.shopCart);
    if (status.success) this.shopCart.clearCart();
    return status;
  }
}
