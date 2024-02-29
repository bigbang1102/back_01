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

const todoData = [
  { title: 'Learn HTML', dueDate: new Date(), userId: 1 },
  { title: 'Learn CSS', dueDate: new Date(), userId: 1 },
  { title: 'Learn JS', dueDate: new Date(), userId: 2 },
  { title: 'Learn React', dueDate: new Date(), userId: 3 },

]

const run = async () => {
  await prisma.user.createMany({
    data: userData

  })
  await prisma.todo.createMany({
    data: todoData
  })
}

run()
