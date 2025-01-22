import { MdMovieFilter } from "react-icons/md";

const DashboardOverview = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <div className="flex items-center mb-4">
        <MdMovieFilter className="text-blue-500 w-10 h-10 mr-4" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Movie Insights
        </h1>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-lg">
        Explore a world of movies! Search and filter to find specific titles,
        view Oscar statistics, discover top-rated films, and dive into details
        including ratings, genres, and cast information. Start your cinematic
        journey now!
      </p>
    </div>
  );
};

export default DashboardOverview;
