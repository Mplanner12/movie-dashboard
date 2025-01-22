import React from "react";
import { motion } from "framer-motion";
import { MdStars, MdCalendarToday, MdGroup } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { Movie } from "@/utils/types/types";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <motion.div
      className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 dark:bg-gray-800 dark:text-white"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {movie.title}
      </h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {movie.genre.map((genre: string, index: number) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 dark:bg-gray-700 dark:text-gray-300"
          >
            {genre}
          </span>
        ))}
      </div>
      <div className="flex items-center mb-2">
        <MdCalendarToday className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
        <p className="text-gray-700 dark:text-gray-300">{movie.year}</p>
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
    </motion.div>
  );
};

export default MovieCard;
