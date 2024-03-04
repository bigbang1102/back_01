const db = require('../models/db')
const { Status } = require('@prisma/client')
// exports.getClaus = async (req, res, next) => {
//   try {
//     const claus = await db.claus.findMany()
//     res.status(200).json(claus)
//   } catch (error) {
//     next(error)
//   }
// }

exports.getByUser = async (req, res, next) => {
  try {
    const claust = await db.claus.findMany({
      where: { userId: req.user.id }
    })
    res.json({ claust })
  } catch (err) {
    next(err)
  }
}


exports.createClaus = async (req, res, next) => {
  // validate req.body
  const data = req.body
  try {
    const rs = await db.claus.create({
      data: { ...data, userId: req.user.id }
    })
    res.json({ msg: 'Create OK', result: rs })
  } catch (err) {
    next(err)
  }
}

exports.updateClaus = async (req, res, next) => {
  // validate req.params + req.body
  const { id } = req.params
  const data = req.body
  try {
    const rs = await db.claus.update({
      data: { ...data },
      where: { id: +id, userId: req.user.id }
    })
    res.json({ msg: 'Update ok', result: rs })
  } catch (err) {
    next(err)
  }
}

exports.deleteClaus = async (req, res, next) => {
  const { id } = req.params
  try {
    const rs = await db.claus.delete({ where: { id: +id, userId: req.user.id } })
    res.json({ msg: 'Delete ok', result: rs })
  } catch (err) {
    next(err)
  }
}

exports.getAllStatus = async (req, res, next) => {
  res.json({ status: Object.values(Status) })
}
