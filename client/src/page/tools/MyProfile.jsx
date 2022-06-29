import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileCard from "../../component/profile/ProfileCard";
import CountCard from "../../component/analytics/CountCard";
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
import { myProfile } from "../../services/twitter/myProfile.service";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { twitter } = useSelector((state) => state);
  const { myProfile: myProfileData } = twitter;

  useEffect(() => {
    const getMyProfile = async () => {
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
    // getMyProfile();
    if (!myProfileData?.id) {
      getMyProfile();
    }
  }, []);

  return (
    <div>
      <ProfileCard profileData={myProfileData} />
    </div>
  );
};

export default MyProfile;
