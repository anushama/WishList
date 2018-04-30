import { WishlistAppPage } from './app.po';

describe('wishlist-app App', function() {
  let page: WishlistAppPage;

  beforeEach(() => {
    page = new WishlistAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
