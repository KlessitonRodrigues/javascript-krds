import { ProductInterface as Product } from "./product";

export interface ShopCartInterface {

  addProduct(product: Product): void;

  removeProduct(product: Product): void;

  isEmpty(): boolean;

  clearCart(): void;

  get products(): Product[];

  get total(): number;
}
