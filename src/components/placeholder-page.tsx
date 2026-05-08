type Props = {
  title: string;
  description?: string;
};

export function PlaceholderPage({ title, description }: Props) {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">
        {description ?? "Próximamente. Esta sección se implementará en la siguiente iteración."}
      </p>
    </div>
  );
}
