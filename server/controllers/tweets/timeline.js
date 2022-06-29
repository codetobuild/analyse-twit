const crypto = require("crypto");
const OAuth = require("oauth-1.0a");
const axios = require("axios");
const User = require("../../models/user-model");
const { tweetTimelineQueries } = require("../queries.utils");
const { getUserFields } = require("../controller.utils");

const tweetTimeline = async (req, res, next) => {
  try {
    const { token: tokenKey, tokenSecret: tokenSecretKey } =
      await getUserFields(req.user._id);
    const token = {
      key: tokenKey,
      secret: tokenSecretKey,
    };
    const oauth = OAuth({
      consumer: {
        key: process.env.TWITTER_CONSUMER_KEY,
        secret: process.env.TWITTER_CONSUMER_SECRET,
      },
      signature_method: "HMAC-SHA1",
      hash_function: (baseString, key) =>
        crypto.createHmac("sha1", key).update(baseString).digest("base64"),
    });

    const userId = "1537057606275321856";
    const authHeader = oauth.toHeader(
      oauth.authorize(
        {
          url: `https://api.twitter.com/2/users/${userId}/tweets?${tweetTimelineQueries}`,
          method: "GET",
        },
        token
      )
    );

    // const data = { text: "Hello world!!" };

    const response = await axios({
      method: "GET",
      url: `https://api.twitter.com/2/users/${userId}/tweets?${tweetTimelineQueries}`,

      headers: {
        Authorization: authHeader["Authorization"],
        "user-agent": "v2CreateTweetJS",
        "content-type": "application/json",
        accept: "application/json",
      },
    });

    res.json({ ...response.data });
  } catch (err) {
    next(err);
  }
};

const tweetTimelineReverseChronological = async (req, res, next) => {
  try {
    const oauth = OAuth({
      consumer: {
        key: process.env.TWITTER_CONSUMER_KEY,
        secret: process.env.TWITTER_CONSUMER_SECRET,
      },
      signature_method: "HMAC-SHA1",
      hash_function: (baseString, key) =>
        crypto.createHmac("sha1", key).update(baseString).digest("base64"),
    });

    const token = {
      key: "1537057606275321856-CtYNYtrkxtp1erKi9EWdVwbsyP9Xxu",
      secret: "ZpoN3ZdlVdtyJ3iIpOrsLPk7MY9kj7SEPgsGP1jI6J4Z8",
    };

    const userId = "1537057606275321856";
    const authHeader = oauth.toHeader(
      oauth.authorize(
        {
          url: `https://api.twitter.com/2/users/${userId}/timelines/reverse_chronological`,
          method: "GET",
        },
        token
      )
    );

    // const data = { text: "Hello world!!" };

    const response = await axios({
      method: "GET",
      url: `https://api.twitter.com/2/users/${userId}/timelines/reverse_chronological`,

      headers: {
        Authorization: authHeader["Authorization"],
        "user-agent": "v2CreateTweetJS",
        "content-type": "application/json",
        accept: "application/json",
      },
    });

    res.json({ ...response.data });
  } catch (err) {
    next(err);
  }
};

module.exports = { tweetTimeline, tweetTimelineReverseChronological };
