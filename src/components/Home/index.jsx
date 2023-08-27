import React from "react";

const Home = () => {
  return (
    <section>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-login-img bg-cover">
        <div className="w-[45%] flex justify-center items-center flex-col h-4/6">
          <div className="bg-cta-logo-one h-44 w-full bg-no-repeat bg-contain"></div>
          <button className="hover:bg-blue-500 hover:text-blue-200 mb-2 w-full bg-blue-700 text-xl h-14 font-Montserrat font-extrabold text-white rounded-md">
            GET ALL THERE
          </button>
          <p className="text-white text-sm text-center mb-5">
            Get Premier Access to Raya and the last Dragon for an additional fee
            with a Disney+ subscription. As of 04/26/2021, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <div className="bg-contain bg-cta-logo-two h-48 w-full bg-no-repeat"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
