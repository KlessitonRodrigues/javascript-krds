import { ManagerCart } from "./manageCart.ts";
import { ShopCart } from "./shopCart";
import { Database } from "../services/database";
import { Validation } from "../services/validation";
import { Product } from "./product";

function createSut(withProducts: boolean): ManagerCart {
  const shopCartMock = new ShopCart();
  const validationMock = new Validation();
  const databaseMock = new Database(validationMock);

  if (withProducts) {
    shopCartMock.addProduct(new Product("test 1", 10));
  }

  return new ManagerCart(shopCartMock, databaseMock);
}

describe("Manager class", () => {
  it("Should saveCart() return a positive Status", () => {
    const sut = createSut(true);
    const status = sut.saveCart();
    expect(status).toEqual({ success: 1, infoMsg: "Saved: test 1" });
  });

  it("Should saveCart() return a negative Status", () => {
    const sut = createSut(false);
    const status = sut.saveCart();
    expect(status).toEqual({ success: 0, infoMsg: "cart is empty!" });
  });
});
