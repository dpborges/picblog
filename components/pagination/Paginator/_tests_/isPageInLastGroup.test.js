import { isPageInLastGroup, getGroupStartPage, getGroupEndPage } from '../paginatorFunctions';
import { hrefList } from './_hrefList';

describe("Check if page is in last group", () => {

  test("startpage of last group ", () => {
    const groupNum = 3;
    const displaySize = 5;
    let groupStartPage = getGroupStartPage(groupNum, hrefList, displaySize) ; 
    expect(isPageInLastGroup(groupStartPage, hrefList, displaySize)).toBe(true);
  }),
  test("end page of last group ", () => {
    const groupNum = 3;
    const displaySize = 5;
    let groupStartPage = getGroupStartPage(groupNum, hrefList, displaySize) ; 
    let groupEndPage = getGroupEndPage(groupStartPage, displaySize) ; 
    expect(isPageInLastGroup(groupStartPage, hrefList, displaySize)).toBe(true);
  }),
  test("neg-test: 1st page of group 1 (not last group) ", () => {
    const displaySize = 5;
    let groupStartPage = 1; 
    expect(isPageInLastGroup(groupStartPage, hrefList, displaySize)).toBe(false);
  }),
  test("neg-test: 1st page of group 2 (not last group) ", () => {
    const displaySize = 5;
    let groupStartPage = 1; 
    expect(isPageInLastGroup(groupStartPage, hrefList, displaySize)).toBe(false);
  })

});