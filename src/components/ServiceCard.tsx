type ServiceCardProps = {
  title: string;
  meaning: string;
  matters: string;
  receive: string;
};

export function ServiceCard({ title, meaning, matters, receive }: ServiceCardProps) {
  return (
    <article className="surface-card h-full p-6">
      <h2 className="text-xl font-bold text-dental-navy">{title}</h2>
      <div className="mt-5 space-y-4 text-sm leading-6 text-clinical-muted">
        <p>
          <strong className="text-clinical-ink">What it means: </strong>
          {meaning}
        </p>
        <p>
          <strong className="text-clinical-ink">Why it matters: </strong>
          {matters}
        </p>
        <p>
          <strong className="text-clinical-ink">What manufacturers receive: </strong>
          {receive}
        </p>
      </div>
    </article>
  );
}
