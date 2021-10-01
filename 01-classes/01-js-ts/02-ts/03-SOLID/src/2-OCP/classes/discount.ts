export abstract class Discount {
  protected discount = 0;
  calculateDiscount(cartTotal: number): number {
    return cartTotal * this.discount;
  }
}

export class NoDescount extends Discount {
  protected readonly discount = 1
}

export class FiftyPercetOfDescount extends Discount {
  protected readonly discount = 0.5
}

export class ThirtyPercetOfDescount extends Discount {
  protected readonly discount = 0.7
}
