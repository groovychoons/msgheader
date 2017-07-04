import { MSGHeaderPage } from './app.po';

describe('msgheader App', () => {
  let page: MSGHeaderPage;

  beforeEach(() => {
    page = new MSGHeaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
