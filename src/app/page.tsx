"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import OscarStats from "./components/OscarStats";
import TopPerformers from "./components/TopPerformers";
import SearchFilter from "./components/SearchFilter";
import MovieCard from "./components/MovieCard";
import data from "./movie-data/movies/movies.json";
import DashboardOverview from "./components/DashboardOverview";

const Dashboard = () => {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-3 md:px-6 lg:px-9">
      <Navbar />
      <main className="container mx-auto py-6 px-4 md:px-8 lg:px-12 space-y-8">
        {/* Main content area */}
        <DashboardOverview />
        <SearchFilter data={data} setFiltered={setFilteredData} />
        {/* Sections with Headings and Content */}
        <section id="oscar-stats">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Oscar Statistics
          </h2>
          <OscarStats data={filteredData} />
        </section>
        <section id="top-performers">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Top Performers
          </h2>
          <TopPerformers data={filteredData} />
        </section>
        <section id="all-movies">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            All Movies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredData
              .filter(
                (movie, index, self) =>
                  index ===
                  self.findIndex(
                    (m) => m.title === movie.title && m.year === movie.year
                  )
              )
              .map((movie, index) => (
                <MovieCard
                  key={movie.title + movie.year + index}
                  movie={movie}
                />
              ))}
          </div>
        </section>
      </main>
      <footer className="bg-gray-200 dark:bg-gray-800 p-4 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Movie Statistics Dashboard. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
