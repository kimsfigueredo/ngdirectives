import { NgdirectivesPage } from './app.po';

describe('ngdirectives App', () => {
  let page: NgdirectivesPage;

  beforeEach(() => {
    page = new NgdirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
