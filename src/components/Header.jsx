import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative">
      <nav className="h-20 bg-black w-full flex items-center text-center justify-between px-4 md:px-10 lg:px-15">
        <div
          className="text-4xl font-bold text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-yellow-400">Whole</span>some
        </div>

        <ul className="hidden md:flex gap-6 text-lg text-white font-semibold lg:gap-10 my-1.5">
          <li
            className="cursor-pointer hover:border-b-2 hover:border-white transition duration-200"
            onClick={() => navigate("/plans")}
          >
            Plans
          </li>
          <li
            className="cursor-pointer hover:border-b-2 hover:border-white transition duration-200"
            onClick={() => navigate("/deliveryareas")}
          >
            Delivery Areas
          </li>
          <li
            className="cursor-pointer hover:border-b-2 hover:border-white transition duration-200"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
          <li
            className="text-black bg-yellow-400 py-1.5 px-3 rounded-md hover:bg-yellow-200"
            onClick={() => navigate("/purchase")}
          >
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
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-black opacity-95 text-white z-50 transform transition-transform duration-300 ease-in-out ${
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
          <li
            className="cursor-pointer hover:border-b-2 hover:border-white pb-1 transition duration-200"
            onClick={() => {
              setMenuOpen(false);
              navigate("/plans");
            }}
          >
            Plans
          </li>
          <li
            onClick={() => {
              setMenuOpen(false);
              navigate("/deliveryareas");
            }}
          >
            Delivery Areas
          </li>
          <li
            onClick={() => {
              setMenuOpen(false);
              navigate("/contact");
            }}
          >
            Contact
          </li>
          <li
            className="text-black bg-yellow-400 py-1.5 px-3 rounded-md"
            onClick={() => {
              setMenuOpen(false);
              navigate("/purchase");
            }}
          >
            Get A 3-Day Trial
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
