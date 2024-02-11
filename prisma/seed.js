const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const password = bcrypt.hashSync("123456");

const userData = [
  {
    name: "Andy",
    lname: "Woodsum",
    username: "bang",
    password,
    email: "pongpornbig@gmail.com",
    address: ""
  },
];

const run = async () => {
  try {
    await prisma.user.createMany({
      data: userData,
    });
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await prisma.$disconnect();
  }
};

run();
