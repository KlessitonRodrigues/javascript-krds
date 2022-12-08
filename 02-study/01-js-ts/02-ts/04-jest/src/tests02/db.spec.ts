import { DataBase } from "./db";

const createSut = () => new DataBase();

describe("DB test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should connect be called once", () => {
    const sut = createSut();
    const sutConnectSpy = jest.spyOn(sut, "connect");

    sut.connect("test");

    expect(sutConnectSpy).toBeCalledTimes(1);
  });

  it("should connect be called with http://test'", () => {
    const sut = createSut();
    const sutConnectSpy = jest.spyOn(sut, "connect");

    sut.connect("http://test");

    expect(sutConnectSpy).toHaveBeenCalledWith("http://test");
  });

  it('should connect return "connection successfully at http://test"', () => {
    const sut = createSut();
    const returnMsg = sut.connect("http://test");

    expect(returnMsg).toBe("connection successfully at http://test");
  });

  it('should db.save returns "saved: itemName,test"', () => {
    const sut = createSut();
    const returnMsg = sut.save({itemName: "test"});

    expect(returnMsg).toBe("saved: itemName,test");
  });
});
