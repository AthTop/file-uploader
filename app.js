require("dotenv").config();
const { prismaSessionStore } = require("./db");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const registerRoute = require("./routes/register");
const indexRoute = require("./routes/index");
const successRoute = require("./routes/success");
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");
const uploadRoute = require("./routes/upload");
const directoryRoute = require("./routes/directory");
const fileRoute = require("./routes/file");

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
app.use((req, res, next) => {
  res.locals.siteTitle = "Fileupload";
  res.locals.currentUser = req.user;
  next();
});

// Routes
app.use("/register", registerRoute);
app.use("/success", successRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/upload", uploadRoute);
app.use("/directory", directoryRoute);
app.use("/file", fileRoute);
app.use("/", indexRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express server running on ${PORT}`));
