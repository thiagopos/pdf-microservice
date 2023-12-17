import puppeteer from "puppeteer";

const defaultOptions = {
  format: "A4",
  landscape: true,  
  printBackground: true,
};

async function htmlToPdf(html, options = defaultOptions) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });

  const pdfBuffer = await page.pdf(options);

  await browser.close();

  return pdfBuffer;
}

export default htmlToPdf;
