import React from "react";
import LogoOne from "../../assets/images/cta-logo-one.svg";
import LogoTwo from "../../assets/images/cta-logo-two.png";
const Home = () => {
  return (
    <section>
      <div className="h-screen overflow-hidden w-full flex flex-col justify-center items-center bg-login-img bg-cover">
        <div className="w-[45%] xsm:w-[75%] mb-7 flex justify-center items-center flex-col h-4/6">
          <img src={LogoOne} alt="companies_name" className="w-full" />
          <button className="hover:bg-blue-500 hover:text-blue-200 mb-2 w-full bg-blue-700 text-xl h-12 font-Montserrat font-bold tracking-wider text-white rounded-md">
            GET ALL THERE
          </button>
          <p className="text-white text-sm xsm:text-xs text-center tracking-wider mb-5">
            Get Premier Access to Raya and the last Dragon for an additional fee
            with a Disney+ subscription. As of 04/26/2021, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img src={LogoTwo} alt="companies_name_two" />
        </div>
      </div>
    </section>
  );
};

export default Home;
