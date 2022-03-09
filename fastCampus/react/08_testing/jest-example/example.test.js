describe("", () => {
  it("add 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });

  it("{age: 39} to equal {age: 39}", () => {
    expect({ age: 39 }).toEqual({ age: 39 });
  });

  it(".toHaveLength", () => {
    expect("hello").toHaveLength(5);
  });

  it(".toHaveProperty", () => {
    expect({ name: "Mark" }).toHaveProperty("name");
    expect({ name: "Mark" }).toHaveProperty("name", "Mark");
  });

  it(".toBeDefined", () => {
    expect({ name: "Mark" }.name).toBeDefined();
  });

  it(".toBeFalsy", () => {
    expect(0).toBeFalsy();
  });

  it(".toBeGreaterThan", () => {
    expect(6).toBeGreaterThan(2);
  });

  it(".toBeGreaterThanOrEqual", () => {
    expect(6).toBeGreaterThanOrEqual(6);
  });

  it(".toBeInstanceOf", () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  });

  it("async await test", async () => {
    function p() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(22);
        }, 1000);
      });
    }

    const data = await p();
    return expect(data).toEqual(22);
  });
});
