import React, { useState } from "react";
import DesktopImage from "../assets/HomeDesktopBg.jpg";
import MobileImage from "../assets/HomemobileBg.jpg";
import SecondHomePage from "./SecondHomePage";
import ThirdHomePage from "./ThirdHomePage";
import FourthHomePage from "./FourthHomePage";
import Plans from "./Plans";
import Footer from "./Footer";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* -----Navbar starts here----- */}
      <nav className="h-20 bg-black w-full flex items-center text-center justify-between px-4 md:px-10 lg:px-15">
        <div className="text-4xl font-bold text-white">
          <span className="text-yellow-400">Whole</span>some
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg text-white font-semibold lg:gap-10 my-1.5">
          <li>Plans</li>
          <li>Delivery Areas</li>
          <li>Contact</li>
          <li className="text-black bg-yellow-400 py-1.5 px-3 rounded-md hover:bg-yellow-200">
            Get A 3-Day Trial
          </li>
        </ul>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button
            className="text-4xl mt-2 text-gray-300 px-2"
            onClick={() => setMenuOpen(true)}
          >
            &#8801;
          </button>
        </div>
      </nav>

      {/* Right Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-black opacity-90 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-3xl text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col items-start gap-6 p-6 text-lg font-semibold">
          <li onClick={() => setMenuOpen(false)}>Plans</li>
          <li onClick={() => setMenuOpen(false)}>Delivery Areas</li>
          <li onClick={() => setMenuOpen(false)}>Contact</li>
          <li
            className="text-black bg-yellow-400 py-1.5 px-3 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Get A 3-Day Trial
          </li>
        </ul>
      </div>
      {/* -----NavBar ends here----- */}

      {/* -----Header starts here----- */}
      <header className="relative h-screen">
        <div>
          <img
            className="hidden md:block w-full h-screen object-cover opacity-20"
            src={DesktopImage}
            alt="Desktop Background"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black opacity-60"></div>
          <img
            className="w-full h-screen opacity-70 md:hidden "
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
            <button className="bg-yellow-400 text-black font-semibold py-4 px-28 hover:bg-yellow-300 duration-200 ease-in">
              Get Onboard
            </button>
            <button className="bg-black text-white font-semibold py-4 px-28 border border-white hover:bg-yellow-300 hover:text-black duration-200 ease-in">
              Learn More
            </button>
          </div>
          <p class="font-pacifico text-2xl">You'll love it!</p>
        </div>
      </header>
      <SecondHomePage />
      <ThirdHomePage />
      <FourthHomePage />
      <Plans />
      <Footer />
    </div>
  );
};

export default Home;
