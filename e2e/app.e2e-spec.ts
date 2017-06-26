import { Route1Page } from './app.po';

describe('route1 App', () => {
  let page: Route1Page;

  beforeEach(() => {
    page = new Route1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
