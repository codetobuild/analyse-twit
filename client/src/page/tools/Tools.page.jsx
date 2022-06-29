import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import ToolCard from "../../component/tools/ToolCard";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 ">
      <Sidebar />
      <div className="col-span-9">
        <div className="flex flex-row flex-wrap gap-14 justify-center items-center m-auto my-20">
          <Link to="/tools/my-profile">
            <ToolCard cardType={"MY_PROFILE"} />
          </Link>
          <Link to="/tools/profile-lookup">
            <ToolCard cardType={"PROFILE_LOOKUP"} />
          </Link>
          <Link to="/tools/my-tweets">
            <ToolCard cardType={"RECENT_TWEETS"} />
          </Link>
          <Link to="/tools/search-tweets">
            <ToolCard cardType={"SEARCH_TWEETS"} />
          </Link>
          <Link to="/tools/my-followers">
            <ToolCard cardType={"MY_FOLLOWERS"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
