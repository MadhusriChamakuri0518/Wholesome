import React from "react";
import discover from "../assets/discover.png";
import plan from "../assets/plan.png";
import deliver from "../assets/delivery.png";
import track from "../assets/track.png";

const FourthHomePage = () => {
  return (
    <div>
      <div className="px-10 py-20 md:px-20 flex flex-col md:flex-row">
        <div>
          <p className="font-pacifico text-left pt-8 md:pt-12 text-3xl mb-4">
            How we work
          </p>
          <h1 className="text-3xl text-yellow-400 md:text-5xl font-bold mb-4 max-w-xl">
            Discover, Plan, Deliver, Track!
          </h1>
        </div>
        <div>
          <div className="flex flex-col md:flex-row md:gap-4 md:mb-4">
            <div>
              <img
                className="hidden md:block w-26 h-26 mt-10"
                src={discover}
                alt=""
              />
            </div>
            <div>
              <p className="font-pacifico pt-4 md:pt-12 text-xl">step 1</p>
              <h2 className="text-xl text-yellow-400 md:text-xl font-bold">
                Discover
              </h2>
              <p>
                We learn all about you, your goals, and preferences. We take all
                this into account and create the perfect plan for you.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-4 md:mb-4">
            <div>
              <p className="font-pacifico pt-4 md:pt-12 text-xl">step 2</p>
              <h2 className="text-xl text-yellow-400 md:text-xl font-bold">
                Plan
              </h2>
              <p>
                We learn all about you, your goals, and preferences. We take all
                this into account and create the perfect plan for you.
              </p>
            </div>
            <div>
              <img
                className="hidden md:block w-30 h-30 mt-10"
                src={plan}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-4 md:mb-4">
            <div>
              <img
                className="hidden md:block w-30 h-30 mt-10"
                src={deliver}
                alt=""
              />
            </div>
            <div>
              <p className="font-pacifico pt-4 md:pt-12 text-xl">step 3</p>
              <h2 className="text-xl text-yellow-400 md:text-xl font-bold">
                Deliver
              </h2>
              <p>
                We learn all about you, your goals, and preferences. We take all
                this into account and create the perfect plan for you.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-4 md:mb-4">
            <div>
              <p className="font-pacifico pt-4 md:pt-12 text-xl">step 4</p>
              <h2 className="text-xl text-yellow-400 md:text-xl font-bold">
                Track
              </h2>
              <p>
                We learn all about you, your goals, and preferences. We take all
                this into account and create the perfect plan for you.
              </p>
            </div>
            <div>
              <img
                className="hidden md:block w-30 h-30 mt-10"
                src={track}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthHomePage;
