const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const OAuth = require("oauth-1.0a");
const axios = require("axios");
const { userLookUpQueries, myProfileQueries } = require("../queries.utils");
const User = require("../../models/user-model");

// look a user with username
const searchTweetByKeyword = async (req, res, next) => {
    console.log(req.params);

    try {
      if (!req.params?.keyword) {
        throw new Error("Missing keyword");
      }
      console.log(process.env.BEARER_TOKEN);
  
      const { keyword } = req.params;
      const response = await axios.get(
        `https://api.twitter.com/2/tweets/search/recent?query=${keyword}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
        }
      );
      console.log('data', response);
      // console.log({ user: response.data });
      return res.json({ ...response.data });
    } catch (err) {
      next(err);
    }
  };


  module.exports = { searchTweetByKeyword };
