const prisma = require("./prisma");
const cron = require("node-cron");

const createShare = async (directory, expires) => {
  const share = await prisma.shareSession.create({
    data: {
      directoryId: directory.id,
      expiresAt: expires,
    },
    include: {
      directory: true,
    },
  });
  return share;
};

const getShareById = async (id) => {
  const share = await prisma.shareSession.findUnique({
    where: {
      id: id,
    },
    include: {
      directory: {
        include: {
          subDirectories: true,
          files: true,
        },
      },
    },
  });
  return share;
};

cron.schedule("0 0 * * *", async () => {
  await prisma.shareSession.deleteMany({
    where: {
      expiresAt: {
        lt: new Date(),
      },
    },
  });
});

module.exports = { createShare, getShareById };
