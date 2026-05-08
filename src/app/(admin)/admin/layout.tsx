import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";

const NAV = [
  { href: "/admin", label: "Resumen" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/clientes", label: "Clientes" },
  { href: "/admin/planes", label: "Planes" },
  { href: "/admin/rutinas", label: "Rutinas" },
  { href: "/admin/dietas", label: "Dietas" },
  { href: "/admin/calendario", label: "Calendario" },
  { href: "/admin/blog", label: "Blog" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login?next=/admin");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, full_name")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") {
    redirect("/app");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:flex md:w-64 flex-col border-r bg-muted/30">
        <div className="h-16 flex items-center px-6 border-b">
          <Link href="/admin" className="font-semibold">
            Atoro · Admin
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 hover:bg-muted text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t text-sm text-muted-foreground">
          <div className="truncate">{profile?.full_name ?? user.email}</div>
          <form action="/auth/logout" method="post" className="mt-2">
            <Button
              type="submit"
              variant="outline"
              size="sm"
              className="w-full"
            >
              Cerrar sesión
            </Button>
          </form>
        </div>
      </aside>

      <main className="flex-1 px-6 py-8 max-w-6xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
