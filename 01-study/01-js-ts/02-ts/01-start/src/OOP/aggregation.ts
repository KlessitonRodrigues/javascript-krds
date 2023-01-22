export class ProductCart {
  constructor(private _products: Product[] = []) {}

  addProduct(product: Product): void {
    this.products.push(product);
  }

  get products(): Product[] {
    return this._products;
  }

  get productValueSum(): string {
    return this.products
      .reduce((sum, product) => sum + product.value, 0)
      .toFixed(2);
  }

  get productCount(): number {
    return this.products.length;
  }
}

export class Product {
  constructor(public name: string, public value: number) {}
}

const prod1 = new Product('prod1', 25.55);
const prod2 = new Product('prod2', 42.5);
const prod3 = new Product('prod3', 14.1);

const cart = new ProductCart();

cart.addProduct(prod1);
cart.addProduct(prod2);
cart.addProduct(prod3);

console.log(cart.productCount);
console.log(cart.productValueSum);
console.log(cart.products);
