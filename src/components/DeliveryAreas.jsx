import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const DeliveryAreas = () => {
  return (
    <div>
      <div className="p-10 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h1 className="text-black text-5xl font-bold md:mt-24">
            Our Delivery Areas
          </h1>
          <p className="my-4 md:pr-8 text-xl">
            We currently deliver to a large part of Hyderabad city, and are
            working hard to reach every corner! Please reach out to us if you
            have any questions or want us to cover your location.
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
        <div className="border b-2 w-10 h-120"></div>
      </div>
      <div className="hidden md:block w-full border-t border-gray-300"></div>
    </div>
  );
};

export default DeliveryAreas;
