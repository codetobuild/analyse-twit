import React from "react";
import Profile from "./Profile";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { handleClick } = props;
  return (
    <div className="h-20 p-4 flex flex-row justify-between items-center">
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
      <div>
        <div>
          <button
            onClick={handleClick}
            className="bg-white h-12 px-4 py-2 rounded-lg drop-shadow-md hover:drop-shadow-xl transition duration-100 ease-linear">
            Sign In with Twitter
            <span className="text-blue-500 text-xl ml-2">
              <TwitterIcon />
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
