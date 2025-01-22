"use client";
import { Movie } from "@/utils/types/types";
import { FaAward } from "react-icons/fa";
import { MdCalendarToday, MdGroup, MdStars } from "react-icons/md";

const TopPerformers = ({ data }: { data: Movie[] }) => {
  const topMovies = [...data]
    .sort((a, b) => b.imdb_rating - a.imdb_rating)
    .filter(
      (movie, index, self) =>
        index ===
        self.findIndex((m) => m.title === movie.title && m.year === movie.year)
    )
    .slice(0, 5);

  return (
    <div
      id="top-performers"
      className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Top 5 Movies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {topMovies.map((movie, index) => (
          <div
            key={movie.title + movie.year + index}
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 flex flex-col items-start"
          >
            <div>
              <span className="font-bold text-lg text-gray-900 dark:text-white">
                {movie.title}
              </span>
            </div>
            <div className="flex items-center mb-2">
              <MdStars className="w-5 h-5 mr-2 text-yellow-500" />
              <p className="text-gray-700 dark:text-gray-300">
                IMDb: {movie.imdb_rating}
              </p>
            </div>
            <div className="flex items-center mb-2">
              <FaAward className="w-5 h-5 mr-2 text-gold-500" />
              <p className="text-gray-700 dark:text-gray-300">
                Oscar Wins: {movie.oscar_winning}
              </p>
            </div>
            <div className="flex items-center mb-2">
              <MdGroup className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
              <p className="text-gray-700 dark:text-gray-300">
                Cast: {movie.cast.join(", ")}
              </p>
            </div>
            <div className="flex items-center mb-2">
              <MdCalendarToday className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
              <p className="text-gray-700 dark:text-gray-300">{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformers;
