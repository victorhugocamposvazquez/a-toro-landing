import Link from "next/link";

import { LoginForm } from "@/app/(auth)/login/login-form";

type LoginPageProps = {
  searchParams: Promise<{ next?: string; error?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { next, error } = await searchParams;

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Inicia sesión</h1>
        <p className="text-sm text-muted-foreground">
          Accede a tu plan de entrenamiento.
        </p>
      </div>

      <LoginForm next={next} initialError={error} />

      <p className="text-center text-sm text-muted-foreground">
        ¿No tienes cuenta?{" "}
        <Link href="/auth/register" className="text-foreground underline">
          Regístrate
        </Link>
      </p>
    </div>
  );
}
