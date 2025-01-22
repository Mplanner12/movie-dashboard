"use client";
import { Movie } from "@/utils/types/types";
import { MdSearch } from "react-icons/md";

const SearchFilter = ({
  data,
  setFiltered,
}: {
  data: Movie[];
  setFiltered: (filteredData: Movie[]) => void;
}) => {
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const filtered = [...data].filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
    setFiltered(filtered);
  };

  return (
    <div
      id="search-filter"
      className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Search Movies
      </h2>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MdSearch className="w-5 h-5 text-gray-400 dark:text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search by title..."
          className="border p-2 pl-10 w-full rounded-md dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600" // updated styling
          onChange={handleFilter}
        />
      </div>
    </div>
  );
};

export default SearchFilter;
