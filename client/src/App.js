import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./page/analytics/Analytics.page";
import Dashboard from "./page/dashboard/Dashboard.page";
import Landing from "./page/landing/Landing.page";
import Profile from "./page/profile/Profiile.page";
import Settings from "./page/settings/Settings.page";
import MyFollowers from "./page/tools/MyFollowers";
import MyProfile from "./page/tools/MyProfile";
import RecentTweets from "./page/tools/RecentTweets";
import SearchTweets from "./page/tools/SearchTweets";
import Tools from "./page/tools/Tools.page";
import ProfileLookup from "./page/tools/ProfileLookup";
import Tweets from "./page/tweets/Tweets.page";

function App() {
  // const state = useSelector((state) => state);

  // console.log(state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/profile-lookup" element={<ProfileLookup />} />
        <Route path="/tools/my-profile" element={<MyProfile />} />
        <Route path="/tools/my-followers" element={<MyFollowers />} />
        <Route path="/tools/my-tweets" element={<RecentTweets />} />
        <Route path="/tools/search-tweets" element={<SearchTweets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
