const express = require('express')
const router = express.Router()
const categoryController = require('../controller/categoryController')

router.get('/create', categoryController.category_create_get)
router.post('/create', categoryController.category_create_post)
router.get('/:id', categoryController.category_details)
router.delete('/:id/:categoryName', categoryController.category_delete)
router.put('/:id', categoryController.category_update)
module.exports = router