import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CheckEmailPage() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">
        Revisa tu correo
      </h1>
      <p className="text-sm text-muted-foreground">
        Te hemos enviado un enlace de confirmación. Ábrelo desde tu bandeja
        de entrada para activar tu cuenta.
      </p>
      <Link
        href="/auth/login"
        className={cn(buttonVariants({ variant: "outline" }), "w-full")}
      >
        Volver a iniciar sesión
      </Link>
    </div>
  );
}
