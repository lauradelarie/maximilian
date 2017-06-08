import { MaximilianPage } from './app.po';

describe('maximilian App', () => {
  let page: MaximilianPage;

  beforeEach(() => {
    page = new MaximilianPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
