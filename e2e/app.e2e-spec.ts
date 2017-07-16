import { GittestPage } from './app.po';

describe('gittest App', () => {
  let page: GittestPage;

  beforeEach(() => {
    page = new GittestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
