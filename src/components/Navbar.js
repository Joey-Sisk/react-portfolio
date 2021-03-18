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
            to="/post"
          >
            Blog Post
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
            to="/about"
          >
            About Me
          </NavLink>
          <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon
              url="https://github.com/Joey-Sisk"
              className="mr-4"
              target="_blank"
              bgColor="#333"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/joey-sisk/"
              className="mr-4"
              target="_blank"
              bgColor="#333"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
