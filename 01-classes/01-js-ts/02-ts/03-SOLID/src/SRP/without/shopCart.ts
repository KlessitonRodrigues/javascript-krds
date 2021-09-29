export type Product = {
  name: string;
  value: number;
};

export type Validation = {
  success: boolean;
  errorMsg?: string;
};

export class shopCart {
  private readonly _products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProduct(product: Product): void {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  saveCart(): Validation {
    if (this.isEmpty()) return { success: false, errorMsg: "cart is Empty!" };
    try {
      this.storeCartOnDB();
      this.clearCart();
      return { success: true };
    } catch (err) {
      return { success: false, errorMsg: "error on store the cart!" };
    }
  }

  isEmpty(): boolean {
    return this.products.length < 1
  }

  private storeCartOnDB(): void {
    console.log(
      "BD: Saved!",
      this.products.map((product) => product.name)
    );
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

const cart = new shopCart();
console.log(cart.saveCart());

cart.addProduct({ name: "test1", value: 12 });
cart.addProduct({ name: "test2", value: 10.5 });
cart.addProduct({ name: "test3", value: 30.8 });

console.log(cart.products);

cart.removeProduct({ name: "test3", value: 30.8 });

console.log(cart.products);
console.log(cart.total);
console.log(cart.saveCart());
