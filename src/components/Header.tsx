import React, { useState } from "react";
import { Link } from "react-router";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="w-full max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center shadow-md">
              <img
                src="./fav.png"
                alt="CorperSnap"
                className="w-6 h-6 object-contain"
              />
            </div>

            <div>
              <Link to="/" className="block">
                <h1 className="text-green-700 font-poppins font-bold text-2xl leading-tight hover:opacity-80 transition-opacity">
                  Corper<span className="text-yellow-600">Snap</span>
                </h1>
                <p className="text-xs text-gray-500 font-inter">POP Flyers</p>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 font-inter font-medium transition-colors duration-200 hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-green-600 font-inter font-medium transition-colors duration-200 hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              to="/support"
              className="text-gray-700 hover:text-green-600 font-inter font-medium transition-colors duration-200 hover:underline underline-offset-4"
            >
              Support
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-green-600 font-inter font-medium transition-colors duration-200 py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-green-600 font-inter font-medium transition-colors duration-200 py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                to="/support"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-green-600 font-inter font-medium transition-colors duration-200 py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                Support
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;