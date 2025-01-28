const InfluencerHeader = ({ name, description, tags, image }: any) => (
  <div className="flex items-center gap-4 mb-6">
    <img src={image} alt={name} className="w-24 h-24 rounded-full" />
    <div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-gray-400">{description}</p>
      <div className="flex gap-2 mt-2">
        {tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="text-sm bg-gray-700 text-white rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default InfluencerHeader;
