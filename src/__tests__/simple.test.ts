import type * as Index from "../index";
const { returnSomething } = jest.requireActual<typeof Index>("../index");

describe("simple test suite", () => {
  test("simple test", () => {
    expect(returnSomething()).toBe("something");
  });
});

export {};
