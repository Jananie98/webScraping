import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({
        headless: false, // we can see what is happenning
        defaultViewport: null,
    });
    const page = await browser.newPage();

    await page.goto("http://quotes.toscrape.com/", {
        waitUntil: "domcontentloaded",
    });

    await page.click('body > div > div.row.header-box > div.col-md-4 > p > a')
    await page.type("#username","Jananie", {delay:500});
    await page.type("#password","123456789", {delay:500});

    // await browser.close();
  })();
