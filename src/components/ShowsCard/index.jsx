import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Recommends = (props) => {
  const { data } = props;
  return (
    <div className="mt-20">
      <div className="text-white text-xl font-extrabold">{props.heading}</div>
      <div className="cards flex gap-7 md:flex-col  md:items-center my-4 w-[98%] mx-auto ">
        {data &&
          data.map((movie, i) => {
            return (
              <Link to={`movie/${movie.id}`} key={i} className=" rounded-md">
                <img
                  className="rounded-md transform border-4 outline-gray-300 duration-300 hover:scale-110 "
                  src={movie.cardImg}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Recommends;
