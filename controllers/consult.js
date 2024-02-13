
const db = require('../models/db')

exports.getByUser = async (req, res, next) => {
  try {
    const consult = await db.consult.findMany({
      where: { userId: req.user.id }
    })
    res.json({ consult })
  } catch (err) {
    next(err)
  }
}

exports.createConsult = async (req, res, next) => {
  const data = { expert, comment } = req.body
  try {
    const rs = await db.consult.create({
      data: {
        expert: expert,
        comment: comment,
        userId: req.user.id
      }
    });
    res.json({ msg: 'สร้างข้อมูลเรียบร้อย', result: rs })
  } catch (err) {
    next(err)
  }
}

exports.updateConsult = async (req, res, next) => {
  const { id } = req.params
  const data = { expert, comment } = req.body
  try {
    const rs = await db.consult.update({
      data: {
        expert: expert,
        comment: comment,
        userId: req.user.id
      },
      where: { id: +id, userId: req.user.id }
    })
    res.json({ msg: 'อัปเดตข้อมูลเรียบร้อย', result: rs })
  } catch (err) {
    next(err)
  }
}

exports.deleteConsult = async (req, res, next) => {
  const { id } = req.params
  try {
    const rs = await db.consult.delete({ where: { id: +id, userId: req.user.id } })
    res.json({ msg: 'ลบข้อมูลเรียบร้อย', result: rs })
  } catch (err) {
    next(err)
  }
}