const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const keys = require("./keys.copy");
const User = require("../models/user-model");
// const createUser = "../service/createUser";

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((e) => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TWITTER_CONSUMER_KEY,
      consumerSecret: keys.TWITTER_CONSUMER_SECRET,
      callbackURL: "/api/auth/twitter/redirect",
    },
    async (token, tokenSecret, profile, done) => {
      // find current user in UserModel
      // console.log({ token, tokenSecret, profile });
      const currentUser = await User.findOne({
        twitterId: profile._json.id_str,
      });
      // create new user if the database doesn't have this user
      if (!currentUser) {
        const { id_str, name, screen_name, profile_image_url } = profile._json;

        const newUser = await new User({
          token: token,
          tokenSecret: tokenSecret,
          name: name,
          screenName: screen_name,
          twitterId: id_str,
          profileImageUrl: profile_image_url,
        }).save();
        if (newUser) {
          return done(null, newUser);
        }
      }
      return done(null, currentUser);
    }
  )
);
