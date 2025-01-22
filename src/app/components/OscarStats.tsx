"use client";

import { Movie } from "@/utils/types/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const OscarStats = ({ data }: { data: Movie[] }) => {
  const processedData = data.map((movie) => ({
    title: movie.title,
    nominations: movie.oscar_nominations,
    wins: movie.oscar_winning,
  }));

  return (
    <div
      id="oscar-stats"
      className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Oscar Statistics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={processedData}>
          <XAxis
            dataKey="title"
            axisLine={false}
            tickLine={false}
            angle={-45}
            tick={{ fill: "gray", fontSize: 10 }}
            textAnchor="end"
          />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "gray" }} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="nominations"
            fill="#8884d8"
            name="Nominations"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="wins"
            fill="#82ca9d"
            name="Wins"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OscarStats;
