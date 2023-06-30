test("test toBe", () => {
  const name = "Wafa";
  const hello = "Hello " + name;

  expect(hello).toBe("Hello Wafa");
});

test("test toEqual", () => {
  const person = { id: "wafa" };
  Object.assign(person, { name: "Wafa" });

  expect(person).toEqual({
    id: "wafa",
    name: "Wafa",
  });
});
