var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
require('dotenv').config()

// routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const categoryRoutes = require('./routes/categoryRoutes')
const itemRoutes = require('./routes/itemRoutes')

// middleware
const {categoriesMiddleware, itemsMiddleware } = require('./middleware/dbMiddleware')

var app = express();

// connect to mongodb
const dbURI = process.env.DB_URI
mongoose.connect(dbURI)
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for accepting form data
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(categoriesMiddleware)
app.use(itemsMiddleware)

app.use('/category', categoryRoutes)
app.use('/item', itemRoutes)
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
