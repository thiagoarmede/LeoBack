var express = require("express");
var morgan = require("morgan");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var bot = require("./routes/v0/bot");
var dash = require("./routes/v0/dash");
var DomainVerify = require("./routes/domainverify");
var config = require("./others/config");

var app = express();
var cors = require("cors");

var DB = require("./database/db");

DB.connect();

app.locals.models = DB.models;

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/v0/bot", bot);
app.use("/v0/dash", dash);
app.use("/", DomainVerify);
app.set("jwtSecret",config.jwtSecret);

app.use(morgan('dev'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');

  res.header("Access-Control-Allow-Origin", "*");
  res.json({ error: true, message: err.message });
});

module.exports = app;
