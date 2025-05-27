import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="navbar py-3">
          <div className="navbar-start">
            <div className="dropdown lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 gap-1"
              >
                <li>
                  <Link to="/" className="font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="font-medium">
                    Our Menu
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="font-medium">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="font-medium">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="font-medium">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path d="M11.25 3v4.046a3 3 0 00-4.277 4.204H1.5v-6A2.25 2.25 0 013.75 3h7.5zM12.75 3v4.011a3 3 0 014.239 4.239H22.5v-6A2.25 2.25 0 0020.25 3h-7.5zM22.5 12.75v6a2.25 2.25 0 01-2.25 2.25h-7.5v-4.005a3.001 3.001 0 01-4.5 0V21h-7.5a2.25 2.25 0 01-2.25-2.25v-6h4.5a3 3 0 004.5 0h10.5z" />
                </svg>
              </div>
              <span className="font-bold text-xl">Coffee Studio</span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2">
              <li>
                <Link
                  to="/"
                  className="font-medium hover:text-amber-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="font-medium hover:text-amber-600 transition-colors"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-medium hover:text-amber-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="font-medium hover:text-amber-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-medium hover:text-amber-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end flex items-center gap-2">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <Link
              to="/login"
              className="btn btn-sm btn-outline"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="btn btn-sm bg-amber-600 text-white hover:bg-amber-700 border-none"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
