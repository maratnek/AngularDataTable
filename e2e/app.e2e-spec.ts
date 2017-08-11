import { Angular2DataTablesPage } from './app.po';

describe('angular2-data-tables App', () => {
  let page: Angular2DataTablesPage;

  beforeEach(() => {
    page = new Angular2DataTablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
