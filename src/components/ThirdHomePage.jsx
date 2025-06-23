import React from "react";
import yellowBg from "../assets/yellowBg.jpg";

const ThirdHomePage = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={yellowBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black opacity-50 z-[-1]" />

      <div className="flex py-16 justify-center px-10 md:px-20">
        <div className="text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Transform Your Health Today!
          </h1>
          <p className="mb-6 text-lg font-semibold max-w-xl">
            Discover the difference that a thoughtfully designed diet plan and
            nutritious food can have on your health and well-being.
          </p>
          <button className="bg-white text-black font-semibold py-4 px-20 border border-white opacity-70 hover:opacity-100 hover:bg-yellow-300 hover:text-black transition">
            Get A 3-Day Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdHomePage;
