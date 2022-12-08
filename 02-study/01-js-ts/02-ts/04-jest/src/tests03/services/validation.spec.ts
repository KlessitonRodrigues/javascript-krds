import { Validation } from "./validation";

const createSut = () => new Validation();

describe("Validation Class", () => {
  it("should validation.success return a positive status", () => {
    const sut = createSut();
    const status = sut.success("test");
    expect(status).toEqual({ success: 1, infoMsg: "test" });
  });

  it("should validation.error return a negative status", () => {
    const sut = createSut();
    const status = sut.error("test error");
    expect(status).toEqual({ success: 0, infoMsg: "test error" });
  });
});
