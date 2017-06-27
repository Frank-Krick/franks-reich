import { FranksReichPage } from './app.po';

describe('franks-reich App', () => {
  let page: FranksReichPage;

  beforeEach(() => {
    page = new FranksReichPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
