const userQueries = require("./user");
const prismaSessionStore = require("./sessionStore");
const directoryQueries = require("./directory");
const fileQueries = require("./file");

module.exports = {
  prismaSessionStore,
  ...userQueries,
  ...directoryQueries,
  ...fileQueries,
};
