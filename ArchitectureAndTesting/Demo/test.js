const { chromium } = require('playwright-chromium');
const { expect } = require('chai');


let browser, page; // Declare reusable variables
describe('E2E tests', function () {
    // this.timeout(6000);
    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('loads static page', async () => {
        await page.goto('http://localhost:3000/');

        const content = await page.textContent('.accordion .head span');
        expect(content).to.contains('Scalable Vector Graphics')

    });

    it('toggles content', async () => {
        await page.goto('http://localhost:3000/');
        await page.click('text=More');

        await page.waitForSelector('.extra p');

        const visible = await page.isVisible('.extra p');
        expect(visible).to.be.true;
    });
});