const getSiteData = require("../src/seleniumExploration");
const TIME_IN_SECONDS = 20 * 1000;
jest.setTimeout(TIME_IN_SECONDS);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

afterEach(async () => {
  await delay(5000); // 5 seconds delay
});

describe("Testing website processing with Selenium", () => {
  test("Website processing with random site #1", async () => {
    const url = "https://linuxmint.com/";
    const summaryObj = await getSiteData(url);

    expect(summaryObj).toBeInstanceOf(Object);
    expect(Object.keys(summaryObj).length).toEqual(4);
    expect(summaryObj).toHaveProperty("div");
    expect(summaryObj).toHaveProperty("img");
    expect(summaryObj).toHaveProperty("a");
    expect(summaryObj).toHaveProperty("ul");
    expect(summaryObj.a).toBeGreaterThanOrEqual(0);
    expect(summaryObj.div).toBeGreaterThanOrEqual(0);
    expect(summaryObj.img).toBeGreaterThanOrEqual(0);
    expect(summaryObj.ul).toBeGreaterThanOrEqual(0);
  });

  test("Website processing with random site #2", async () => {
    const url = "https://www.npmjs.com/";
    const summaryObj = await getSiteData(url);

    expect(summaryObj).toBeInstanceOf(Object);
    expect(Object.keys(summaryObj).length).toEqual(4);
    expect(summaryObj).toHaveProperty("div");
    expect(summaryObj).toHaveProperty("img");
    expect(summaryObj).toHaveProperty("a");
    expect(summaryObj).toHaveProperty("ul");
    expect(summaryObj.a).toBeGreaterThanOrEqual(0);
    expect(summaryObj.div).toBeGreaterThanOrEqual(0);
    expect(summaryObj.img).toBeGreaterThanOrEqual(0);
    expect(summaryObj.ul).toBeGreaterThanOrEqual(0);
  });

  test("Website processing with random site #3", async () => {
    const url = "https://cdnjs.com/";
    const summaryObj = await getSiteData(url);

    expect(summaryObj).toBeInstanceOf(Object);
    expect(Object.keys(summaryObj).length).toEqual(4);
    expect(summaryObj).toHaveProperty("div");
    expect(summaryObj).toHaveProperty("img");
    expect(summaryObj).toHaveProperty("a");
    expect(summaryObj).toHaveProperty("ul");
    expect(summaryObj.a).toBeGreaterThanOrEqual(0);
    expect(summaryObj.div).toBeGreaterThanOrEqual(0);
    expect(summaryObj.img).toBeGreaterThanOrEqual(0);
    expect(summaryObj.ul).toBeGreaterThanOrEqual(0);
  });
});
