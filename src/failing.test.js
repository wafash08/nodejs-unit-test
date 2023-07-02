test("success", () => {
  expect(5).toBe(5);
});

test.failing("error", () => {
  expect(5).toBe(6);
});
