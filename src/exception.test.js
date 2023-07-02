import { MyException, sayName } from "./exception";

describe("String", () => {
  test("exception happens", () => {
    expect(() => sayName("wafa")).toThrow();
    expect(() => sayName("wafa")).toThrow(MyException);
    expect(() => sayName("wafa")).toThrow("Ups!");
  });

  test("exception not happens", () => {
    expect(sayName("Budi")).toBe("Budi");
  });
});
