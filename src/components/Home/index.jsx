import React from "react";
import ImageSlider from "../Slider";
import ImageVideoPlayer from "../ImageVideoPlayer";
const Home = () => {
  return (
    <div className="min-w-full  justify-center w-full  bg-cover overflow-x-hidden bg-bg-home h-screen pt-20">
      <ImageSlider />
      <ImageVideoPlayer />
    </div>
  );
};

export default Home;
