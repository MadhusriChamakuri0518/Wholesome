import React, { useRef } from "react";
import DesktopImage from "../assets/HomeDesktopBg.jpg";
import MobileImage from "../assets/HomemobileBg.jpg";
import SecondHomePage from "./SecondHomePage";
import ThirdHomePage from "./ThirdHomePage";
import FourthHomePage from "./FourthHomePage";
import Plans from "./Plans";
import FAQ from "./FAQ";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const secondPageRef = useRef(null);

  const handleLearnMore = () => {
    secondPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <header className="relative h-screen">
        <div>
          <img
            className="hidden md:block w-full h-screen object-cover opacity-20"
            src={DesktopImage}
            alt="Desktop Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black opacity-60"></div>
          <img
            className="w-full h-screen opacity-70 md:hidden"
            src={MobileImage}
            alt="Mobile background"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black opacity-70"></div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            Healthy Personalised Meals, Delivered Daily!
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl my-4 md:my-6">
            We make healthy living convenient by serving simple homely meals
            while taking care of your daily nutrition.
          </p>
          <div className="flex flex-col gap-6 my-4 md:gap-12 md:flex-row md:my-6">
            <button
              className="bg-yellow-400 text-black font-semibold py-4 px-28 hover:bg-yellow-300 duration-200 ease-in"
              onClick={() => navigate("/purchase")}
            >
              Get Onboard
            </button>
            <button
              className="bg-black text-white font-semibold py-4 px-28 border border-white hover:bg-yellow-300 hover:text-black duration-200 ease-in"
              onClick={handleLearnMore}
            >
              Learn More
            </button>
          </div>
          <p className="font-pacifico text-2xl">You'll love it!</p>
        </div>
      </header>
      <div ref={secondPageRef}>
        <SecondHomePage />
      </div>
      <ThirdHomePage />
      <FourthHomePage />
      <Plans />
      <FAQ />
    </div>
  );
};

export default Home;
