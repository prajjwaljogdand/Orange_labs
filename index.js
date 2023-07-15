const puppeteer = require("puppeteer");

/**
 * Function to automate user actions on a website using Puppeteer.
 */
async function main() {
  // Launch Puppeteer with a non-headless, user-visible browser
  const browser = await puppeteer.launch({
    headless: false, // Set to true to run in headless mode (without a visible browser window)
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", // Provide the correct path to your Chromium installation
  });

  const page = await browser.newPage();

  // Set the viewport size to 1920x1080 to make the browser window fullscreen
  await page.setViewport({ width: 1920, height: 1080 });

  const baseURL = "https://swap.defillama.com/";

  // Navigate to the specified page on the website
  const pageIWannaGo =
    "?chain=arbitrum&from=0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f&to=0xaf88d065e77c8cc2239327c5edb3a432268e5831";
  await page.goto(baseURL + pageIWannaGo);

  // Find the input field and fill it with the value "12"
  const input = await page.$("input.css-lv0ed5");
  await input.click({ clickCount: 3 }); // Triple click to select the existing value
  await input.type("12"); // Enter "12" in the input field

  // Wait for the section with class "sc-d413ea6e-0" to appear
  await page.waitForSelector(".sc-d413ea6e-0");

  // Select the second option in the section with class "sc-d413ea6e-0"
  const secondOption = await page.$$(".sc-d413ea6e-0");
  await secondOption[1].click();

  // Keep the browser window open
  await new Promise(() => {});
}

main();
