import InfluencerCard from "../components/InfluencerCard";

export default function Home() {
  const influencers = [
    {
      name: "Dr. Jason Fung",
      category: "Nutrición",
      verified: true,
      bio: "Experto en ayuno intermitente y salud metabólica.",
    },
    {
      name: "Ana Wellness",
      category: "Bienestar Mental",
      verified: true,
      bio: "Mindfulness y equilibrio emocional.",
    },
    {
      name: "Carlos Fit",
      category: "Fitness",
      verified: false,
      bio: "Rutinas de ejercicio para principiantes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray text-gray-900 p-8 sm:p-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-600">
          Descubre Influencers de Salud y Bienestar
        </h1>
        <p className="text-lg mt-4 text-gray-700">
          Encuentra expertos verificados que te ayudarán a mejorar tu estilo de
          vida.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {influencers.map((influencer, index) => (
          <InfluencerCard key={index} influencer={influencer} />
        ))}
      </section>

      <footer className="text-center mt-16 text-gray-600">
        <p>
          © 2025 Influencers Salud & Bienestar. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
