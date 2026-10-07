import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Actividades Dia del Niño", template: "%s | Actividades Dia del Niño" },
  description:
    "Actividades para el Día del Niño en El Salvador. Explora rutas y zonas para disfrutar con los más pequeños.",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-stone-50 text-stone-900">
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-extrabold text-teal-700">
              Actividades Dia del Niño
            </Link>
          
          </nav>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
