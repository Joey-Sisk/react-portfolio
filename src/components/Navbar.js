import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-blueGray-900 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between">
        <nav className="flex px-3 w-full">
          <NavLink
            className="transition duration-700 custom-font inflex-flex items-center py-6 px-3 mr-4 text-violet-400 hover:text-purple-500 text-4xl font-bold tracking-wide"
            activeClassName="text-white"
            to="/"
            exact
          >
            JS
          </NavLink>
          <NavLink
            className="transition duration-700 inflex-flex items-center py-3 px-3 my-6 rounded text-violet-300 hover:text-purple-400"
            activeClassName="text-indigo-100 bg-indigo-900"
            to="/project"
          >
            Projects
          </NavLink>
          {/* <NavLink
            className="transition duration-700 inflex-flex items-center py-3 px-3 my-6 rounded text-violet-300 hover:text-purple-400"
            activeClassName="text-indigo-100 bg-indigo-900"
            to="/contact"
          >
            Contact
          </NavLink> */}
          <NavLink
            className="transition duration-700 inflex-flex items-center py-3 px-3 my-6 rounded text-violet-300 hover:text-purple-400"
            activeClassName="text-indigo-100 bg-indigo-900"
            to="/about"
          >
            About Me
          </NavLink>
          <h1 className="transition duration-700 inflex-flex items-center py-3 px-3 my-6 rounded text-violet-300 hover:text-purple-400">
            <a href="https://drive.google.com/file/d/15nc0uAKxa6dASMyWtxUL6mwNG323of8x/view?usp=sharing" target="_blank">Resume</a>
          </h1>
        </nav>
      </div>
    </header>
  );
}
