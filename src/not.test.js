describe("Not Matchers", () => {
  test("string not matcher", () => {
    const name = "Wafa Saefulhaq";

    expect(name).not.toBe("Joko");
    expect(name).not.toMatch(/joko/);
  });

  test("number not matcher", () => {
    const result = 2 + 2;

    expect(result).not.toBeGreaterThan(6);
    expect(result).not.toBeLessThan(3);
    expect(result).not.toBe(10);
  });
});
