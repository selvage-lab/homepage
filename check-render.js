const { chromium } = require("playwright");

async function checkRenderedContent() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3001", { waitUntil: "networkidle" });

  const content = await page.textContent("body");
  console.log("=== Playwright Rendered Content ===");
  console.log(content.slice(0, 500) + "... (truncated)");
  console.log("===================================");

  await browser.close();
}

checkRenderedContent();
