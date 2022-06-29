import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_USER, REMOVE_USER } from "../../redux/reducer/app.reducer";
import { authUser, logoutUser } from "../../services/auth/auth.service";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import { HeroPeople } from "../../assets/index";
import TwitterIcon from "@mui/icons-material/Twitter";

const Landing = () => {
  const app = useSelector((state) => state.app);
  // console.log(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // get authed user
  useEffect(() => {
    const getAuthUser = async () => {
      try {
        const data = await authUser();
        dispatch(ADD_USER({ user: data.user }));
      } catch (err) {
        console.log(err);
      }
    };
    if (!app.user) {
      getAuthUser();
    }
  }, [app.user]);

  useEffect(() => {
    if (app.user) {
      navigate("/dashboard");
    }
  }, [app.user]);
  // handle signin

  const handleSignIn = () => {
    window.open(
      `${process.env.REACT_APP_BASE_API_URL}/api/auth/twitter`,
      "_self"
    );
  };

  return (
    <div className="m-auto mx-w-[1400px] h-screen p-4">
      <Navbar handleClick={handleSignIn} />
      <div className="h-72 grid grid-cols-2 items-center">
        <div className="">
          <h2 className="text-5xl font-semibold mb-4">Visualize and Analyze</h2>
          <h2 className="text-4xl font-medium mb-4">
            your Twitter account performance with our Analytics tools.
          </h2>
          <div>
            <button
              onClick={handleSignIn}
              className="bg-blue-200 h-20 text-lg font-medium px-4 py-2 rounded-lg drop-shadow-md hover:drop-shadow-xl transition duration-100 ease-linear">
              Sign In with Twitter
              <span className="text-blue-500 text-xl ml-2">
                <TwitterIcon />
              </span>{" "}
              to get started
            </button>
          </div>
        </div>
        <div>
          <div className="h-52">
            <img
              src={HeroPeople}
              alt="hero_people"
              className="block w-[60%] h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
