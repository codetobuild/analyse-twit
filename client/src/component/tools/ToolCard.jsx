import React from "react";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import RateReviewIcon from "@mui/icons-material/RateReview";
const cardProp = {
  PROFILE_LOOKUP: {
    bg: "bg-indigo-200",
    icon: () => <PersonSearchIcon fontSize="large" />,
    title: "Profile Lookup",
    subtitle: "Check a profile details with username",
  },
  MY_PROFILE: {
    bg: "bg-teal-200",
    icon: () => <PersonIcon fontSize="large" />,
    title: "My Profile",
    subtitle: "Check your twitter profile in details",
  },
  SEARCH_TWEETS: {
    bg: "bg-red-100",
    icon: () => <ManageSearchIcon fontSize="large" />,
    title: "Search Tweets",
    subtitle: "Search tweets with keywords",
  },
  MY_FOLLOWERS: {
    bg: "bg-green-200",
    icon: () => <TravelExploreIcon fontSize="large" />,
    title: "Following users",
    subtitle: "view profile of your followers",
  },
  RECENT_TWEETS: {
    bg: "bg-cyan-200",
    icon: () => <RateReviewIcon />,
    title: "My Tweets",
    subtitle: "check your recent tweets in details",
  },
};

const ToolCard = (props) => {
  const { cardType } = props;

  return (
    <div
      className={`w-52 h-40 p-2 flex flex-col justify-center items-center rounded-xl cursor-pointer hover:drop-shadow-xl transition duration-100 ease-linear ${cardProp[cardType].bg}`}>
      <div className="flex flex-col items-center justify-center gap-1">
        {cardProp[cardType].icon()}
        <p className="font-medium text-center">{cardProp[cardType].title}</p>
        <p className="font-light text-center text-slate-700">
          {cardProp[cardType].subtitle}
        </p>
      </div>
    </div>
  );
};

export default ToolCard;
