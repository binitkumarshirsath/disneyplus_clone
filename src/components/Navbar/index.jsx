import React from "react";
import Logo from "../../assets/images/logo.svg";
import Home from "../../assets/images/home-icon.svg";
import Search from "../../assets/images/search-icon.svg";
import WatchList from "../../assets/images/watchlist-icon.svg";
import Original from "../../assets/images/original-icon.svg";
import Movie from "../../assets/images/movie-icon.svg";
import Series from "../../assets/images/series-icon.svg";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../Firebase";

const Navbar = () => {
  const handleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const className = `inline-block relative after:absolute after:bg-white after:h-[2px] after:w-0 after:top-6
  after:left-0 hover:after:w-full hover:font-extrabold hover:text-white after:transition-all after:duration-300 items-center  tracking-widest  `;

  return (
    <nav>
      <div className="w-full h-[4.5rem] flex justify-between items-center bg-[#090b13] opacity-75 fixed">
        <img src={Logo} className="w-24 ml-10" alt="" />
        <div className=" md:hidden flex  items-center py-1 w-full">
          <div className="ml-10  flex gap-8 items-center">
            <div>
              <img className="inline w-5 pb-1" src={Home} alt="home" />
              <a className={className} href="#">
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
        </div>
        <button
          onClick={handleAuth}
          className="mr-10 border transition-all duration-300 rounded font-extrabold
         text-base tracking-[0.3rem] border-white px-5 py-1 hover:bg-white hover:text-black"
        >
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
