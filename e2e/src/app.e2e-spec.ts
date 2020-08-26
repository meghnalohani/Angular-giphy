import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('Angular Gipher aap', () => {
  let page: AppPage;
  var originalTimeout;


  beforeEach(() => {
    page = new AppPage();
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    page.navigateToHomePage();
  });

  it('should redirect to trending', () => {
    expect(browser.getCurrentUrl()).toContain('trending');
  });

  it('should contain a toolbar', () => {
    expect(page.getToolbar()).toBeTruthy();
  });

  it('toolbar should contain login button', () => {
    expect(page.getLoginButton()).toBeTruthy();
  });
  it('toolbar should contain links', () => {
    expect(page.getLinks()).toBeTruthy();
  });
  it('toolbar should contain a heading', () => {
    expect(page.getHeading()).toBeTruthy();
  });
  it('trending page should contain card container', () => {
    expect(page.getCardContainer()).toBeTruthy();
  });
  it('trending page should contain cards', () => {
    expect(page.getCard()).toBeTruthy();
  });
  it('card should contain a button', () => {
    expect(page.getCardButton()).toBeTruthy();
  });
  it('card should contain an image', () => {
    expect(page.getCardImage()).toBeTruthy();
  });
  it('should contain a footer', () => {
    expect(page.getFooter()).toBeTruthy();
  });
  it('footer should contain social links', () => {
    expect(page.getFooterLinks()).toBeTruthy();
  });
  it('footer should contain a form', () => {
    expect(page.getFooterLinks()).toBeTruthy();
  });
  

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
