const StatsCard = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-gray-800 p-4 rounded-lg text-center">
    <h2 className="text-lg font-semibold">{label}</h2>
    <p className="text-2xl font-bold text-green-400">{value}</p>
  </div>
);

const InfluencerStats = ({ stats }: any) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    {stats.map((stat: any, index: number) => (
      <StatsCard key={index} label={stat.label} value={stat.value} />
    ))}
  </div>
);

export default InfluencerStats;
