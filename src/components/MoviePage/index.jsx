import React from "react";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../store/movieSlice";
const MoviePage = (props) => {
  const movie = useSelector(selectRecommend);
  return (
    <div className={`bg-[url(${movie[0].backgroundImg})] h-full w-full z-10`}>
      <h1>hellp</h1>
    </div>
  );
};

export default MoviePage;
