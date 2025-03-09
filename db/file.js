const prisma = require("./prisma");

const createFileInDirectory = async (
  name,
  filePath,
  directoryId,
  userId,
  type,
  size,
  publicId
) => {
  await prisma.file.create({
    data: {
      name: name,
      directoryId: directoryId,
      ownerId: userId,
      location: filePath,
      size: size,
      type: type,
      publicId: publicId,
    },
  });
};

const getFileById = async (id) => {
  const file = await prisma.file.findUnique({
    where: {
      id: id,
    },
  });
  return file;
};

const updateFileName = async (name, id) => {
  await prisma.file.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });
};

const deleteFileById = async (id) => {
  await prisma.file.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  createFileInDirectory,
  getFileById,
  updateFileName,
  deleteFileById,
};
