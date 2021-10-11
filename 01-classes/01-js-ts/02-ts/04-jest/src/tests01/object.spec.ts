describe("Object tests", () => {
  const user1 = { name: "test", age: 20 };
  const user2 = { ...user1 };

  it("should test objects", () => {
    // expect(user1).toBe(user2); => error
    expect(user1).toEqual(user2);
    expect(user1).toStrictEqual(user2);

    expect(user1).toHaveProperty("name", "test");
    expect(user1.name).toBe("test");
  });
});
