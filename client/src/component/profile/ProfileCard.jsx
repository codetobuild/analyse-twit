import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ProfileCard = (props) => {
  const { profileData } = props;
  // console.log(profileData);
  return profileData?.id ? (
    <>
      <div className="m-auto mt-20 max-w-lg cursor-pointer drop-shadow-lg hover:drop-shadow-2xl transition duration-100 ease-linear">
        <div className="h-20 bg-slate-400 rounded-t-lg relative">
          <div className="w-12 h-12 rounded-full overflow-hidden absolute left-6 bottom-[-25%]">
            <img
              src={
                profileData?.profile_image_url || "https://picsum.photos/200"
              }
              alt="twitter_profile"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="p-6 rounded-b-lg bg-blue-300 pt-6">
          <div className="leading-[0.5]">
            <p className="font-medium text-lg">{profileData.name}</p>
            <p className="font-medium  text-lg">@{profileData.username}</p>
          </div>
          <div className="leading-[0.5">
            <p className="font-normal  text-normal">
              {profileData?.description}
            </p>
          </div>
          <div className="py-3 flex flex-row items-center gap-2 justify-start">
            <CalendarMonthIcon />
            {new Date(profileData.created_at).toLocaleString()}
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-center">
              <p> {profileData.public_metrics.following_count}</p>
              <p>Following</p>
            </div>
            <div className="flex flex-col items-center">
              <p> {profileData.public_metrics.followers_count}</p>
              <p>Followers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default ProfileCard;
