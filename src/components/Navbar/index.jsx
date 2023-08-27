import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full h-[4.5rem] flex justify-between items-center bg-black fixed">
        <div className=" ml-10 bg-logo w-full h-10 bg-no-repeat"></div>
        <button className="mr-10 font-Montserrat border font-semibold text-base tracking-widest border-white px-5 py-1 hover:bg-white hover:text-black">
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
