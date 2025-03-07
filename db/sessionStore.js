const prisma = require("./prisma");
const { PrismaSessionStore } = require("@quixo3/prisma-session-store");

const prismaSessionStore = new PrismaSessionStore(prisma, {
  checkPeriod: 2 * 60 * 1000, //ms
  dbRecordIdIsSessionId: true,
  dbRecordIdFunction: undefined,
});

module.exports = prismaSessionStore;
