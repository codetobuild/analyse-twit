require("dotenv").config();
const cookieSession = require("cookie-session");
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser"); // parse cookie header
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const authRoutes = require("./routes/auth-routes");
const twitterRoutes = require("./routes/twitter-routes");
const mongoose = require("mongoose");
const keys = require("./config/keys.copy");

require("./config/passport-setup");
// connect to mongodb
const connect = async () => {
  try {
    await mongoose.connect(keys.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// app.use(cors());
//response as Json
app.use(express.json());
//Parse x-www-form-urlencoded request into req.body
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use(
  cookieSession({
    name: "session",
    keys: [keys.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100,
  })
);
  
console.log(process.env.NODE_ENV);
// parse cookies
app.use(cookieParser());
    
// initalize passport       
app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());

// set up cors to allow us to accept requests from our client
if (
  !process.env.NODE_ENV ||
  process.env.NODE_ENV === "DEVELOPMENT" ||
  process.env.NODE_ENV === "development"
) {
  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        process.env.HOSTED_CLIENT_URL,
      ], // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true, // allow session cookie from browser to pass through
    })
  );
}

if (
  process.env.NODE_ENV == "PRODUCTION" ||
  process.env.NODE_ENV == "production"
) {
  console.log("im productins");
  app.use(
    cors({
      origin: ["https://analyse-twit.netlify.app"], // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true, // allow session cookie from browser to pass through
    })
  );
}

// console.log(keys);

// set up routes
app.use("/api/auth", authRoutes);
// twitter api routes
app.use("/api/twitter", twitterRoutes);

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated",
    });
  } else {
    next();
  }
};

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
app.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies,
  });
});

// HANDLE ERRORS
app.use((err, req, res, next) => {
  console.log(err.message);
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// connect react to nodejs express server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  connect();
  console.log(`Server port ${PORT}!`);
});
