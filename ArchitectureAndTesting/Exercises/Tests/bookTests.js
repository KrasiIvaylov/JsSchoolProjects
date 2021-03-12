const {chromium} = require('playwright-chromium');
const {expect} = require('chai');

let browser, page; // Declare reusable variables

describe('E2E tests', function () {
    this.timeout(6000);
    before(async () => {
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    it('loads static page', async () => {
        await page.goto('http://localhost:3000/');
        await page.screenshot({path: 'index.png'});
    });

    it('shows books', async () => {

            await page.goto('http://localhost:3000/');

            const x = await Promise.all([
                    page.click('text=LOAD ALL BOOKS')],
                page.waitForRequest('**/jsonstore/books'));

           
    });
});