const { Builder, By } = require("selenium-webdriver");

/**
 * Fetches a website, processes its content, and returns
 * summary data wrapped in an object
 * @param {String} url
 * @returns An Object
 */
async function getSiteData(url) {
  try {
    const driver = new Builder().forBrowser("chrome").build();
    const promise = await driver.get(url);
    const aLinkCollection = await driver.findElements(By.css("a"));
    const divCollection = await driver.findElements(By.css("div"));
    const imgCollection = await driver.findElements(By.css("img"));
    const ulCollection = await driver.findElements(By.css("ul"));
    await driver.close();

    return {
      div: divCollection.length,
      ul: ulCollection.length,
      img: imgCollection.length,
      a: aLinkCollection.length,
    };
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports = getSiteData;
