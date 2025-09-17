require('dotenv').config();

const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  } catch (err) {
    console.error("getUsers error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getUsersById = async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Invalid user id" });
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.error("getUsersById error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getUsers,
  getUsersById,
};
