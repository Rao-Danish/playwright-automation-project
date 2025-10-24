require('dotenv').config();

module.exports = {
  baseURL: process.env.BASE_URL,
  validUser: {
    username: process.env.VALID_USERNAME,
    password: process.env.VALID_PASSWORD
  },
  invalidUser: {
    username: process.env.INVALID_USERNAME,
    password: process.env.INVALID_PASSWORD
  }
};
