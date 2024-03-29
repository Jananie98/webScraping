import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({
        headless: false, // we can see what is happenning
        defaultViewport: null,
    });
    const page = await browser.newPage();

    await page.goto("http://machadopedro.com/", {
        waitUntil: "domcontentloaded",
    });

    await page.screenshot({path:"websitecapture.pang"});

  const grabTechnologies = await page.evaluate(() => {
    const techTags = document.querySelectorAll(".row.back-end ul li");
    let technologies = [];
    techTags.forEach((tag) => {
        technologies.push(tag.innerText)
    });
    return technologies;
    });

    console.log(grabTechnologies)
    await browser.close();
  })();
