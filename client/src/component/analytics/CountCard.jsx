import React from "react";

import ProfileCard from "../../component/profile/ProfileCard";
import TweetCard from "../../component/tweet/TweetCard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GroupIcon from "@mui/icons-material/Group";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useSelector, useDispatch } from "react-redux";

const cardProp = {
  FOLLOWER: {
    bg: "bg-indigo-200",
    icon: () => <PersonAddIcon />,
    title: "Total Followers",
  },
  FOLLOWING: {
    bg: "bg-teal-200",
    icon: () => <GroupIcon />,
    title: "Total Followings",
  },
  LIKE: {
    bg: "bg-red-100",
    icon: () => <FavoriteIcon />,
    title: "Total Likes",
  },
  IMPRESSION: {
    bg: "bg-green-200",
    icon: () => <AutoAwesomeIcon />,
    title: "Total Impressions",
  },
  RETWEET: {
    bg: "bg-cyan-200",
    icon: () => <CompareArrowsIcon />,
    title: "Total Retweets",
  },
};

const CountCard = (props) => {
  const { cardType } = props;
  const dispatch = useDispatch();
  const state = useSelector((s) => s);
  const {
    twitter: {
      totalFollowers ,
      totalFollowings,
      totalLikes,
      totalImpressions,
      totalRetweets,
      totalProfileCicks,
    },
  } = state;

  const getValue = (cardType) => {
    switch (cardType) {
      case "IMPRESSION":
        return totalImpressions;
      case "LIKE":
        return totalLikes;
      case "RETWEET":
        return totalRetweets;
      case "FOLLOWER":
        return totalFollowers;
      case "FOLLOWING":
        return totalFollowings;
      default:
        return 0;
    }
  };
// console.log(getValue(cardType))
  return (
    <div
      className={`w-40 h-32 p-2 flex flex-col justify-center items-center rounded-xl hover:drop-shadow-xl transition duration-100 ease-linear ${cardProp[cardType].bg}`}>
      <div className="flex flex-col items-center gap-1">
        {cardProp[cardType].icon()}
        <p className="font-medium">{cardProp[cardType].title}</p>
      </div>
      <div className="flex flex-row items-center justify-center">
        <p className="text-xl font-semibold text-center">
          {getValue(cardType)}
        </p>
      </div>
    </div>
  );
};

export default CountCard;
