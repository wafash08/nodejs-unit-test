import { sayHello } from "./async.js";

test.concurrent("concurrent 1", async () => {
  await expect(sayHello("Eko")).resolves.toBe("Hello Eko");
});

test.concurrent("concurrent 2", async () => {
  await expect(sayHello("Eko")).resolves.toBe("Hello Eko");
});

test.concurrent("concurrent 3", async () => {
  await expect(sayHello("Eko")).resolves.toBe("Hello Eko");
});
