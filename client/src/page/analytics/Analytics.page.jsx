import { useEffect } from "react";
import CountCard from "../../component/analytics/CountCard";
import OverviewChart from "../../component/chart/OverviewChart";
import Sidebar from "../../component/sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { calculateTweetsMetric } from "../../helper/metricData";
import {
  UPDATE_LIKES_COUNT,
  UPDATE_IMPRESSIONS_COUNT,
  UPDATE_RETWEETS_COUNT,
  UPDATE_PROFILE_CLICKS_COUNT,
} from "../../redux/reducer/twitter.reducer";

const Analytics = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s);
  const { twitter } = state;

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
    <div className="grid grid-cols-12 gap-4 ">
      <Sidebar />
      <div className="col-span-9">
        <div className="flex flex-row justify-center items-center flex-wrap gap-6 my-12">
          <CountCard cardType={"FOLLOWING"} />
          <CountCard cardType={"FOLLOWER"} />
          <CountCard cardType={"LIKE"} />
          <CountCard cardType={"IMPRESSION"} />
          <CountCard cardType={"RETWEET"} />
        </div>

        <div className="w-[90%] mb-12">
          <h2 className="text-2xl font-semibold">Impressions</h2>

          <OverviewChart chartLineType={[chartLineType[0]]} />
        </div>
        <div className="w-[90%] mb-12">
          <h2 className="text-2xl font-semibold">Likes</h2>
          <OverviewChart chartLineType={[chartLineType[1]]} />
        </div>
        <div className="w-[90%] mb-12">
          <h2 className="text-2xl font-semibold">Retweets</h2>

          <OverviewChart chartLineType={[chartLineType[2]]} />
        </div>
        {/* <div className="w-[90%] mb-12">
          <h2 className="text-2xl font-semibold">Replies</h2>
          <OverviewChart />
        </div> */}
        <div className="w-[90%] mb-12">
          <h2 className="text-2xl font-semibold">Profile clicks</h2>
          <OverviewChart chartLineType={[chartLineType[3]]} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
