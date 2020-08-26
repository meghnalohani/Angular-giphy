import { browser, by, element, $ } from 'protractor';

export class AppPage {

  navigateToHomePage() {
    return browser.get('/');
  }
  getTitleText() {
    return element(by.css('title'));
  }
  getToolbar() {
    return element(by.css('toolbar-class'));
  }
  getLoginButton() {
    return element(by.buttonText('Login'));
  }
  getLinks() {
    return element(by.css('.header-link'));
  }
  getHeading() {
    return element(by.css('.heading'));
  }
  getCardContainer() {
    return element(by.css('.card-container'));
  }
  getCard() {
    return element(by.css('mat-card'));
  }
  getCardButton() {
    return element(by.css('mat-mini-fab'));
  }
  getCardImage() {
    return element(by.css('mat-card-image'));
  }
  getFooter() {
    return element(by.css('.footer'));
  }
  getFooterLinks() {
    return $('.social-media');
  }
  getFooterForm() {
    return $('.subscribe');
  }

}
