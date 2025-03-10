const prisma = require("./prisma");

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

module.exports = { createShare, getShareById };
