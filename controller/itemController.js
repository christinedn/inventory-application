const Category = require('../models/category')
const Item = require('../models/item')

const item_create_get = (req, res) => {
    Category.find()
    .then((result) => {
      res.render('items/create', { categories: result, title: 'Create an item' } )
    })
    .catch((err) => {
      console.log(err)
    })
}

const item_create_post = (req, res) => {
    const item = new Item(req.body)

    item.save()
    .then((result) => {
        res.redirect('/')
    })
    .catch((err) => {
        console.log(err)
    })
}

const item_details = async (req, res) => {
    try {
        // pass categories down to details because we will need the category name in the edit dialog
        const categories = await Category.find()
        
        const id = req.params.id
        Item.findById(id)
        .then(result => {
            res.render('items/details', {item: result, categories, title: 'Item details'})
        })
        .catch(err => {
            console.log(err)
        })
    } catch (err) {
        console.log(err)
    }
    
}

const item_delete = (req, res) => {
    const id = req.params.id
    Item.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/'})
    })
    .catch(err => {
        console.log(err)
    })
}

const item_update = (req, res) => {
    const itemId = req.params.id;
    const { name, description, category, price, numberInStock } = req.body;

    Item.findByIdAndUpdate(itemId, {name, description, category, price, numberInStock }, {new: true})
    .then(updatedItem => {
        res.json({
            redirect: `/item/${updatedItem._id}`
        })
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = {
    item_create_get,
    item_create_post,
    item_details,
    item_delete,
    item_update,
}