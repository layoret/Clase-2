var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
//var morgan = require('morgan');
//var winston = require('winston');
var bodyParser=require("body-parser");
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//var rulesRouter = require('./routes/rulestest1');
//var rulesDefault=require('./routes/default');
var fs=require('fs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//app.use(logger('dev'));
//var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
//app.use(morgan(':date[web] :remote-addr :remote-user :status :method :url :response-time'/*,{stream: accessLogStream}*/));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

/*app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rules1', rulesRouter);
app.use('/default', rulesDefault);*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/*app.use('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use('*', (req, res, next) => {
  console.log(req.body)
})

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
