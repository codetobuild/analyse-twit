import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogoPng } from "../../assets/index";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import GridViewIcon from "@mui/icons-material/GridView";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { CHANGE_ACTIVE_SIDE_NAVBAR } from "../../redux/reducer/preference.reducer";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/auth/auth.service";
import {
  CLEAR_ALL_LOCALSTORAGE,
  REMOVE_USER,
} from "../../redux/reducer/app.reducer";

const Sidebar = () => {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { app } = state;
  const { activeSideNavbar } = state.preferences;
  //   console.log(preferences);

  const handleNavClicked = (e, value) => {
    // console.log(value);
    dispatch(CHANGE_ACTIVE_SIDE_NAVBAR(value));
  };
  // handle logout
  const handleLogout = async () => {
    try {
      const data = await logoutUser();
      // console.log(data);
      dispatch(REMOVE_USER());
      dispatch(CLEAR_ALL_LOCALSTORAGE());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!app.isAuthenticated) {
      navigate("/");
    }
  }, [app.isAuthenticated]);

  return (
    <div className="h-screen bg-slate-800 sticky top-0 text-white col-span-3">
      <div className="mb-4 mt-4">
        <NavLink to="/">
          <div className="flex flex-row items-center justify-center">
            <div>
              <ManageSearchIcon fontSize="large" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Analyse Twit</h1>
            </div>
          </div>
        </NavLink>
        <div className="flex flex-row justify-center">
          <p>We help you grow!</p>
        </div>
      </div>
      <hr className="bg-white"></hr>
      <div className="">
        <div className="  ">
          <NavLink to="/dashboard">
            <div
              onClick={(e) => handleNavClicked(e, "DASHBOARD")}
              className={`flex flex-row justify-start items-center gap-2 text-xl cursor-pointer p-4 ${
                activeSideNavbar === "DASHBOARD" ? "bg-slate-700" : ""
              }`}>
              <GridViewIcon />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="/analytics">
            <div
              onClick={(e) => handleNavClicked(e, "ANALYTICS")}
              className={`flex flex-row justify-start items-center gap-2 text-xl cursor-pointer p-4 ${
                activeSideNavbar === "ANALYTICS" ? "bg-slate-700" : ""
              }`}>
              <DonutSmallIcon />
              <p>Analytics</p>
            </div>
          </NavLink>
          <NavLink to="/tools">
            <div
              onClick={(e) => handleNavClicked(e, "TOOLS")}
              className={`flex flex-row justify-start items-center gap-2 text-xl cursor-pointer p-4 ${
                activeSideNavbar === "TOOLS" ? "bg-slate-700" : ""
              }`}>
              <AccountTreeIcon />
              <p>Tools</p>
            </div>
          </NavLink>
          <NavLink to="/settings">
            <div
              onClick={(e) => handleNavClicked(e, "SETTINGS")}
              className={`flex flex-row justify-start items-center gap-2 text-xl cursor-pointer p-4 ${
                activeSideNavbar === "SETTINGS" ? "bg-slate-700" : ""
              }`}>
              <SettingsIcon />
              <p>Settings</p>
            </div>
          </NavLink>
        </div>
        <div>
          <div
            onClick={handleLogout}
            className={`flex flex-row justify-start items-center gap-2 text-xl cursor-pointer p-4 ${
              false ? "bg-slate-700" : ""
            }`}>
            <LogoutIcon />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
