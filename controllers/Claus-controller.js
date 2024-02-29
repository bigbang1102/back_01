const db = require('../models/db')

exports.getClaus = async (req, res, next) => {
  try {
    const claus = await db.claus.findMany()
    res.status(200).json(claus)
  } catch (error) {
    next(error)
  }
}

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
exports.createclaus = async (req, res, next) => {
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
  try {
    const claus = await db.claus.update({
      where: {
        id: req.params.id
      },
      data: {
        details: req.body.details,
        price: req.body.price,
        quantity: req.body.quantity
      }
    })
    res.status(200).json(claus)
  } catch (error) {
    next(error)
  }
}

exports.deleteClaus = async (req, res, next) => {
  try {
    const claus = await db.claus.delete({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(claus)
  } catch (error) {
    next(error)
  }
}
exports.getAllStatus = async (req, res, next) => {
  res.json({ status: Object.values(Status) })
}