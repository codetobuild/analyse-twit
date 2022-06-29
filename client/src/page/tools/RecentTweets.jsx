import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  UPDATE_MY_PROFILE,
  UPDATE_MY_FOLLOWERS,
  UPDATE_LIKES_COUNT,
  UPDATE_IMPRESSIONS_COUNT,
  UPDATE_RETWEETS_COUNT,
  UPDATE_PROFILE_CLICKS_COUNT,
  UPDATE_FOLLOWERS_COUNT,
  UPDATE_FOLLOWINGS_COUNT,
  UPDATE_TWEETS_TIMELINE,
  UPDATE_CHART_DATA,
} from "../../redux/reducer/twitter.reducer";
import { tweetTimeline } from "../../services/twitter/tweetTimeline.service";
import { generateTweetTimelineChartData } from "../../helper/chartData";
import { calculateTweetsMetric } from "../../helper/metricData";
import TweetCard from "../../component/tweet/TweetCard";

const RecentTweets = () => {
  const dispatch = useDispatch();
  const { twitter } = useSelector((state) => state);
  const { tweetsTimeline } = twitter;
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
    // getMyProfile();
    if (tweetsTimeline.length === 0) {
      // console.log("refetch");
      getTWeetTimeline();
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-medium mt-10 mb-4">Your Recent Tweets</h1>
      <div className=" flex flex-row flex-wrap justify-center gap-4">
        {tweetsTimeline.map((tweetData) => (
          <TweetCard tweetData={tweetData} key={tweetData.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentTweets;
