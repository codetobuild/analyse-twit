import { useState, useEffect } from "react";

import OverviewChart from "../../component/chart/OverviewChart";
import Sidebar from "../../component/sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import TweetCard from "../../component/tweet/TweetCard";
import { tweetTimeline } from "../../services/twitter/tweetTimeline.service";
import {
  UPDATE_CHART_DATA,
  UPDATE_TWEETS_TIMELINE,
} from "../../redux/reducer/twitter.reducer";
import { generateTweetTimelineChartData } from "../../helper/chartData";
import {
  UPDATE_MY_PROFILE,
  UPDATE_MY_FOLLOWERS,
  UPDATE_LIKES_COUNT,
  UPDATE_IMPRESSIONS_COUNT,
  UPDATE_RETWEETS_COUNT,
  UPDATE_PROFILE_CLICKS_COUNT,
  UPDATE_FOLLOWERS_COUNT,
  UPDATE_FOLLOWINGS_COUNT,
} from "../../redux/reducer/twitter.reducer";
import { calculateTweetsMetric } from "../../helper/metricData";
import { myFollowers } from "../../services/twitter/myFollowers.service";
import { myProfile } from "../../services/twitter/myProfile.service";

const Dashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s);
  const {
    twitter: {
      timelineCharData,
      tweetsTimeline,
     
    },
  } = state;

  useEffect(() => {
    const getTWeetTimeline = async () => {
      try {
        const data = await tweetTimeline();
        // console.log(data);
        const tweetTimelineChartData = generateTweetTimelineChartData(
          data.data
        );
        dispatch(UPDATE_TWEETS_TIMELINE(data.data));
        dispatch(UPDATE_CHART_DATA(tweetTimelineChartData));
      } catch (err) {
        console.log(err);
      }
    };
    // fetch only if empty
    if (tweetsTimeline.length === 0) {
      getTWeetTimeline();
    }
    const getMyFollowers = async () => {
      try {
        const dataFollowers = await myFollowers();
        // console.log(dataFollowers);
        dispatch(UPDATE_MY_FOLLOWERS(dataFollowers.data));
      } catch (err) {
        console.log(err);
      }
    };
    if (myFollowers.length === 0) {
      getMyFollowers();
    }
  }, []);

  useEffect(() => {
    const myProfile = async () => {
      try {
        const dataProfile = await myProfile();
        // console.log(dataProfile);
        dispatch(UPDATE_MY_PROFILE(dataProfile.data));
        dispatch(
          UPDATE_FOLLOWERS_COUNT(
            dataProfile.data.public_metrics.followers_count
          )
        );
        dispatch(
          UPDATE_FOLLOWINGS_COUNT(
            dataProfile.data.public_metrics.following_count
          )
        );
      } catch (err) {
        console.log(err);
      }
    };
    if (!myProfile?.id) {
    }
    // myProfile();
  }, []);

  useEffect(() => {
    const metricData = calculateTweetsMetric(timelineCharData);
    // console.log(metricData);
    dispatch(UPDATE_LIKES_COUNT({ totalLikes: metricData.totalLikes }));
    dispatch(
      UPDATE_IMPRESSIONS_COUNT({
        totalImpressions: metricData.totalImpressions,
      })
    );
    dispatch(
      UPDATE_RETWEETS_COUNT({ totalRetweets: metricData.totalRetweets })
    );
    dispatch(
      UPDATE_PROFILE_CLICKS_COUNT({
        totalProfileCicks: metricData.totalProfileCicks,
      })
    );
  }, [timelineCharData]);

  const chartLineType = [
    {
      type: "IMPRESSION_COUNT",
    },
    {
      type: "LIKE_COUNT",
    },
    {
      type: "RETWEET_COUNT",
    },
    {
      type: "PROFILE_CLICK_COUNT",
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-4">
      <Sidebar />
      {/* <div className="col-span-9">
        <Navbar />
      </div> */}
      <div className="col-span-9 mt-12">
        <div className="mb-12">
          <h1 className="text-2xl font-semibold mb-2">
            Overview chart of your tweets
          </h1>
          <div className=" w-full flex flex-row items-center ">
            <div className="w-[100%]">
              <OverviewChart chartLineType={chartLineType} />
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h1 className="text-2xl font-semibold mb-2"> Your Recent Tweets</h1>
          <div className=" flex flex-row flex-wrap justify-center gap-4">
            {tweetsTimeline.map((tweetData) => (
              <TweetCard tweetData={tweetData} key={tweetData.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
