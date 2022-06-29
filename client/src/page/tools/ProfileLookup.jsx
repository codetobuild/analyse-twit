import { useState, useEffect } from "react";
import SearchBar from "../../component/searchbar/SearchBar";
import { userLookUp } from "../../services/twitter/userLookUp.service";
import ProfileCard from "../../component/profile/ProfileCard";

const ProfileLookup = () => {
  const [searchText, setSearchText] = useState("");
  const [profileData, setProfileData] = useState(null);
  const handleSearchBtnClick = (e) => {
    const searchProfile = async () => {
      try {
        const data = await userLookUp(searchText);
        // console.log(data);
        setProfileData(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    searchProfile();
  };

  return (
    <div className="">
      <SearchBar
        handleSearchBtnClick={handleSearchBtnClick}
        value={searchText}
        handleChange={(e) => setSearchText(e.target.value)}
        tailwindCSS="m-auto mt-20"
        placeholder="Search by username"
      />
      {profileData?.id ? <ProfileCard profileData={profileData} /> : null}
    </div>
  );
};

export default ProfileLookup;
