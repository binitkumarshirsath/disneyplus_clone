import React from "react";
import ImageSlider from "../Slider";
import ImageVideoPlayer from "../ImageVideoPlayer";
import MovieList from "../Recommended";
import { useDispatch } from "react-redux";
import movies from "../../db";
import { setMovies } from "../../store/movieSlice";
import MoviePage from "../MoviePage";
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
        <MovieList heading="Recommended For you" data={recommendedMovies} />
        <MovieList heading="Trending shows" data={trendingMovies} />
        <MovieList heading="Originals" data={originalMovies} />
        <MovieList heading="New shows" data={newMovies} />
        <MoviePage />
      </div>
    </div>
  );
};

export default Home;
