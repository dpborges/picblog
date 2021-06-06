import { getPrevPage } from '../paginatorFunctions';

describe("Test Paginator getPrevPage Function", () => {
  test("should return previous page of 1", () => {
    const curPage   = 1;
    expect(getPrevPage(curPage)).toEqual(1);
  }),
  test("should return previous page of 2", () => {
    const curPage   = 3;
    expect(getPrevPage(curPage)).toEqual(2);
  }),
  test("should return previous page of 1 if is 0", () => {
    const curPage   = 0;
    expect(getPrevPage(curPage)).toEqual(1);
  }),
  test("should return previous page of 1 if is undefined", () => {
    const curPage = undefined;
    expect(getPrevPage(curPage)).toEqual(1);
  })
});

