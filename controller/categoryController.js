const Category = require('../models/category')
const Item = require('../models/item')

const category_create_get = (req, res) => {
    res.render('categories/create', {title: 'Create a category'})
}

const category_create_post = (req, res) => {
    const category = new Category(req.body)
    category.save()
    .then((result) => {
        res.redirect('/' )
    })
    .catch((err) => {
        console.log(err)
    })
}

const category_details = (req, res) => {
    const id = req.params.id
    Category.findById(id)
    .then(result => {
        res.render('categories/details', {category: result, title: 'Category details'})
    })
    .catch(err => {
        // console.log(err)
        res.status(404).render('404', { title: 'Page not found'} )
    })
}

const category_delete = (req, res) => {
    const id = req.params.id
    const category = req.params.categoryName
    // find all items with corresponding category and delete it
    // TODO: This will delete all items in the category. Are you sure you want to delete this category?
    Item.deleteMany({ category: category })
    .then((deleteItemsResult) => {
        // console.log(`Deleted ${deleteItemsResult.deletedCount} items with category name: ${category}`)
        return Category.findByIdAndDelete(id)
    })
    .then((deletedCategory) => {
        if (!deletedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json({redirect: '/'})
    })
    .catch((err) => {
        console.log(err)
    })
}

const category_update = (req, res) => {
    const categoryId = req.params.id;
    const { newName, description, prevName } = req.body;
    console.log(`newName: ${newName}, description: ${description}, prevName: ${prevName}`)
    Category.findByIdAndUpdate(categoryId, {name: newName, description }, {new: true})
    .then(updatedCategory => {
        // when category name is changed, update the category name for the items in that category
        return Item.updateMany({ category: prevName}, {$set: { category: newName} })
    })
    .then(() => {
        res.json({ redirect: `/category/${categoryId}`})
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = {
    category_create_get,
    category_create_post,
    category_details,
    category_delete,
    category_update,
}