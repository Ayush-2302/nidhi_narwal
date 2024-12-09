import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import {
  FaHome,
  FaUser,
  FaCalendar,
  FaImage,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Home", icon: <FaHome className="mr-2" /> },
    { to: "#about", label: "About", icon: <FaUser className="mr-2" /> },
    { to: "#events", label: "Events", icon: <FaCalendar className="mr-2" /> },
    { to: "#gallery", label: "Gallery", icon: <FaImage className="mr-2" /> },
    { to: "#contact", label: "Contact", icon: <FaPhoneAlt className="mr-2" /> },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black p-4 sticky z-50 top-0">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-red-500 font-bold text-xl"
        >
          {/* <BiPencil />
          <span className="font-mono">Nidhi Narwal</span> */}
          <img src="/logo1.png" alt="Nidhi" className="w-28" />
        </Link>

        <ul className="flex space-x-6 text-white hidden md:flex">
          {menuItems.map((item) => (
            <li key={item.to}>
              <a
                href={item.to}
                className="flex items-center hover:text-gray-400 transition duration-200"
              >
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu (Hidden on larger screens) */}
      <div className="md:hidden">
        <button className="text-white" onClick={toggleMobileMenu}>
          <GiHamburgerMenu />
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 right-0 bg-gray-800 text-white flex flex-col items-center space-y-4 py-4`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center hover:text-gray-400 transition duration-200"
              onClick={closeMobileMenu}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
