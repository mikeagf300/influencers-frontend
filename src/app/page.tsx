"use client";
import { useEffect, useState } from "react";
import InfluencerCard from "../components/InfluencerCard";

interface Influencer {
  name: string;
  profileImage: string;
  category: string;
  verified: boolean;
  bio: string;
  email?: string;
}

export default function Home() {
  const [influencers, setInfluencers] = useState<Influencer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const API_KEY = "AIzaSyAusOxPbM2ej3rvZVpabGgXtP5zIu8AHCE"; // Sustituye por tu API key de YouTube
        const query = "influencers salud bienestar"; // Ajusta el término de búsqueda
        const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(
          query
        )}&key=${API_KEY}`;

        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();

        if (!searchData.items) {
          throw new Error("No se encontraron resultados");
        }

        // Extraer los IDs de los canales obtenidos en la búsqueda
        const channelIds = searchData.items
          .map((item: any) => item.snippet.channelId)
          .join(",");

        // Segunda petición a la API para obtener información de los canales
        const channelsUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds}&key=${API_KEY}`;
        const channelsResponse = await fetch(channelsUrl);
        const channelsData = await channelsResponse.json();

        if (!channelsData.items) {
          throw new Error("No se encontraron detalles de los canales");
        }

        // Extraer la información relevante de los canales
        const influencersData: Influencer[] = channelsData.items.map(
          (channel: any) => {
            // Verificar si existen imágenes y elegir la mejor calidad disponible
            const thumbnails = channel.snippet.thumbnails || {};
            const profileImage =
              thumbnails.high?.url ||
              thumbnails.medium?.url ||
              thumbnails.default?.url ||
              "/default-profile.png";

            return {
              name: channel.snippet.title || "Nombre no disponible",
              profileImage: profileImage, // Ahora aseguramos una imagen válida
              category: "Salud y Bienestar",
              verified: !!channel.snippet.customUrl,
              bio: channel.snippet.description || "Sin descripción disponible",
              email: undefined, // YouTube no proporciona correos electrónicos de canales
            };
          }
        );

        setInfluencers(influencersData);
      } catch (error) {
        console.error("Error fetching influencers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInfluencers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8 sm:p-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 sm:p-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-600">
          Descubre Influencers de Salud y Bienestar
        </h1>
        <p className="text-lg mt-4 text-gray-400">
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
