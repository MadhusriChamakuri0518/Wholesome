import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faHouseMedicalCircleCheck,
  faUtensils,
  faCarrot,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";
import serve from "../assets/serving-dish.png";

const SecondHomePage = () => {
  return (
    <div>
      <p className="font-pacifico text-center pt-12 text-3xl">
        uniquely yours!
      </p>
      <h1 className="text-4xl md:text-6xl text-center mx-10 font-bold py-4 mb-8 text-yellow-400">
        Discover The Impact Of A Truly Personalised Diet!
      </h1>

      {/* Grid container with gap */}
      <div className="px-10 pb-20 w-auto h-auto md:px-15 lg:px-20 md:grid md:grid-cols-3 md:gap-4">
        {/* First Column */}
        <div className="flex flex-col gap-4 mb-4 md:mb-0">
          <div className="bg-yellow-200 text-left p-8 w-auto h-auto">
            <div className="flex gap-4">
              <FontAwesomeIcon
                icon={faHouseMedicalCircleCheck}
                className="text-2xl md:mt-2"
              />
              <h2 className="font-bold text-2xl mb-1">
                Highest Hygiene Standards
              </h2>
            </div>
            <p>
              We prioritize safety by adhering to strict hygiene protocols,
              ensuring every meal is prepared with utmost care for your health
              and well-being.
            </p>
          </div>

          <div className="bg-yellow-300 text-left p-8 w-auto h-auto">
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faUtensils} className="text-2xl md:mt-2" />
              <h2 className="font-bold text-2xl mb-1">Incredibly Flexible</h2>
            </div>
            <p>
              Customize your meal plans to suit your schedule and lifestyle with
              ease — pause, skip, or change anytime!
            </p>
          </div>
        </div>

        {/* Center Column */}
        <div className="bg-black text-white text-left p-8 w-auto h-auto mb-4 md:mb-0">
          <div className="md:flex justify-center md:py-6">
            <img
              className="hidden md:block md:w-40 md:h-40"
              src={serve}
              alt=""
            />
          </div>
          <div className="flex gap-4">
            <FontAwesomeIcon icon={faCarrot} className="text-2xl md:mt-2" />
            <h2 className="font-bold text-2xl mb-1">
              Calorie Counted Goodness
            </h2>
          </div>
          <p>
            Every meal is carefully crafted and calorie-counted to match your
            personal dietary needs and goals.
          </p>
        </div>

        {/* Third Column */}
        <div className="flex flex-col gap-4 mb-4 md:mb-0">
          <div className="bg-gray-400 text-left p-8 w-auto h-auto">
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faBowlFood} className="text-2xl md:mt-2" />
              <h2 className="font-bold text-2xl mb-1">
                Multiple Daily Deliveries
              </h2>
            </div>
            <p>
              Fresh meals delivered multiple times a day to ensure ultimate
              convenience and quality!
            </p>
          </div>

          <div className="bg-gray-600 text-gray-300 text-left p-8 w-auto h-auto">
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faLeaf} className="text-2xl md:mt-2" />
              <h2 className="font-bold text-2xl mb-1">Freshness Guaranteed</h2>
            </div>
            <p>
              Experience the difference of meals crafted from the freshest,
              locally sourced ingredients every day with wholesomeness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHomePage;
