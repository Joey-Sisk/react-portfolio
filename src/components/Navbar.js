import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-blueGray-900">
      <div className="container mx-auto flex justify-between">
        <nav className="flex px-3">
          <NavLink
            className="custom-font inflex-flex items-center py-6 px-3 mr-4 text-violet-400 hover:text-purple-500 text-4xl font-bold tracking-wide"
            activeClassName="text-white"
            to="/"
            exact
          >
            JS
          </NavLink>
          <NavLink
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-violet-300 hover:text-purple-400"
            activeClassName="text-indigo-100 bg-indigo-900"
            to="/project"
          >
            Projects
          </NavLink>
          <NavLink
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-violet-300 hover:text-purple-400"
            activeClassName="text-indigo-100 bg-indigo-900"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-violet-300 hover:text-purple-400"
            activeClassName="text-indigo-100 bg-indigo-900"
            to="/about"
          >
            About Me
          </NavLink>
          <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon
              url="https://github.com/Joey-Sisk"
              className="mx-4 hover:opacity-80"
              target="_blank"
              bgColor="#E2E8F0"
              fgColor="#0F172A"
              style={{ height: 38, width: 38 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/joey-sisk/"
              className="mx-4 hover:opacity-80"
              target="_blank"
              bgColor="#E2E8F0"
              fgColor="#0F172A"
              style={{ height: 38, width: 38 }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
