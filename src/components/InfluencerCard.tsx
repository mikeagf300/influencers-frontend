interface InfluencerCardProps {
  influencer: {
    name: string;
    category: string;
    verified: boolean;
    bio: string;
    profileImage: string; // Agregar esta propiedad
  };
}

export default function InfluencerCard({
  influencer: { name, category, verified, bio, profileImage },
}: InfluencerCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
      <img
        src={profileImage}
        alt={name}
        className="w-16 h-16 rounded-full mb-4 object-cover"
      />

      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{category}</p>
      {verified && (
        <span className="text-green-600 text-xs font-bold mt-1">
          ✔ Verificado
        </span>
      )}
      <p className="text-gray-700 mt-4 text-sm">{bio}</p>
    </div>
  );
}
