import { Database } from "./database";
import { Validation } from "./validation";
import { ShopCart } from "../classes/shopCart";
import { Product } from "../classes/product";

function createSut(): Database {
  const validationMock = new Validation();
  return new Database(validationMock);
}

function createShopCartWithProducts(): ShopCart {
  const shopCartMock = new ShopCart();
  shopCartMock.addProduct(new Product("Test Product 1", 1));
  shopCartMock.addProduct(new Product("Test Product 2", 2));
  return shopCartMock;
}

describe("Database Class", () => {
  it("should return a negative status for empty card", () => {
    const sut = createSut();
    const shopCartMock = new ShopCart();

    const status = sut.storeCartOnDB(shopCartMock);

    expect(status).toEqual({ success: 0, infoMsg: "cart is empty!" });
  });

  it("should return a positive status with products", () => {
    const sut = createSut();
    const shopCartMock = createShopCartWithProducts();
    const status = sut.storeCartOnDB(shopCartMock);
    expect(status).toEqual({
      success: 1,
      infoMsg: "Saved: Test Product 1, Test Product 2",
    });
  });
});
