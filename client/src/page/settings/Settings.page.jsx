import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Sidebar />
      <div className="w-full  col-span-9">
        <h1>Settings</h1>
      </div>
    </div>
  );
};

export default Settings;
