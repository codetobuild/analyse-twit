import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileCard from "../../component/profile/ProfileCard";

const Profile = () => {
  const { myProfile } = useSelector((state) => state);
 
  return (
    <div>
      <ProfileCard profileData={myProfile} />
    </div>
  );
};

export default Profile;
