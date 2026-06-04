type Phase = {
  title: string;
  body: string;
};

export function ProcessTimeline({ phases }: { phases: Phase[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {phases.map((phase, index) => (
        <article key={phase.title} className="surface-card p-5">
          <p className="text-sm font-bold text-dental-blue">0{index + 1}</p>
          <h2 className="mt-2 text-lg font-bold text-dental-navy">{phase.title}</h2>
          <p className="mt-3 text-sm leading-6 text-clinical-muted">{phase.body}</p>
        </article>
      ))}
    </div>
  );
}
