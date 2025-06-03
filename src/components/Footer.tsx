
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">
                {" "}
                <img src="/fav.png" alt="" />{" "}
              </span>
            </div>
            <span className="text-4xl font-poppins sm:text-4xl font-bold bg-white bg-clip-text text-transparent">
              Corper<span className="text-yellow-600">Snap</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base font-medium hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              to="/support"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base font-medium hover:underline underline-offset-4"
            >
              Support
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 CorperSnap. All rights reserved.
            </p>

            {/* Tagline */}
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
              Making POP celebrations memorable ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
