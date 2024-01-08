const Category = require('../models/category')
const Item = require('../models/item')

// Create a middleware function to fetch categories
const categoriesMiddleware = (req, res, next) => {
    Category.find()
      .then((categories) => {
        // Attach categories to the request object
        req.categories = categories;
        next();
      })
      .catch((err) => {
        console.log(err);
        // Handle error or pass an empty array if necessary
        req.categories = [];
        next();
      });
  };

// Create a middleware function to fetch items
const itemsMiddleware = (req, res, next) => {
    Item.find()
        .then((items) => {
        // Attach categories to the request object
            req.items = items;
            next();
        })
        .catch((err) => {
            console.log(err);
            // Handle error or pass an empty array if necessary
            req.items = [];
            next();
        });
};

module.exports = {
  categoriesMiddleware,
  itemsMiddleware,
}