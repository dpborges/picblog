import { getGroupStartPage } from '../paginatorFunctions';
import { hrefList } from './_hrefList';

describe("Get Start Page for given group number", () => {

  test("neg-test: when groupNum is undefined", () => {
    let groupNum; 
    const displaySize = 1;
    expect(getGroupStartPage(groupNum, hrefList, displaySize)).toEqual(1);
  }),
  test("neg-test: when groupNum is out of range", () => {
    let groupNum = 4; 
    const displaySize = 5;
    expect(getGroupStartPage(groupNum, hrefList, displaySize)).toEqual(1);
  }),
  test("when groupNum and displaySize are both 1", () => {
    const groupNum = 1; 
    const displaySize = 1;
    expect(getGroupStartPage(groupNum, hrefList, displaySize)).toEqual(1);
  }),
  test("when both groupNum and display size greater than 1", () => {
    const groupNum = 6; 
    const displaySize = 2;
    expect(getGroupStartPage(groupNum, hrefList, displaySize)).toEqual(11);
  }),
  test("when both groupNum and display size greater than 1", () => {
    const groupNum = 2; 
    const displaySize = 5;
    expect(getGroupStartPage(groupNum, hrefList, displaySize)).toEqual(6);
  })

});
