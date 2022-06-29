import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TweetCard = (props) => {
  const { tweetData } = props;
  const dispatch = useDispatch();
  const { app } = useSelector((s) => s);
  // console.log(app);
  // console.log(tweetData);
  return (
    <div className="w-80 bg-blue-300 rounded-lg p-3 cursor-pointer  ">
      <div className="flex flex-row gap-2 items-center mb-2">
        <div className="w-10 h-10 rounded-full overflow-hidden left-6 bottom-[-25%]">
          <img
            src={app.user.profileImageUrl || "https://picsum.photos/200"}
            alt="twitter_profile"
            className="w-full h-full"
          />
        </div>
        <div className="leading-4">
          <p className="font-medium text-md">{app.user.name}</p>
          <p className="font-normal  text-md">@{app.user.screenName}</p>
        </div>
      </div>
      <div className="">
        <p className="line-clamp-2">{tweetData.text}</p>
        <p className="text-slate-600 text-sm">7:51 AM · Jun 28, 2022</p>
      </div>
      <hr className="mb-2"></hr>
      <div>
        <div className="flex flex-row justify-between items-center font-medium">
          <div className="flex flex-col items-center justify-center">
            <p>{tweetData.organic_metrics.like_count}</p>
            <p>Likes</p>
          </div>
          <div className="flex flex-col items-center">
            <p>{tweetData.organic_metrics.retweet_count}</p>
            <p>Retweets</p>
          </div>
          <div className="flex flex-col items-center">
            <p>{tweetData.organic_metrics.impression_count}</p>
            <p>Impression</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/** @over
    "data": {
        "non_public_metrics": {
            "user_profile_clicks": 0,
            "impression_count": 7
        },
        "organic_metrics": {
            "reply_count": 0,
            "like_count": 1,
            "user_profile_clicks": 0,
            "impression_count": 7,
            "retweet_count": 1
        },
        "text": "third post",
        "created_at": "2022-06-27T19:35:37.000Z",
        "id": "1541505550105849856"
}
 */

export default TweetCard;
