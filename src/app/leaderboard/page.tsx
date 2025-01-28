"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/card";
import { FaUsers, FaCheckCircle, FaChartLine } from "react-icons/fa";

export default function Leaderboard() {
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("highest");

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Influencer Trust Leaderboard</h1>
      <p className="text-xl mb-8">
        Realtime rankings of health influencers based on scientific accuracy,
        credibility, and transparency. Updated daily using AI-powered analysis.
      </p>
      <div className="flex justify-between gap-4 mb-8">
        <Card className="bg-gray-800 p-6 flex-1">
          <CardContent className="flex flex-col items-center">
            <FaUsers className="text-4xl mb-2" />
            <span className="text-3xl font-bold">1,234</span>
            <span className="text-lg">Active Influencers</span>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 p-6 flex-1">
          <CardContent className="flex flex-col items-center">
            <FaCheckCircle className="text-4xl mb-2" />
            <span className="text-3xl font-bold">567</span>
            <span className="text-lg">Claims Verified</span>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 p-6 flex-1">
          <CardContent className="flex flex-col items-center">
            <FaChartLine className="text-4xl mb-2" />
            <span className="text-3xl font-bold">85%</span>
            <span className="text-lg">Average Trust Score</span>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          {["all", "nutrition", "fitness", "medicine", "mental health"].map(
            (category) => (
              <Button
                key={category}
                className={`border border-green-600 bg-transparent hover:bg-green-600 hover:bg-opacity-50 px-4 py-2 ${
                  filter === category ? "bg-green-600 bg-opacity-50" : ""
                }`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            )
          )}
        </div>
        <Button
          className="border border-green-600 bg-transparent hover:bg-green-600 hover:bg-opacity-50 px-4 py-2"
          onClick={() =>
            setSortOrder(sortOrder === "highest" ? "lowest" : "highest")
          }
        >
          {sortOrder === "highest" ? "Highest First" : "Lowest First"}
        </Button>
      </div>
      <table className="w-full bg-gray-800 text-white">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-4 text-left">Rank</th>
            <th className="p-4 text-left">Influencer</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Trust Score</th>
            <th className="p-4 text-left">Trend</th>
            <th className="p-4 text-left">Followers</th>
            <th className="p-4 text-left">Verified Claims</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr className="border-t border-gray-700">
            <td className="p-4">1</td>
            <td className="p-4">John Doe</td>
            <td className="p-4">Nutrition</td>
            <td className="p-4">95%</td>
            <td className="p-4">Up</td>
            <td className="p-4">1M</td>
            <td className="p-4">120</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}
