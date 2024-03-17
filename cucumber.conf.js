const {
  Before,
  BeforeAll,
  AfterAll,
  After,
  setDefaultTimeout
} = require('@cucumber/cucumber')
const { chromium } = require('playwright')

setDefaultTimeout(60000)

BeforeAll(async function () {
  global.browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
    channel:'chrome',
  });
});

// close the browser
AfterAll(async function () {
  await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
  global.context = await global.browser.newContext( {
    use: {
      video: 'on',
      dir: 'videos/' 
    }
  });
  global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
  await global.page.close();
  await global.context.close();
});
