import puppetteer from 'puppeteer';

jest.setTimeout(5000); // default puppeteer timeout

describe('Popover form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 50,
      devtools: false,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Show and Remove popover', async () => {
    await page.goto(baseUrl);

    const button = await page.$('.button');

    await button.click();
    await page.waitForSelector('.popover');

    const popoverHeader = await page.$('.popover-header');
    const popoverBody = await page.$('.popover-body');

    const headerText = await page.evaluate((el) => el.textContent, popoverHeader);
    const bodyText = await page.evaluate((el) => el.textContent, popoverBody);

    expect(headerText.trim()).toBeTruthy();
    expect(bodyText.trim()).toBeTruthy();
    
  });
});
