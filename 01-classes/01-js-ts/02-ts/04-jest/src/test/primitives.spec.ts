describe("Primitive Values", () => {
  const number = 10;

  it("should test number", () => {
    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(9.996);
    expect(number).toBeCloseTo(10.004);

    expect(number).not.toBeNull();

    expect(number).toHaveProperty("toString");
  });
});
