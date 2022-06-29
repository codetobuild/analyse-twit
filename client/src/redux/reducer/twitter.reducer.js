import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  myProfile: {},
  myFollowers: [],
  timelineCharData: [],
  tweetsTimeline: [],
  totalFollowers: 0,
  totalFollowings: 0,
  totalTweets: 0,
  totalLikes: 0,
  totalImpressions: 0,
  totalRetweets: 0,
  totalProfileCicks: 0,
};

const twitterSplice = createSlice({
  name: "twitterSplice",
  initialState: INITIAL_STATE,
  reducers: {
    UPDATE_MY_PROFILE: (state, action) => {
      state.myProfile = { ...action.payload };
    },
    UPDATE_MY_FOLLOWERS: (state, action) => {
      state.myFollowers = [...action.payload];
    },
    UPDATE_CHART_DATA: (state, action) => {
      state.timelineCharData = [...action.payload];
    },
    UPDATE_TWEETS_TIMELINE: (state, action) => {
      state.tweetsTimeline = [...action.payload];
    },
    UPDATE_FOLLOWERS_COUNT: (state, action) => {
      state.totalFollowers = action.payload;
    },
    UPDATE_FOLLOWINGS_COUNT: (state, action) => {
      state.totalFollowings = action.payload;
    },
    UPDATE_LIKES_COUNT: (state, action) => {
      state.totalLikes = action.payload.totalLikes;
    },
    UPDATE_IMPRESSIONS_COUNT: (state, action) => {
      state.totalImpressions = action.payload.totalImpressions;
    },
    UPDATE_RETWEETS_COUNT: (state, action) => {
      state.totalRetweets = action.payload.totalRetweets;
    },
    UPDATE_PROFILE_CLICKS_COUNT: (state, action) => {
      state.totalProfileCicks = action.payload.totalProfileCicks;
    },
  },
});

export const {
  UPDATE_MY_PROFILE,
  UPDATE_MY_FOLLOWERS,
  UPDATE_CHART_DATA,
  UPDATE_TWEETS_TIMELINE,
  UPDATE_FOLLOWERS_COUNT,
  UPDATE_FOLLOWINGS_COUNT,
  UPDATE_LIKES_COUNT,
  UPDATE_IMPRESSIONS_COUNT,
  UPDATE_RETWEETS_COUNT,
  UPDATE_PROFILE_CLICKS_COUNT,
} = twitterSplice.actions; // for dispatch
export default twitterSplice.reducer; // for store
