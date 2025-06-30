import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelopeOpenText,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import MultiStepForm from "./MultiStepForm";

const Purchase = () => {
  return (
    <div className="p-10 flex flex-col gap-4 md:flex-row">
      <div className="md:w-1/2 md:pl-4">
        <h1 className="text-black text-5xl font-bold md:mt-24">
          Interested?{" "}
          <FontAwesomeIcon icon={faHeart} className="text-5xl text-red-400" />
        </h1>
        <p className="my-4 md:pr-8 text-xl">
          Please share your contact details and some of your preferences so that
          we can help you get started with Wholesome. We'll get in touch with you
          soon to discuss next steps!
        </p>
        <div className="py-2">
          <div className="flex gap-2 py-2">
            <FontAwesomeIcon icon={faPhone} className="text-xl mt-1.5" />
            <p>+91 12345 12345</p>
          </div>
          <div className="flex gap-2 py-2">
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className="text-xl mt-1.5"
            />
            <p>contact@wholesome.in</p>
          </div>
          <div className="flex gap-2 py-2">
            <FontAwesomeIcon icon={faInstagram} className="text-xl mt-1.5" />
            <p>getWholesomeNutrition</p>
          </div>
        </div>
      </div>
      <div>
        <MultiStepForm/>
      </div>
    </div>
  );
};

export default Purchase;
