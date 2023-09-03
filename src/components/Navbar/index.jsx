import React, { useEffect } from "react";
import Logo from "../../assets/images/logo.svg";
import Home from "../../assets/images/home-icon.svg";
import Search from "../../assets/images/search-icon.svg";
import WatchList from "../../assets/images/watchlist-icon.svg";
import Original from "../../assets/images/original-icon.svg";
import Movie from "../../assets/images/movie-icon.svg";
import Series from "../../assets/images/series-icon.svg";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  login,
  logout,
  selectedUserEmail,
  selectedUserName,
  selectedUserPhoto,
} from "../../store/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAuth = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      const { displayName, photoURL, email } = user;
      const newUser = { displayName, photoURL, email };
      localStorage.setItem("user", JSON.stringify(newUser));
      dispatch(login({ name: displayName, photo: photoURL, email }));
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const userEmail = useSelector(selectedUserEmail);
  const userPhoto = useSelector(selectedUserPhoto);
  const className = `inline-block relative after:absolute after:bg-white after:h-[2px] after:w-0 after:top-6
  after:left-0 hover:after:w-full hover:font-extrabold hover:text-white after:transition-all after:duration-300 items-center  tracking-widest  `;

  return (
    <nav>
      <div className="w-full h-[4.5rem] flex justify-between items-center z-[999] bg-[#090b13] opacity-75 fixed">
        <img src={Logo} className="w-24 ml-10" alt="" />

        <div className=" md:hidden flex  items-center py-1 w-full">
          {userEmail && (
            <div className="ml-10  flex gap-8 items-center">
              <div>
                <img className="inline w-5 pb-1" src={Home} alt="home" />
                <a className={className} href="/home">
                  Home
                </a>
              </div>
              <div>
                <img className="inline w-5 pb-1" src={Search} alt="home" />
                <a className={className} href="#">
                  Search
                </a>
              </div>
              <div>
                <img className="inline w-5" src={WatchList} alt="home" />
                <a className={className} href="#">
                  Watchlist
                </a>
              </div>
              <div>
                <img className="inline w-5" src={Original} alt="home" />
                <a className={className} href="#">
                  Originals
                </a>
              </div>
              <div>
                <img className="inline w-5" src={Movie} alt="home" />
                <a className={className} href="#">
                  Movie
                </a>
              </div>
              <div>
                <img className="inline w-5" src={Series} alt="home" />
                <a className={className} href="#">
                  Series
                </a>
              </div>
            </div>
          )}
        </div>
        {!userEmail && (
          <button
            onClick={handleAuth}
            className="mr-10 border transition-all duration-300 rounded font-extrabold
         text-base tracking-[0.3rem] border-white px-5 py-1 hover:bg-white hover:text-black"
          >
            LOGIN
          </button>
        )}
        {userEmail && (
          <div className="group relative z-[999]">
            <img
              className="w-[50px] h-[50px] rounded-full object-cover mr-16"
              src={userPhoto}
              alt="user-pic"
            />
            <div
              onClick={async () => {
                await auth.signOut(), dispatch(logout()), navigate("/");
              }}
              className="absolute cursor-pointer z-[999]  hover:text-black hover:border-2 hover:border-gray-500 hover:bg-white opacity-0 group-hover:opacity-100  transition-all duration-300 w-24 h-11 left-[-20px] top-[60px] text-xl flex justify-center items-center font-extrabold text-white border-2 border-white"
            >
              Log out
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
