import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 tracking-wider text-lg font-bold fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-lg">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold">
              <img
                src={logo}
                alt="logo"
                className="h-[50px] w-auto rounded-full"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 text-white px-3 py-2 rounded-md"
                  : "hover:bg-blue-500 px-3 py-2 rounded-md"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/accountants"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 text-white px-3 py-2 rounded-md"
                  : "hover:bg-blue-500 px-3 py-2 rounded-md"
              }
            >
              Accountants
            </NavLink>
            <NavLink
              to="/add-accountant"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 text-white px-3 py-2 rounded-md"
                  : "hover:bg-blue-500 px-3 py-2 rounded-md"
              }
            >
              Add Accountant
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FiX className="w-9 h-9 text-blue-600 bg-white rounded-full shadow-lg shadow-blue-500 p-1 " />
              ) : (
                <FiMenu className="w-9 h-9 text-blue-600 bg-white rounded-full shadow-lg shadow-blue-500 p-1 " />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-blue-500 tranpa fixed top-[80px] p-3 z-50"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 tracking-wider flex flex-col font-bold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 text-white px-3 py-2 rounded-md"
                  : "hover:bg-blue-500 px-3 py-2 rounded-md"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/accountants"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 text-white px-3 py-2 rounded-md"
                  : "hover:bg-blue-500 px-3 py-2 rounded-md"
              }
            >
              Accountants
            </NavLink>
            <NavLink
              to="/add-accountant"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 text-white px-3 py-2 rounded-md"
                  : "hover:bg-blue-500 px-3 py-2 rounded-md"
              }
            >
              Add Accountant
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
