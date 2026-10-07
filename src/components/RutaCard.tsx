import Image from "next/image";
import Link from "next/link";
import type { Ruta } from "@/lib/types";

export default function RutaCard({ ruta }: { ruta: Ruta }) {
  return (
    <Link
      href={`/rutas/${ruta.id}`}
      className="group block overflow-hidden rounded-2xl border border-stone-200 bg-white"
    >
      <div className="relative aspect-video bg-stone-100">
        {ruta.imagen_url && (
          <Image
            src={ruta.imagen_url}
            alt={ruta.nombre}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition group-hover:scale-105"
          />
        )}
      </div>
      <div className="space-y-1 p-4">
        {ruta.zonas && (
          <p className="text-xs font-semibold uppercase text-teal-700">
            {ruta.zonas.nombre}
          </p>
        )}
        <h3 className="text-lg font-bold text-stone-900">{ruta.nombre}</h3>
        <p className="line-clamp-2 text-sm text-stone-600">{ruta.descripcion}</p>
      </div>
    </Link>
  );
}