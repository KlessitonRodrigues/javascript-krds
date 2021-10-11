import { ShopCartInterface as ShopCart } from "../../classes/interfaces/shopCart";
import { ValidationInterface as Validation, Status } from "./validation";

export interface DatabaseInterface {
  readonly validation: Validation;
  storeCartOnDB(shopCart: ShopCart): Status;
}
