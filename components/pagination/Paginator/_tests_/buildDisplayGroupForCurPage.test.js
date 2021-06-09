import { buildDisplayGroupForCurPage } from '../paginatorFunctions';
import { hrefList,  } from './_hrefList';

describe("build display group for current active page ", () => {

  test("build display group for page 1", () => {
    // set up
    const curPage  = 1;
    const displaySize = 5;
    const expectedObject =  { groupNum: 1, groupStart: 1, groupEnd: 5 };
    // run test
    expect(buildDisplayGroupForCurPage (curPage, hrefList, displaySize)).toMatchObject(expectedObject);
  })
  ,
  test("build display group for page 7", () => {
    // set up
    const curPage  = 7;
    const displaySize = 5;
    const expectedObject =  { groupNum: 2, groupStart: 6, groupEnd: 10 };
    // run test
    expect(buildDisplayGroupForCurPage (curPage, hrefList, displaySize)).toMatchObject(expectedObject);
  }),
  test("build display group for page 12", () => {
    // set up
    const curPage  = 12;
    const displaySize = 5;
    const expectedObject =  { groupNum: 3, groupStart: 11, groupEnd: 13  };
    // run test
    expect(buildDisplayGroupForCurPage (curPage, hrefList, displaySize)).toMatchObject(expectedObject);
  }),
  test("neg-test: build display group using a displaySize out of range", () => {
    // set up
    const curPage  = 12;
    const displaySize = 15;
    const defaultDisplayObject =  { groupNum: 1, groupStart: 1, groupEnd: 1 };
    // run test
    expect(buildDisplayGroupForCurPage (curPage, hrefList, displaySize)).toMatchObject(defaultDisplayObject);
  })

});