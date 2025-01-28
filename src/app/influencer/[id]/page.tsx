import { useState } from "react";
import InfluencerHeader from "@/components/InfluencerHeader";
import InfluencerStats from "@/components/InfluencerStats";
import Tabs from "@/components/Tabs";
import ClaimsTable from "@/components/ClaimsTable";

export default function InfluencerPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("Claims Analysis");

  const influencerData = {
    name: "Andrew Huberman",
    description:
      "Stanford Professor of Neuroscience and Ophthalmology, focusing on neural development, brain plasticity, and neural regeneration.",
    tags: [
      "Neuroscience",
      "Sleep",
      "Performance",
      "Stress Management",
      "Exercise Science",
    ],
    image: "https://via.placeholder.com/150",
    stats: [
      { label: "Trust Score", value: "89%" },
      { label: "Yearly Revenue", value: "$5.0M" },
      { label: "Products", value: "1" },
      { label: "Followers", value: "4.2M+" },
    ],
    claims: [
      {
        date: "14/01/2024",
        claim:
          "Viewing sunlight within 30-60 minutes of waking enhances cortisol release",
        trustScore: 92,
      },
      {
        date: "09/12/2023",
        claim:
          "Non-sleep deep rest (NSDR) protocols can accelerate learning and recovery",
        trustScore: 88,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <InfluencerHeader
        name={influencerData.name}
        description={influencerData.description}
        tags={influencerData.tags}
        image={influencerData.image}
      />
      <InfluencerStats stats={influencerData.stats} />
      <Tabs
        tabs={["Claims Analysis", "Recommended Products", "Monetization"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === "Claims Analysis" && (
        <ClaimsTable claims={influencerData.claims} />
      )}
    </div>
  );
}
