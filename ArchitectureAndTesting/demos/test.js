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

    it('tests it again', async () => {
        await page.goto('http://localhost:3000/');
        const content = await page.textContent('.accordion .head span');
        expect(content).to.contain('Scalable Vector Graphics');
    });

    it('toggles content', async () => {
        await page.goto('http://localhost:3000/');
        await page.click('#main:first-child >> text=More');
        await page.waitForSelector('#main:first-child >> .extra p');

        const visible = await page.isVisible('#main:first-child >> .extra p');
        expect(visible).to.be.true;
    });


});
