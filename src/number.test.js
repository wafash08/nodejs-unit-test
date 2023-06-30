test("test number", () => {
  const result = 2 + 2;
  expect(result).toBeGreaterThan(3);
  expect(result).toBeGreaterThanOrEqual(4);
  expect(result).toBeLessThan(5);
  expect(result).toBeLessThanOrEqual(5);
  expect(result).toBe(4);
});
