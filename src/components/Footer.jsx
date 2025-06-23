import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="p-10 flex flex-col md:flex-row md:justify-around">
        <div>
          <div className="text-4xl font-bold text-black py-2">
            <span className="text-yellow-400">Whole</span>some
          </div>
          <p>© 2025 Wholesome by BodyFit LLP.</p>
          <p>No 343, BBMP No. 8, 8th Main Road,</p>
          <p>Gachibowli, Hyderabad - 500081</p>
        </div>
        <div className="mt-12 md:mt-0 mb-8 md:mb-0">
          <ul className="flex flex-col md:flex-row gap-12">
            <li>
              <h2 className="font-semibold">Quick Links</h2>
              <p>Plans</p>
              <p>Contact Us</p>
              <p>Delivery Areas</p>
              <p>Build Your Plan</p>
            </li>
            <li>
              <h2 className="font-semibold">Our Policies</h2>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Cancellation & Refund Policy</p>
              <p>Carry Forward Policy</p>
            </li>
            <li>
              <h2 className="font-semibold">Reach Us</h2>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-l mt-1.5" />
                <p>+91 12345 12345</p>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon
                  icon={faEnvelopeOpenText}
                  className="text-l mt-1.5"
                />
                <p>contact@wholesome.in</p>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-l mt-1.5"
                />
                <p>getWholesomeNutrition</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
