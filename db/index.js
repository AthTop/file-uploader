const userQueries = require("./user");
const sessionQuery = require("./sessionStore");
module.exports = {
  ...userQueries,
  ...sessionQuery,
};
