import { sayHello } from "./async";

describe("Async", () => {
  test("test async", async () => {
    const result = await sayHello("Wafa");
    expect(result).toBe("Hello Wafa");
  });

  test("test async with matchers", async () => {
    // kata await ga ngaruh(?) tapi gw tetep make await
    await expect(sayHello("Wafa")).resolves.toBe("Hello Wafa");
    await expect(sayHello()).rejects.toBe(
      "Parameter name is not specified. Please fill the parameter"
    );
  });
});
