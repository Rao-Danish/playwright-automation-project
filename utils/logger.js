exports.Logger = class Logger {
  // static timestamp() {
  //   return new Date().toISOString().replace('T', ' ').split('.')[0];
  // }

  static info(message) {
    console.log(`ℹ️  INFO: ${message}`);
  }

  static success(message) {
    console.log(`✅ SUCCESS: ${message}`);
  }

  static error(message) {
    console.error(`❌ ERROR: ${message}`);
  }
};
