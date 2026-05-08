import Link from "next/link";

import { SiteFooter } from "@/app/(marketing)/_components/site-footer";
import { SiteHeader } from "@/app/(marketing)/_components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Listado de retos (la home enlaza aquí; antes no existía la ruta → 404 en producción).
 */
export default function RetosIndexPage() {
  return (
    <div className="flex flex-col flex-1 bg-white min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16 flex-1 w-full">
        <h1 className="text-3xl font-bold text-brand-text tracking-tight">
          Retos
        </h1>
        <p className="mt-2 text-brand-text-muted">
          Elige un reto y empieza desde la app. Más información en la{" "}
          <Link href="/#retos" className="text-brand underline">
            landing
          </Link>
          .
        </p>
        <ul className="mt-8 space-y-3">
          {[
            { href: "/retos/abdominales", label: "Abdominales en casa con almohadas" },
            { href: "/retos/rompepiernas", label: "Reto rompepiernas" },
            { href: "/retos/culo-grande", label: "Reto culo grande" },
            { href: "/retos/biceps", label: "Reto bíceps" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-brand font-medium hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "mt-10 inline-flex")}
        >
          Volver al inicio
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
