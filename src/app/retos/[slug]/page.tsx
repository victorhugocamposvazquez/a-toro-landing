import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/app/(marketing)/_components/site-footer";
import { SiteHeader } from "@/app/(marketing)/_components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLUGS: Record<string, string> = {
  abdominales: "Abdominales en casa con almohadas",
  rompepiernas: "Reto rompepiernas",
  "culo-grande": "Reto culo grande",
  biceps: "Reto bíceps",
};

type Props = { params: Promise<{ slug: string }> };

export default async function RetoDetailPage({ params }: Props) {
  const { slug } = await params;
  const title = SLUGS[slug];
  if (!title) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 bg-white min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-16 flex-1 w-full">
        <h1 className="text-3xl font-bold text-brand-text">{title}</h1>
        <p className="mt-4 text-brand-text-muted">
          Pronto podrás iniciar este reto desde la app. Mientras tanto, descarga
          la aplicación desde la sección principal o vuelve a los retos.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/#app"
            className={cn(buttonVariants(), "inline-flex")}
          >
            Ir a la app
          </Link>
          <Link
            href="/retos"
            className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
          >
            Todos los retos
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
