import React from "react";
import { useParams } from "react-router-dom";
import movies from "../../db";
import playBlack from "../../assets/images/play-icon-black.png";
import playWhite from "../../assets/images/play-icon-white.png";
import groupIcon from "../../assets/images/group-icon.png";
const MoviePage = () => {
  const { id } = useParams();
  const [movie] = Object.values(movies).filter((movie) => {
    return movie.id == id;
  });
  console.log(movie);
  return (
    <div
      className={`justify-center w-full  h-screen bg-no-repeat  bg-cover bg-center rounded-lg`}
      style={{ backgroundImage: `url(${movie.backgroundImg})` }}
    >
      <div className="w-3/6 ml-10 pt-12">
        <img src={movie.titleImg} alt="" />
        <div className="buttons mt-2 flex">
          <button className="py-3 rounded-lg px-8 border-[3px] mr-10 hover:bg-green-400 hover:scale-105 duration-500 hover:text-white text-2xl font-Montserrat border-gray-500  text-black bg-white ">
            <img src={playBlack} className="inline mr-2" alt="" />
            PLAY
          </button>
          <button className="py-3 rounded-lg px-8 border-[3px] hover:bg-yellow-300 hover:scale-105 duration-500  text-2xl font-Montserrat border-gray-500  text-white  hover:text-black bg-black ">
            <img src={playWhite} className="inline mr-2" alt="" />
            TRAILER
          </button>
          <img
            src={groupIcon}
            className="rounded-full bg-black h-12 ml-8 cursor-pointer hover:bg-gray-500 mt-2"
            alt=""
          />
        </div>
        <p className="mt-2">{movie.subTitle}</p>
        <div className="mt-1 font-medium">{movie.description}</div>
      </div>
    </div>
  );
};

export default MoviePage;
