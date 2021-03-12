const {chromium} = require('playwright-chromium');
const {assert} = require('chai');

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

    it('shows texts', async () => {
        await page.goto('http://localhost:3000/');

        const x = await Promise.all([
            page.click('text=Refresh')],
            page.waitForRequest('**/jsonstore/messenger'));

        await page.waitForTimeout(100);
        const data = await page.$eval('textarea[id="messages"]', e => e.value);
        const e = `Spami: Hello, are you there?\nGarry: Yep, whats up :?\nSpami: How are you? Long time no see? :)\nGeorge: Hello, guys! :))\nSpami: Hello, George nice to see you! :)))`;
        assert.equal(data, e);
    });

    it('sends a message', async () => {
        await page.goto('http://localhost:3000/');


        const x = await Promise.all([
                page.click('text=Send')],
            page.waitForRequest('**/jsonstore/messenger'));

        await page.waitForTimeout(100);
        const data = await page.$eval('textarea[id="messages"]', e => e.value);

        const e = '';
        assert.equal(data, e);
    });

});