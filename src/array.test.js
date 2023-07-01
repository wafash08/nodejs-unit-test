describe("Array", () => {
  test("test array simple with toEqual and toContain", () => {
    const names = ["wafa", "wafi", "lulu"];

    expect(names).toEqual(["wafa", "wafi", "lulu"]);
    expect(names).toContain("wafi");
  });

  test("test array object with toContainEqual", () => {
    const persons = [{ name: "wafa" }, { name: "wafi" }, { name: "lulu" }];
    expect(persons).toEqual([
      { name: "wafa" },
      { name: "wafi" },
      { name: "lulu" },
    ]);
    expect(persons).toContainEqual({ name: "wafi" });
  });
});
