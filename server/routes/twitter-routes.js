const axios = require("axios");
const router = require("express").Router();
const {
  userLookupByUserName,
  myFollowers,
  myProfile,
} = require("../controllers/tweets/user");
const { blockedUsers } = require("../controllers/tweets/block");
const { mutedUsers } = require("../controllers/tweets/mute");
const {
  likedTweets,
  tweetLinkingUsers,
} = require("../controllers/tweets/like");
const { retweetedByUsers } = require("../controllers/tweets/retweetedByUsers");
const {
  tweetTimeline,
  tweetTimelineReverseChronological,
} = require("../controllers/tweets/timeline");
const { singleTweet } = require("../controllers/tweets/tweet");
const {searchTweetByKeyword} = require('../controllers/tweets/keyword');

router.get("/", (req, res, next) => {
  try {
    res.json({ message: "/twitter api working" });
  } catch (err) {
    next(err);
  }
});

// user lookup
router.get("/userLookup/:username", userLookupByUserName);
// user lookup
router.get("/myProfile", myProfile);
// authorized user following users
router.get("/myFollowers", myFollowers);
// get blocked users
router.get("/blockedUsers", blockedUsers);
// get blocked users
router.get("/blockedUsers", mutedUsers);
// get user's liked tweets
router.get("/likedTweets", likedTweets);
// get user's liked tweets
router.get("/tweetLinkingUsers/:tweetId", tweetLinkingUsers);
// get retweeted by Users
router.get("/retweetedByUsers/:tweetId", retweetedByUsers);
// get user tweets timeline
router.get("/tweetTimeline", tweetTimeline);
// get tweeter timeline reversed chronologial
router.get("/tweetTimeline/reverse", tweetTimelineReverseChronological);

router.get("/tweetLookup/:tweetId", singleTweet);

// search tweet by keyword
router.get('/searchTweetByKeyword/:keyword', searchTweetByKeyword);


module.exports = router;
