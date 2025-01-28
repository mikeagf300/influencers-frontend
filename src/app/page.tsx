// app/page.tsx
import TweetCard from "../components/TweetCard"; // Asegúrate de tener este componente

export default function Home() {
  const tweets = [
    { username: "drjasonfung", content: "Eat more fiber!", verified: true },
    { username: "another_influencer", content: "Drink water to stay healthy", verified: false },
    // Añadir más tweets de ejemplo aquí
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold mb-4">Verificación de Tweets</h1>
        <p className="text-lg mb-8">A continuación se muestran algunos tweets verificados</p>
        <div className="min-h-screen bg-blue-500 text-white flex items-center justify-center">
      <h1 className="text-4xl text-blue-400">¡Tailwind está funcionando!</h1>
    </div>
        
        <div className="space-y-4">
          {tweets.map((tweet, index) => (
            <TweetCard key={index} tweet={tweet} />
          ))}
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Enlaces de footer si es necesario */}
      </footer>
    </div>
  );
}
