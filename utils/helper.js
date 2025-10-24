// utils/helper.js
exports.Helper = class Helper {
  static async wait(seconds) {
    console.log(`⏳ Waiting for ${seconds} seconds...`);
    await new Promise(res => setTimeout(res, seconds * 1000));
  }

  static async takeScreenshot(page, name = 'screenshot') {
    await page.screenshot({ path: `screenshots/${name}.png` });
    console.log(`📸 Screenshot saved: ${name}.png`);
  }
};
