const { fetchWebsite, processWebsite } = require("../src/jsdomExploration");

describe("Testing website fetching", () => {
  test("Fetching data from random site #1", async () => {
    const url = "https://linuxmint.com/";
    const response = await fetchWebsite(url);
    expect(response).toBeInstanceOf(Response);
  });

  test("Fetching data from random site #2", async () => {
    const url = "https://www.npmjs.com/";
    const response = await fetchWebsite(url);
    expect(response).toBeInstanceOf(Response);
  });

  test("Fetching data from random site #3", async () => {
    const url = "https://cdnjs.com/";
    const response = await fetchWebsite(url);
    expect(response).toBeInstanceOf(Response);
  });

  test("Fetching data from empty url string", async () => {
    const url = "";
    expect(() => fetchWebsite(url).toThrow(error));
  });

  test("Fetching data from undefined url", async () => {
    const url = undefined;
    expect(() => fetchWebsite(url).toThrow(error));
  });

  test("Fetching data from null", async () => {
    const url = null;
    expect(() => fetchWebsite(url).toThrow(error));
  });
});

describe("Testing website processing", () => {
  test("Website processing for random site #1", async () => {
    const url = "https://linuxmint.com/";
    const response = await fetchWebsite(url);
    const summaryObj = processWebsite(response);

    expect(summaryObj).toBeInstanceOf(Object);
    expect(Object.keys(summaryObj).length).toEqual(4);
    expect(summaryObj).toHaveProperty("div");
    expect(summaryObj).toHaveProperty("img");
    expect(summaryObj).toHaveProperty("a");
    expect(summaryObj).toHaveProperty("ul");
    expect(summaryObj.a).toEqual(0);
    expect(summaryObj.div).toBeGreaterThanOrEqual(0);
    expect(summaryObj.img).toBeGreaterThanOrEqual(0);
    expect(summaryObj.ul).toBeGreaterThanOrEqual(0);
  });

  test("Website processing for random site #2", async () => {
    const url = "https://www.npmjs.com/";
    const response = await fetchWebsite(url);
    const summaryObj = processWebsite(response);

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

  test("Website processing for random site #2", async () => {
    const url = "https://cdnjs.com/";
    const response = await fetchWebsite(url);
    const summaryObj = processWebsite(response);

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
