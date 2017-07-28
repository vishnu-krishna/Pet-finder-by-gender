import { FindPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('find App', function () {
  let page: FindPage;

  beforeEach(() => {
    page = new FindPage();
  });

  it("should click the find pets button and fetch the result", () => {
    browser.get("/");
    let findButton = element(by.css("#btnFind"));
    findButton.click();
    let result = element.all(by.css(".find-pets"));
    expect(result).toBeTruthy();
  });
  it("should click the find pets button and male pets section should be present", () => {
    browser.get("/");
    let findButton = element(by.css("#btnFind"));
    findButton.click();
    let result = element.all(by.css(".male-pets"));
    expect(result).toBeTruthy();
  });
  it("should click the find pets button and female pets section should be present", () => {
    browser.get("/");
    let findButton = element(by.css("#btnFind"));
    findButton.click();
    let result = element.all(by.css(".female-pets"));
    expect(result).toBeTruthy();
  });
});
