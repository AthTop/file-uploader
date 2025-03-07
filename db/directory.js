const prisma = require("./prisma");

const getDirectoryById = async (id) => {
  const directory = await prisma.directory.findUnique({
    where: {
      id: id,
    },
    include: {
      subDirectories: true,
      files: true,
    },
  });
  return directory;
};

const createDirectory = async (name, parentId, ownerId) => {
  const newDir = await prisma.directory.create({
    data: {
      name: name,
      parentDirectoryId: parentId,
      ownerId: ownerId,
    },
  });
  return newDir;
};

module.exports = { getDirectoryById, createDirectory };
