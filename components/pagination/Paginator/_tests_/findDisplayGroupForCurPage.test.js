import { getDisplaySize, findDisplayGroupForCurPage } from '../paginatorFunctions';

// This is produced by the pagination util and gets passed to the Paginator UI component for rendering
const hrefList   = [
  '/blog/page/1',
  '/blog/page/2',
  '/blog/page/3',
  '/blog/page/4',
  '/blog/page/5',
  '/blog/page/6',
  '/blog/page/7',
  '/blog/page/8',
  '/blog/page/9',
  '/blog/page/10',
  '/blog/page/11',
  '/blog/page/12',
  '/blog/page/13'
];

describe("Check getDisplaySize function", () => {

  test("when displaySize less than hrefList size", () => {
    const displaySize = 3; /* number of items between prev and next */
    expect(getDisplaySize(displaySize, hrefList.length)).toEqual(3);
  }),
  test("when displaySize is greater than hrefList size", () => {
    const displaySize = 14; /* number of items between prev and next */
    expect(getDisplaySize(displaySize, hrefList.length)).toEqual(13);
  }),
  test("when displaySize is equal to hrefList size", () => {
    const displaySize = 13; /* number of items between prev and next */
    expect(getDisplaySize(displaySize, hrefList.length)).toEqual(13);
  })

  // test("should return display group 1", () => {
  //   const curPage  = 1;
  //   const displaySize = 3; /* number of items between prev and next */
  //   expect(findDisplayGroupForCurPage(curPage, hrefList, displaySize)).toEqual(1);
  // })
  
});

