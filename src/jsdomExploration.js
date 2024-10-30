const { JSDOM } = require("jsdom");

/**
 * Fetches a website.
 * @param {String} url The url of a website.
 * @returns An Object of type Response.
 */
async function fetchWebsite(url) {
  try {
    const response = await fetch(url, { mode: "no-cors" });
    return response;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

/**
 * Processes the HTML text that is wrapped in a Response
 * and returns the end result wrapped in an Object.
 * @param {Response} response An Http response
 * @returns An Object containing the summary stat
 */
function processWebsite(response) {
  const dom = new JSDOM(response.text());
  const document = dom.window.document;
  const divCollection = document.getElementsByTagName("div");
  const ulCollection = document.getElementsByTagName("ul");
  const imgCollection = document.getElementsByTagName("img");
  const aLinkCollection = document.getElementsByTagName("a");
  const summaryStat = {
    div: divCollection.length,
    ul: ulCollection.length,
    img: imgCollection.length,
    a: aLinkCollection.length,
  };
  return summaryStat;
}

module.exports = { fetchWebsite, processWebsite };
