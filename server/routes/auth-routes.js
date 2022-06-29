const router = require("express").Router();
const passport = require("passport");

// let CLIENT_HOME_PAGE_URL = "http://localhost:3000";
let CLIENT_HOME_PAGE_URL = process.env.HOSTED_CLIENT_URL;

if (
  process.env.NODE_ENV == "DEVELOPMENT" ||
  process.env.NODE_ENV == "development"
) {
  CLIENT_HOME_PAGE_URL = "http://localhost:3000";
}

console.log(CLIENT_HOME_PAGE_URL);
// when login is successful, retrieve user info
router.get("/", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies,
    });
  }
});

// when login is successful, retrieve user info
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies,
    });
  }
});

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate.",
  });
});

// When logout, redirect to client
router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Logout successful" });
});

// auth with twitter
router.get("/twitter", passport.authenticate("twitter"));

// redirect to home page after successfully login via twitter
router.get(
  "/twitter/redirect",
  passport.authenticate("twitter", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: "/auth/login/failed",
  })
);

module.exports = router;
