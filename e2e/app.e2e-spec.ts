import { FindPage } from './app.po';

describe('find App', function() {
  let page: FindPage;

  beforeEach(() => {
    page = new FindPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
