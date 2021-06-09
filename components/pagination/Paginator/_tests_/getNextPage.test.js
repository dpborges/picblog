import { getNextPage } from '../paginatorFunctions';

describe("Test Paginator getNextPage Function", () => {
  test("should return next page of 1", () => {
    const curPage   = 1; 
    const numPages  = 1;
    expect(getNextPage(curPage, numPages)).toEqual(1);
  }),
  test("should return next page of 2", () => {
    const curPage   = 1; 
    const numPages  = 2;
    expect(getNextPage(curPage, numPages)).toEqual(2);
  }),
  test("should return next page of 3", () => {
    const curPage   = 3; 
    const numPages  = 3;
    expect(getNextPage(curPage, numPages)).toEqual(3);
  }),
  test("should return next page of 1 with Error Message, becuase numPages is 0", () => {
    const curPage   = 2; 
    const numPages  = 0;
    expect(getNextPage(curPage, numPages)).toEqual(1);
  }),
  test("should return next page of 1 with Error Message, missing argument", () => {
    const numPages  = 1;
    expect(getNextPage( numPages)).toEqual(1);
  })
});

