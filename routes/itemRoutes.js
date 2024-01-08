const express = require('express')
const router = express.Router()
const itemController = require('../controller/itemController')

router.get('/create', itemController.item_create_get)
router.post('/create', itemController.item_create_post)
router.get('/:id', itemController.item_details)
router.delete('/:id', itemController.item_delete)
router.put('/:id', itemController.item_update)

module.exports = router

