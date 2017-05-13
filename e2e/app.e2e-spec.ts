import { BillingNgrxPage } from './app.po';

describe('billing-ngrx App', () => {
  let page: BillingNgrxPage;

  beforeEach(() => {
    page = new BillingNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
