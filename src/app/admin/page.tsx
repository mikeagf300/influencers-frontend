// pages/admin.tsx
"use client";
import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Switch } from "@/components/ui/Switch";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/Textarea";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("Last Month");
  const [productsToFind, setProductsToFind] = useState(10);
  const [revenueAnalysis, setRevenueAnalysis] = useState(true);
  const [verifyWithJournals, setVerifyWithJournals] = useState(true);
  const [influencerName, setInfluencerName] = useState("");
  const [claimsToAnalyze, setClaimsToAnalyze] = useState(50);
  const [notes, setNotes] = useState("");

  return (
    <div className="p-0 m-0 bg-gray-900 min-h-screen text-white">
      <div className="flex items-center mb-6">
        <Link
          href="/dashboard"
          className="flex items-center text-green-400 hover:text-blue-600"
        >
          <FaArrowLeft className="mr-2" />
          Back to Dashboard
        </Link>

        <h1 className="text-3xl font-semibold p-4">Research Tasks</h1>
      </div>
      <Card className="bg-gray-800 p-6">
        <CardContent>
          <div className="flex justify-center items-center gap-4 w-full">
            <Button className="border border-green-600 w-full bg-transparent hover:bg-green-600 hover:bg-opacity-50">
              <span className="font-bold">Specific Influencer</span>
              <span className="block text-sm font-normal mt-1">
                Research a known health influencer by name
              </span>
            </Button>
            <Button className="border border-green-600 w-full bg-transparent hover:bg-green-600 hover:bg-opacity-50">
              <span className="font-bold">Discover New</span>
              <span className="block text-sm font-normal mt-1">
                Find and analyze new health influencers
              </span>
            </Button>
          </div>
          <div className="grid justify-center grid-cols-2 gap-4">
            <div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Time Range</h2>
                <div className="flex gap-2 mt-2">
                  {["Last Week", "Last Month", "Last Year", "All Time"].map(
                    (range) => (
                      <Button
                        key={range}
                        className={`border border-green-600 w-full bg-transparent hover:bg-green-600 hover:bg-opacity-50 ${
                          timeRange === range
                            ? "bg-green-600 bg-opacity-50"
                            : ""
                        }`}
                        onClick={() => setTimeRange(range)}
                      >
                        {range}
                      </Button>
                    )
                  )}
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Influencer Name</h2>
                <Input
                  placeholder="Enter influencer name"
                  value={influencerName}
                  onChange={(e: {
                    target: { value: SetStateAction<string> };
                  }) => setInfluencerName(e.target.value)}
                  className="mt-2 w-full"
                />
              </div>

              <div className="mt-4">
                <h2 className="text-lg font-semibold">Claims to Analyze</h2>
                <Input
                  type="number"
                  value={claimsToAnalyze}
                  onChange={(e: {
                    target: { value: SetStateAction<number> };
                  }) => setClaimsToAnalyze(e.target.value)}
                  className="mt-2 w-full"
                />
                <span>
                  Recommended: 50-100 claims for comprehensive analysis
                </span>
              </div>
            </div>

            <div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold">
                  Products to Find Per Influencer
                </h2>

                <Input
                  type="number"
                  value={productsToFind}
                  onChange={(e: {
                    target: { value: SetStateAction<number> };
                  }) => setProductsToFind(e.target.value)}
                  className="mt-2 w-full"
                />
                <span>Set to 0 to skip product research</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <span>Include Revenue Analysis</span>
                  <span>
                    Analyze monetization methods and estimate earnings
                  </span>
                </div>
                <Switch
                  checked={revenueAnalysis}
                  onCheckedChange={setRevenueAnalysis}
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <span>Verify with Scientific Journals</span>
                  <span>Cross-reference claims with scientific literature</span>
                </div>

                <Switch
                  checked={verifyWithJournals}
                  onCheckedChange={setVerifyWithJournals}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mt-5">
              <h2 className="text-lg font-semibold">Scientific Journals</h2>
              <div>
                <button className="text-green-400 hover:text-green-600 mr-2">
                  Select All
                </button>
                <button className="text-green-400 hover:text-green-600">
                  Deselect All
                </button>
              </div>
            </div>
            <div className="flex justify-between w-full mt-2">
              <div className="flex flex-col gap-2 w-full m-2">
                {[
                  "PubMed Central",
                  "Science",
                  "The Lancet",
                  "JAMA Network",
                ].map((journal) => (
                  <button
                    key={journal}
                    className="border border-green-600 bg-transparent hover:bg-green-600 hover:bg-opacity-50 text-white py-1 px-3 rounded w-full"
                  >
                    {journal}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-2 w-full m-2">
                {["Nature", "Cell", "New England Journal of Medicine"].map(
                  (journal) => (
                    <button
                      key={journal}
                      className="border border-green-600 bg-transparent hover:bg-green-600 hover:bg-opacity-50 text-white py-1 px-3 rounded w-full"
                    >
                      {journal}
                    </button>
                  )
                )}
              </div>
            </div>
            <button className="text-green-400 hover:text-green-600 mr-2">
              + Add New Journal
            </button>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">
              Notes for Research Assistant
            </h2>
            <Textarea
              placeholder="Add any specific instructions or focus areas..."
              value={notes}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setNotes(e.target.value)
              }
              className="mt-2"
            />
          </div>

          <div className="flex justify-end mt-4">
            <Button className="border border-green-600 bg-transparent hover:bg-green-600 hover:bg-opacity-50 px-10 py-2">
              + Start Research
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
