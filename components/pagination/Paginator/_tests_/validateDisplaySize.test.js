import { validateDisplaySize, findDisplayGroupForCurPage, getGroupStartPage } from '../paginatorFunctions';
import { hrefList } from './_hrefList';

describe("Validate displaySize ", () => {

  test("when displaySize less than hrefList size", () => {
    const displaySize = 3; /* number of items between prev and next */
    expect(validateDisplaySize(displaySize, hrefList.length)).toEqual(3);
  }),
  test("when displaySize is greater than hrefList size", () => {
    const displaySize = 14; /* number of items between prev and next */
    expect(validateDisplaySize(displaySize, hrefList.length)).toEqual(13);
  }),
  test("when displaySize is equal to hrefList size", () => {
    const displaySize = 13; /* number of items between prev and next */
    expect(validateDisplaySize(displaySize, hrefList.length)).toEqual(13);
  })
 
});

