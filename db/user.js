const prisma = require("./prisma");

const getUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return user;
};

const getUserByUsername = async (username) => {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  return user;
};

const createUser = async (username, password_hash) => {
  await prisma.user.create({
    data: {
      username: username,
      password_hash: password_hash,
      directories: {
        create: {
          name: "root",
        },
      },
    },
  });
};

module.exports = {
  getUserById,
  getUserByUsername,
  createUser,
};
