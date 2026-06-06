type ServiceCardProps = {
  title: string;
  meaning: string;
  matters: string;
  receive: string;
};

export function ServiceCard({ title, meaning, matters, receive }: ServiceCardProps) {
  return (
    <article className="h-full border border-clinical-line bg-white p-8 transition hover:border-[#050505] hover:bg-surface-soft">
      <h2 className="text-2xl font-medium leading-tight text-[#050505]">{title}</h2>
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
