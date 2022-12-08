import { Product } from "./product";
import { ShopCart } from "./shopCart";

function createSut(withProducts: boolean): ShopCart {
  const shopCartMock = new ShopCart();

  if (withProducts) {
    shopCartMock.addProduct(new Product("test 1", 10.5));
    shopCartMock.addProduct(new Product("test 2", 20.75));
  }

  return shopCartMock;
}

describe("shopCart class", () => {
  it("Should isEmpty() return true", () => {
    const sut = createSut(false);

    expect(sut.isEmpty()).toBeTruthy();
  });

  it("Should isEmpty() return false", () => {
    const sut = createSut(true);

    expect(sut.isEmpty()).toBeFalsy();
  });

  it("Should addProduct() add only a new product", () => {
    const sut = createSut(false);
    const startLength = sut.products.length;

    sut.addProduct(new Product("test", 10));

    const endLength = sut.products.length;

    expect(endLength - startLength).toBe(1);
  });

  it("Should removeProduct() remove only a product", () => {
    const sut = createSut(false);
    const productMock = new Product("test", 10);

    sut.addProduct(productMock);

    sut.removeProduct(productMock);

    expect(sut.products.length).toBe(0);
  });

  it("Should clearCart() remove all products", () => {
    const sut = createSut(true);

    sut.clearCart();

    expect(sut.products.length).toBe(0);
  });

  it("Should prop products return a array of products", () => {
    const sut = createSut(false);

    const productMock1 = new Product("test1", 10);
    const productMock2 = new Product("test2", 15);

    sut.addProduct(productMock1);
    sut.addProduct(productMock2);

    expect(sut.products).toEqual([productMock1, productMock2]);
  });

  it("Should prop total return the sum of products amount", () => {
    const sut = createSut(true);

    expect(sut.total).toBeCloseTo(31.25);
  });
});
