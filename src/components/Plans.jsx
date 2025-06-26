import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarWeek,
  faBowlRice,
  faTruckFast,
  faComments,
  faLeaf,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";

const Plans = () => {
  return (
    <div>
      <div className="bg-gray-500 pb-4">
        <h2 className="font-pacifico text-white text-center pt-8 md:pt-16 text-3xl mb-4 px-10">
          plans and pricing
        </h2>
        <h1 className="text-3xl md:text-5xl text-center text-white font-bold mb-4 px-10">
          Affordable Healthy Eating
        </h1>

        <div className="bg-yellow-400 w-full my-8 py-2 flex flex-col md:flex-row justify-evenly px-10">
          <p className="font-semibold text-center text-xl py-2">
            Still Unsure? Start With A Short Trial!
          </p>
          <button className="px-6 py-2 bg-black text-white font-semibold">
            Let's Go!
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 px-4 pb-10">
          <div className="bg-gray-300 p-10 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-2xl text-center">3 DAYS</h2>
              <div className="bg-white text-center my-4 p-6">
                <h1 className="font-bold text-5xl">₹249</h1>
                <p className="font-semibold">per meal</p>
              </div>
              <ul>
                <li className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faCalendarWeek}
                    className="text-l md:mt-2"
                  />
                  <p>Monday to Saturday</p>
                </li>
                <li className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faBowlRice}
                    className="text-l md:mt-2"
                  />
                  <p>Lunch, Snack, Dinner</p>
                </li>
                <li className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faTruckFast}
                    className="text-l md:mt-2"
                  />
                  <p>Free Delivery</p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-gray-700 text-white border-2 border-black font-semibold py-4 px-14 hover:bg-yellow-300 hover:text-black">
                Try it Now
              </button>
            </div>
          </div>

          <div className="bg-gray-300 p-10 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-2xl text-center">2 WEEKS</h2>
              <div className="bg-white text-center my-4 p-6">
                <h1 className="font-bold text-5xl">₹219</h1>
                <p className="font-semibold">per meal</p>
              </div>
              <ul>
                <li className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faCalendarWeek}
                    className="text-l md:mt-2"
                  />
                  <p>Monday to Saturday</p>
                </li>
                <li className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faBowlRice}
                    className="text-l md:mt-2"
                  />
                  <p>Lunch, Snack, Dinner</p>
                </li>
                <li className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faTruckFast}
                    className="text-l md:mt-2"
                  />
                  <p>Free Delivery</p>
                </li>
                <li className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faComments}
                    className="text-l md:mt-2"
                  />
                  <p>Nutritionist Guidance</p>
                </li>
                <li className="flex gap-4">
                  <FontAwesomeIcon icon={faLeaf} className="text-l md:mt-2" />
                  <p>Reusable Boxes</p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-6">
             <button className="bg-gray-700 text-white border-2 border-black font-semibold py-4 px-14 hover:bg-yellow-300 hover:text-black">
                Get Started
              </button>
            </div>
          </div>

          <div className="bg-gray-300 p-10 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-2xl text-center">1 MONTH</h2>
              <div className="bg-white text-center my-4 p-6">
                <h1 className="font-bold text-5xl">₹199</h1>
                <p className="font-semibold">per meal</p>
              </div>
              <ul>
                <li className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faCalendarWeek}
                    className="text-l md:mt-2"
                  />
                  <p>Monday to Saturday</p>
                </li>
                <li className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faBowlRice}
                    className="text-l md:mt-2"
                  />
                  <p>Lunch, Snack, Dinner</p>
                </li>
                <li className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faTruckFast}
                    className="text-l md:mt-2"
                  />
                  <p>Free Delivery</p>
                </li>
                <li className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faComments}
                    className="text-l md:mt-2"
                  />
                  <p>Nutritionist Guidance</p>
                </li>
                <li className="flex gap-4">
                  <FontAwesomeIcon icon={faLeaf} className="text-l md:mt-2" />
                  <p>Reusable Boxes</p>
                </li>
                <li className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faWandSparkles}
                    className="text-l md:mt-2"
                  />
                  <p>Unlimited Carry-Forward</p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-yellow-300 text-black border-2 border-black font-semibold py-4 px-14 hover:bg-yellow-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
