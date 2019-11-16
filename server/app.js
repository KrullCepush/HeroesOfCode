const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

mongoose.connect("mongodb://localhost:27017/Heroes-of-Code", {
  useNewUrlParser: true
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    store: new MongoStore({
      url: "mongodb://localhost:27017/Heroes-of-Code",
      stringify: false
    }),
    cookie: {
      maxAge: 24 * 360000
    },
    secret: "react-01-log-collection",
    resave: true,
    saveUninitialized: false
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
