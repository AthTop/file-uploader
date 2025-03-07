const userQueries = require("./user");
const prismaSessionStore = require("./sessionStore");
const directoryQueries = require("./directory");

module.exports = {
  prismaSessionStore,
  ...userQueries,
  ...directoryQueries,
};
