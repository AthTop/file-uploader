const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { validatePassword } = require("../lib/passwordUtils");
const db = require("../db");

const verifyCallback = async (username, password, done) => {
  try {
    const user = await db.getUserByUsername(username);
    if (!user) {
      return done(null, false, { message: "Incorrect username or password" });
    }
    if (validatePassword(password, user.password_hash)) {
      return done(null, user);
    } else {
      return done(null, false, { message: "Incorrect username or password" });
    }
  } catch (err) {
    return done(err);
  }
};

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await db.getUserById(userId);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (err) {
    return done(err);
  }
});
