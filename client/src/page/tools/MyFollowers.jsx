import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  UPDATE_MY_PROFILE,
  UPDATE_LIKES_COUNT,
  UPDATE_IMPRESSIONS_COUNT,
  UPDATE_RETWEETS_COUNT,
  UPDATE_PROFILE_CLICKS_COUNT,
  UPDATE_FOLLOWERS_COUNT,
  UPDATE_FOLLOWINGS_COUNT,
  UPDATE_TWEETS_TIMELINE,
  UPDATE_CHART_DATA,
  UPDATE_MY_FOLLOWERS,
} from "../../redux/reducer/twitter.reducer";
import { myFollowers } from "../../services/twitter/myFollowers.service";
import ProfileCard from "../../component/profile/ProfileCard";

const MyFollowers = () => {
  const dispatch = useDispatch();
  const { twitter } = useSelector((state) => state);
  const { myFollowers: myFollowersData } = twitter;
  useEffect(() => {
    const getMyFollowers = async () => {
      try {
        const data = await myFollowers();
        dispatch(UPDATE_MY_FOLLOWERS(data.data));
      } catch (err) {
        console.log(err);
      }
    };
    // getMyProfile();
    if (myFollowersData.length === 0) {
      // console.log("refetch");
      getMyFollowers();
    }
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-medium mt-10 mb-4 text-center">
        Your Followers
      </h1>
      {myFollowersData.length ? (
        <>
          {myFollowersData.map((profileData) => (
            <ProfileCard profileData={profileData} key={profileData.id} />
          ))}
        </>
      ) : null}
    </div>
  );
};

export default MyFollowers;
