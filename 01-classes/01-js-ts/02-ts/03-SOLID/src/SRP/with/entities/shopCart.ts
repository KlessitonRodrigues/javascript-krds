import { Product } from "./product";

export class ShopCart {
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
