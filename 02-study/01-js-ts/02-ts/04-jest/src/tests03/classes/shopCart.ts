import { ProductInterface as Product } from "./interfaces/product";
import { ShopCartInterface } from "./interfaces/shopCart";

export class ShopCart implements ShopCartInterface {
  private readonly _products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProduct(product: Product): void {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  isEmpty(): boolean {
    return this.products.length < 1;
  }

  clearCart(): void {
    this.products.length = 0;
    console.log("cart is now empty!");
  }

  get products(): Product[] {
    return this._products;
  }

  get total(): number {
    return this.products.reduce((sum, product) => product.value + sum, 0);
  }
}
