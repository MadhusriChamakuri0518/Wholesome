import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const contact = () => {
  return (
    <div>
      <div className="p-10 flex flex-col gap-4 md:flex-row">
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-black text-5xl font-bold md:mt-24">
            Get In Touch
          </h1>
          <p className="my-4 md:pr-8 text-xl">
            Need to get in touch with us? Either fill out the form with your
            inquiry or reach out to us by email or phone.
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
          <form className="bg-gray-100 p-8 shadow-md w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block font-medium mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Email Address</label>
              <input
                type="email"
                className="w-full bg-white border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full bg-white border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                className="w-full bg-white border border-gray-300 p-2 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-white font-semibold py-2 shadow hover:bg-yellow-300 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="hidden md:block w-full border-t border-gray-300"></div>
    </div>
  );
};

export default contact;
