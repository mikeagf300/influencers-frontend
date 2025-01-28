const Tabs = ({ tabs, activeTab, setActiveTab }: any) => (
  <div className="flex gap-4 border-b border-gray-700 mb-4">
    {tabs.map((tab: string, index: number) => (
      <button
        key={index}
        className={`py-2 px-4 ${
          activeTab === tab
            ? "border-b-2 border-green-500 text-white"
            : "text-gray-400"
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default Tabs;
