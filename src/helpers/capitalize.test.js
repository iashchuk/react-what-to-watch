import { capitalize } from "./capitalize";

const str1 = { start: `review`, finish: `Review` };
const str2 = { start: `detailS`, finish: `DetailS` };

describe(`capitalize`, () => {
  test(`execute correctly 1`, () => {
    expect(capitalize(str1.start)).toBe(str1.finish);
  });

  test(`execute correctly 2`, () => {
    expect(capitalize(str2.start)).toBe(str2.finish);
  });

  test(`get error with a number`, () => {
    expect(() => capitalize(10)).toThrow();
  });

  test(`get error with an array`, () => {
    expect(() => capitalize([`10`, `20`, `30`])).toThrow();
  });
});
