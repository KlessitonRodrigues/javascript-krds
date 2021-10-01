import { ProductInterface } from "./interfaces/product";

export class Product implements ProductInterface {
  name = "";
  value = 0;
  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}
