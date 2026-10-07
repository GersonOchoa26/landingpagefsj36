export interface Zona {
id: number;
nombre: string;
slug: string;
descripcion: string | null;
}
export interface Ruta {
id: number;
nombre: string;
descripcion: string;
imagen_url: string | null;
zona_id: number;
created_at: string;
// Viene del JOIN: select("*, zonas(nombre, slug)")
zonas: Pick<Zona, "nombre" | "slug"> | null;
}