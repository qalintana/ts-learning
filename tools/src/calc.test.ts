import { sum } from "./calc";

test("check result", () => {
  let result = sum(10, 20, 30);
  expect(result).toBe(60);
});
