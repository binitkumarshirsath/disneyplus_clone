import React from "react";
import ImageSlider from "../Slider";
import ImageVideoPlayer from "../ImageVideoPlayer";
import ShowCard from "../ShowsCard";
import { useDispatch } from "react-redux";
import movies from "../../db";
import { setMovies } from "../../store/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const recommendedMovies = Object.values(movies).filter(
    (movie) => movie.type === "recommend"
  );

  const newMovies = Object.values(movies).filter(
    (movie) => movie.type === "new"
  );

  const trendingMovies = Object.values(movies).filter(
    (movie) => movie.type === "trending"
  );

  const originalMovies = Object.values(movies).filter(
    (movie) => movie.type === "original"
  );
  //Just for the sake of learning i did it . 😵
  dispatch(
    setMovies({
      recommended: recommendedMovies,
      original: originalMovies,
      new: newMovies,
      trendingMovies: trendingMovies,
    })
  );

  return (
    <div className="min-w-full  justify-center   bg-cover overflow-x-hidden bg-bg-home h-screen pt-20">
      <div className="w-[96%] mx-auto">
        <ImageSlider />
        <ImageVideoPlayer />
        <ShowCard heading="Recommended For you" data={recommendedMovies} />
        <ShowCard heading="Trending shows" data={trendingMovies} />
        <ShowCard heading="Originals" data={originalMovies} />
        <ShowCard heading="New shows" data={newMovies} />
      </div>
    </div>
  );
};

export default Home;
