require("dotenv").config();
const { prismaSessionStore } = require("./db");
const express = require("express");
const express = require("express");
const session = require("express-session");
const passport = require("passport");

const app = express();

// App config
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Session
app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, //ms
    },
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: prismaSessionStore,
  })
);

// Passport
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

// Middleware

// Routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => `Express server running on ${PORT}`);
