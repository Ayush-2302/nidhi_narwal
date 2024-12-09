import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Array of social media links and their corresponding icons
  const socialLinks = [
    {
      id: 1,
      icon: <FaTwitter />,
      link: "https://x.com/nidhinarwal3217",
      color: "hover:text-blue-400",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      link: "https://www.instagram.com/nidhi.narwal_/",
      color: "hover:text-pink-500",
    },
    {
      id: 3,
      icon: <FaFacebook />,
      link: "https://www.facebook.com/search/top?q=nidhi%20narwal",
      color: "hover:text-blue-600",
    },
    {
      id: 4,
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/nidhi-narwal-99899831a/",
      color: "hover:text-blue-700",
    },
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4 text-lg font-semibold">
          &copy; 2024 Nidhi Narwal. All Rights Reserved.
        </p>
        <div className="mb-6">
          <p className="text-sm text-gray-400">
            "Poetry is the rhythmical creation of beauty in words."
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          {/* Map through the socialLinks array to create social icons */}
          {socialLinks.map(({ id, icon, link, color }) => (
            <Link 
              key={id}
              to={link}
              className={`text-3xl text-white ${color} transition duration-300`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </Link>
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-400">
          <p>Crafted with passion, ink, and heart.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
