import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [{ count: leads }, { count: clientes }, { count: planes }] =
    await Promise.all([
      supabase.from("leads").select("*", { count: "exact", head: true }),
      supabase
        .from("profiles")
        .select("*", { count: "exact", head: true })
        .eq("role", "client"),
      supabase
        .from("training_plans")
        .select("*", { count: "exact", head: true }),
    ]);

  const stats = [
    { label: "Leads", value: leads ?? 0, href: "/admin/leads" },
    { label: "Clientes", value: clientes ?? 0, href: "/admin/clientes" },
    { label: "Planes", value: planes ?? 0, href: "/admin/planes" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Resumen</h1>
        <p className="text-muted-foreground">Vista general del backoffice.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader>
              <CardDescription>{s.label}</CardDescription>
              <CardTitle className="text-3xl">{s.value}</CardTitle>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </div>
  );
}
