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

const updateDirectoryName = async (id, name) => {
  const updatedDir = await prisma.directory.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });
  return updatedDir;
};

const deleteDirectoryById = async (id) => {
  await prisma.directory.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getDirectoryById,
  createDirectory,
  updateDirectoryName,
  deleteDirectoryById,
};
