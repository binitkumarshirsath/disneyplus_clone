import React from "react";
import imageOne from "../../assets/images/viewers-disney.png";
import imageTwo from "../../assets/images/viewers-marvel.png";
import imageThree from "../../assets/images/viewers-national.png";
import imageFour from "../../assets/images/viewers-pixar.png";
import imageFive from "../../assets/images/viewers-starwars.png";
import videoOne from "../../assets/videos/disney.mp4";
import videoTwo from "../../assets/videos/marvel.mp4";
import videoThree from "../../assets/videos/national-geographic.mp4";
import videoFour from "../../assets/videos/pixar.mp4";
import videoFive from "../../assets/videos/star-wars.mp4";

const ImageVideoPlayer = () => {
  return (
    <div className="mt-9 flex gap-8 w-[95%] mx-auto md:flex-col">
      <div className="group border-4 hover:outline-4 hover:border-gray-200 shadow-2xl shadow-black transform hover:scale-110 relative overflow-hidden border-gray-400 rounded-md">
        <img
          src={imageOne}
          className="h-full w-full relative z-10 object-cover inset-0"
          alt=""
          srcSet=""
        />
        <video
          src={videoOne}
          className="absolute top-0 w-full   z-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          autoPlay
          loop
          playsInline
          muted
        ></video>
      </div>
      <div className="group border-4 hover:outline-4 hover:border-gray-200 shadow-2xl shadow-black  transform hover:scale-110 relative overflow-hidden  border-gray-400 rounded-md">
        <img
          src={imageTwo}
          className="h-full w-full relative z-10 object-cover inset-0"
          alt=""
          srcSet=""
        />
        <video
          src={videoTwo}
          className="absolute top-0 w-full  z-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          autoPlay
          loop
          playsInline
          muted
        ></video>
      </div>
      <div className="group border-4 hover:outline-4 hover:border-gray-200  shadow-2xl shadow-black transform hover:scale-110 relative overflow-hidden border-gray-400 rounded-md">
        <img
          src={imageThree}
          className="h-full w-full relative z-10 object-cover inset-0"
          alt=""
          srcSet=""
        />
        <video
          src={videoThree}
          className="absolute top-0  w-full  z-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          autoPlay
          loop
          playsInline
          muted
        ></video>
      </div>
      <div className="group border-4  hover:outline-4 hover:border-gray-200 shadow-2xl shadow-black  transform hover:scale-110 relative overflow-hidden border-gray-400 rounded-md">
        <img
          src={imageFour}
          className="h-full w-full relative z-10 object-cover inset-0"
          alt=""
          srcSet=""
        />
        <video
          src={videoFour}
          className="absolute top-0 w-full   z-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          autoPlay
          loop
          playsInline
          muted
        ></video>
      </div>
      <div className="group border-4 hover:outline-4 hover:border-gray-200 transform shadow-2xl shadow-black  hover:scale-110 relative overflow-hidden border-gray-400 rounded-md">
        <img
          src={imageFive}
          className="h-full w-full relative z-10 object-cover inset-0"
          alt=""
          srcSet=""
        />
        <video
          src={videoFive}
          className="absolute top-0  w-full z-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          autoPlay
          loop
          playsInline
          muted
        ></video>
      </div>
    </div>
  );
};

export default ImageVideoPlayer;
