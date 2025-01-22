"use client";
import { useState } from "react";
import { MdMovieFilter, MdBarChart, MdStar, MdSearch } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link
          href="/dashboard"
          className="text-white text-xl md:text-2xl font-bold flex items-center"
        >
          <MdMovieFilter className="mr-2 w-6 h-6 text-blue-500" /> Movie
          Insights
        </Link>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>

        {isMobileMenuOpen && (
          <div className="md:hidden w-full mt-2">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  href="/dashboard#oscar-stats"
                  className="text-gray-300 hover:text-white py-2 px-4 flex justify-start gap-x-2"
                >
                  <MdBarChart className="mr-1 w-5 h-5" /> Charts
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard#top-performers"
                  className="text-gray-300 hover:text-white py-2 px-4 flex justify-start gap-x-2"
                >
                  <MdStar className="mr-1 w-5 h-5" /> Top Rated
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard#search-filter"
                  className="text-gray-300 hover:text-white py-2 px-4 flex justify-start gap-x-2"
                >
                  <MdSearch className="mr-1 w-5 h-5" /> Search
                </Link>
              </li>
            </ul>
          </div>
        )}

        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/dashboard#oscar-stats"
            className="text-gray-300 hover:text-white flex items-center"
          >
            <MdBarChart className="mr-1 w-5 h-5" /> Charts
          </Link>
          <Link
            href="/dashboard#top-performers"
            className="text-gray-300 hover:text-white flex items-center"
          >
            <MdStar className="mr-1 w-5 h-5" /> Top Rated
          </Link>
          <Link
            href="/dashboard#search-filter"
            className="text-gray-300 hover:text-white flex items-center"
          >
            <MdSearch className="mr-1 w-5 h-5" /> Search
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
