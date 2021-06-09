import { checkArguments } from '../paginatorFunctions';
import { hrefList,  } from './_hrefList';

describe("validate arguments passed into buildDisplayGroupForCurPage ", () => {

  test("for valid arguments ", () => {
    // set up
    const curPage  = 1;
    const displaySize = 5;
    // run test
    expect(checkArguments(curPage, hrefList, displaySize)).toEqual("");
  }),
  test("for missing arguments ", () => {
    // set up
    const curPage  = 1;
    const displaySize = 5;
    // run test
    expect(checkArguments(curPage, undefined, displaySize)).toEqual("buildDisplayGroupForCurPage - missing one of its arguments; Critical Error, Fix ASAP");
  }),
  test("for displaySize GT hreflist.length ", () => {
    // set up
    const curPage  = 1;
    const displaySize = 15;
    // run test
    expect(checkArguments(curPage, hrefList, displaySize)).toEqual("buildDisplayGroupForCurPage - displaySize cannot be greater than hrefList size. fix error");
  }),
  test("for curPage GT hreflist.length ", () => {
    // set up
    const curPage  = 20;
    const displaySize = 5;
    // run test
    expect(checkArguments(curPage, hrefList, displaySize)).toEqual("buildDisplayGroupForCurPage - curPage cannot be greater than hrefList size. fix error");
  })

});
