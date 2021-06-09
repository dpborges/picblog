import { getGroupEndPage, getGroupStartPage, isPageInLastGroup } from '../paginatorFunctions';
import { hrefList,  } from './_hrefList';

describe("Get End Page for given group givne a start page number", () => {

  test("test for correct endPage with 3 pages remaining", () => {
    // set up
    let groupNum = 3;
    const displaySize = 5;
    let groupStartPage = getGroupStartPage(groupNum, hrefList, displaySize); 
    // run test
    expect(getGroupEndPage(groupStartPage, hrefList, displaySize)).toEqual(13);
  }),
  test("test for correct endPage with 1 page remaining", () => {
    // set up
    let groupNum = 4;
    const displaySize = 4;
    let groupStartPage = getGroupStartPage(groupNum, hrefList, displaySize); 
    // run test
    expect(getGroupEndPage(groupStartPage, hrefList, displaySize)).toEqual(13);
  }),
  test("test for correct endPage when groups are evenly distributed", () => {
    // set up
    hrefList.pop();  /* remove last entry to create an evenly divisible list */
    let groupNum = 3;
    const displaySize = 4;
    let groupStartPage = getGroupStartPage(groupNum, hrefList, displaySize); 
    // run test
    expect(getGroupEndPage(groupStartPage, hrefList, displaySize)).toEqual(12);
  })
  
});
