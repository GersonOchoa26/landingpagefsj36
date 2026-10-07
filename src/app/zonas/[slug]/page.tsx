import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RutaCard from "@/components/RutaCard";
import { getZonaBySlug, getRutasByZona, getZonas } from "@/lib/queries";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const zonas = await getZonas();
  return zonas.map((z) => ({ slug: z.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const zona = await getZonaBySlug(slug);
  if (!zona) return { title: "Zona no encontrada" };
  return { title: zona.nombre, description: zona.descripcion ?? undefined };
}

export default async function ZonaPage({ params }: Props) {
  const { slug } = await params;

  const zona = await getZonaBySlug(slug);
  if (!zona) notFound();

  const rutas = await getRutasByZona(zona.id);

  return (
    <section className="space-y-8">
      <Link href="/" className="text-sm text-stone-500 hover:text-teal-700">
        ← Volver
      </Link>

      <header className="space-y-3">
        <h1 className="text-4xl font-extrabold">{zona.nombre}</h1>
        <p className="text-lg text-stone-600">{zona.descripcion}</p>
      </header>

      {rutas.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rutas.map((ruta) => (
            <RutaCard key={ruta.id} ruta={ruta} />
          ))}
        </div>
      ) : (
        <p className="text-stone-500">Esta zona aún no tiene rutas.</p>
      )}
    </section>
  );
}