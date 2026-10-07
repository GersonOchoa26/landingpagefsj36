import RutaCard from "@/components/RutaCard";
import { getRutas } from "@/lib/queries";

export const revalidate = 60;

export default async function Home() {
  const rutas = await getRutas();

  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-extrabold">Todas las rutas</h1>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {rutas.map((ruta) => (
          <RutaCard key={ruta.id} ruta={ruta} />
        ))}
      </div>
    </section>
  );
}