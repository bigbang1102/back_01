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

const consultData = [
  { details: 'M3-23', price: '255', quantity: '10', userId: 1 },
  { details: 'F1-10', price: '258', quantity: '10', userId: 2 },
  { details: 'F8-11', price: '555', quantity: '10', userId: 2 },

]

const run = async () => {
  try {
    await prisma.user.createMany({
      data: userData,
    });
    await prisma.consult.createMany({
      data: consultData
    })

  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await prisma.$disconnect();
  }
};

run();
