import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";

const NAV = [
  { href: "/app", label: "Inicio" },
  { href: "/app/rutinas", label: "Rutinas" },
  { href: "/app/dieta", label: "Dieta" },
  { href: "/app/calendario", label: "Calendario" },
  { href: "/app/perfil", label: "Perfil" },
];

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login?next=/app");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-semibold">
              Abraham Toro
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <form action="/auth/logout" method="post">
            <Button type="submit" variant="ghost" size="sm">
              Salir
            </Button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-6xl w-full px-6 py-8 flex-1">
        {children}
      </main>
    </div>
  );
}
