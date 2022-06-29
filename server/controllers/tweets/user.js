const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const OAuth = require("oauth-1.0a");
const axios = require("axios");
const { userLookUpQueries, myProfileQueries } = require("../queries.utils");
const User = require("../../models/user-model");

// look a user with username
const userLookupByUserName = async (req, res, next) => {
  try {
    if (!req.params?.username) {
      throw new Error("Missing username");
    }
    // console.log(process.env.BEARER_TOKEN);

    const { username } = req.params;
    const response = await axios.get(
      `https://api.twitter.com/2/users/by/username/${username}?${userLookUpQueries}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      }
    );
    // console.log({ user: response.data });
    return res.json({ ...response.data });
  } catch (err) {
    next(err);
  }
};

// check my twitter profile
const myProfile = async (req, res, next) => {
  try {
    const { twitterId } = req.user;
    console.log(twitterId);
    const response = await axios.get(
      `https://api.twitter.com/2/users/${twitterId}?${myProfileQueries}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      }
    );      
    // console.log({ user: response.data });
    return res.json({ ...response.data });
  } catch (err) {
    next(err);
  }
};

const myFollowers = async (req, res, next) => {
  try {
    const { twitterId } = req.user;
    console.log(twitterId);

    const followersQueries = "user.fields=profile_image_url,public_metrics";
    const response = await axios({
      method: "GET",
      url: `https://api.twitter.com/2/users/${twitterId}/followers?${followersQueries}`,
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
    });
    // console.log(response.data);
    return res.json({ ...response.data });
  } catch (error) {
    next(error);
  }
};

module.exports = { userLookupByUserName, myFollowers, myProfile };
