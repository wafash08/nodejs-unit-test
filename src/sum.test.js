import { sum } from "./sum.js";

test("sum(1, 2) should return 3 (1)", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});

test("sum(1, 2) should return 3 (2)", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});
