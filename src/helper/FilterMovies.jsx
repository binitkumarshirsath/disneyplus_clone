import { useDispatch } from "react-redux";
import movies from "../db";
import { setMovies } from "../store/movieSlice";

const recommendedMovies = Object.values(movies).filter(
  (movie) => movie.type === "recommend"
);

const newMovies = Object.values(movies).filter((movie) => movie.type === "new");

const trendingMovies = Object.values(movies).filter(
  (movie) => movie.type === "trending"
);

const originalMovies = Object.values(movies).filter(
  (movie) => movie.type === "original"
);

const dispatch = useDispatch();

dispatch(
  setMovies({
    recommended: recommendedMovies,
    original: originalMovies,
    new: newMovies,
    trendingMovies: trendingMovies,
  })
);
