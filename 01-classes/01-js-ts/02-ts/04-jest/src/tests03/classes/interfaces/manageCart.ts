import { ShopCartInterface as ShopCart } from "./shopCart";
import {
  ValidationInterface as Validation,
  Status,
} from "../../services/interfaces/validation";

export interface ManagerCart {
  readonly shopCart: ShopCart;
  readonly validation: Validation;
  readonly database: Database;

  saveCart(): Status;
}
