var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const categories = req.categories;
  const items = req.items;
  res.render('index', { title: 'Inventory Application', categories: categories, items: items });
});

module.exports = router;
