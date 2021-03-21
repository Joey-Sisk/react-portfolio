import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-blueGray-900 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between">
        <nav className="flex px-3 w-full">
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
        </nav>
      </div>
    </header>
  );
}
