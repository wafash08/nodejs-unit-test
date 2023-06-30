describe("Truthiness", () => {
  test("should check whether the value is true or false", () => {
    let value = null;
    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeFalsy();

    value = undefined;
    expect(value).toBeUndefined();
    expect(value).toBeFalsy();

    value = "Wafa";
    expect(value).toBeTruthy();
    expect(value).toBeDefined();
  });
});
