const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const clausController = require('../controllers/Claus-controller')

router.get('/claust', authenticate, clausController.getByUser)
router.get('/all-status', authenticate, clausController.getAllStatus)
router.post('/addclaus', authenticate, clausController.createClaus)
router.put('/:id', authenticate, clausController.updateClaus)
router.delete('/:id', authenticate, clausController.deleteClaus)

module.exports = router