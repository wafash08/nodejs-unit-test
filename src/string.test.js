describe("String", () => {
  test("test string with toBe and toMatch", () => {
    const name = "Wafa Saefulhaq";

    expect(name).toBe("Wafa Saefulhaq");
    expect(name).toMatch(/haq/);
  });
});
