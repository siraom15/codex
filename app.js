var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRoute = require('./routes/indexRoute');
var playgroundRoute = require('./routes/playgroundRoute');
// Route แยก
var basiclessonRoute = require('./routes/lesson/basicRoute');
var stylelessonRoute = require('./routes/lesson/styleRoute');
var imagelessonRoute = require('./routes/lesson/imageRoute');
var linklessonRoute = require('./routes/lesson/linkRoute');
var layoutlessonRoute = require('./routes/lesson/layoutRoute');
var bootstraplessonRoute = require('./routes/lesson/bootstrapRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRoute);
app.use('/playground',playgroundRoute);
app.use('/lesson/basic', basiclessonRoute);
app.use('/lesson/style', stylelessonRoute);
app.use('/lesson/image', imagelessonRoute);
app.use('/lesson/link', linklessonRoute);
app.use('/lesson/layout', layoutlessonRoute);
app.use('/lesson/bootstrap', bootstraplessonRoute);

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
