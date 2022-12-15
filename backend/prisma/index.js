const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addUser = async (req, res) => {
  try {
    const userData = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.name,
        password: req.body.password,
      },
    });
    console.log(userData);

    return res
      .status(201)
      .json({ msg: 'User Registration is successfully done' });
  } catch (error) {
    return res.status(400).json({ msg: 'User Registration was unsuccessfull' });
  }
};

const fetchOneUser = async (req, res) => {
  try {
    const userData = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });

    return res.status(201).json(userData);
  } catch (error) {
    return res.status(400).json({ msg: 'Error Fetching user data' });
  }
};

const fetchAllUsers = async (req, res) => {
  try {
    const userData = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });

    return res.status(201).json(userData);
  } catch (error) {
    return res
      .status(400)
      .json({ msg: 'Error Fetching user data collections' });
  }
};

module.exports = { addUser, fetchOneUser, fetchAllUsers };
