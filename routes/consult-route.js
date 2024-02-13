const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const consultController = require('../controllers/consult-controller')

router.get('/', authenticate, consultController.getByUser)
router.get('/all-status', authenticate, consultController.getAllStatus)
router.post('/', authenticate, consultController.createconsult)
router.put('/:id', authenticate, consultController.updateconsult)
router.delete('/:id', authenticate, consultController.deleteconsult)

module.exports = routernp