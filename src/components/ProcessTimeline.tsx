type Phase = {
  title: string;
  body: string;
};

export function ProcessTimeline({ phases }: { phases: Phase[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
      {phases.map((phase, index) => (
        <article key={phase.title} className="relative overflow-hidden border border-clinical-line bg-white p-6 transition hover:border-[#050505] hover:bg-surface-soft">
          <span className="pointer-events-none absolute -right-2 top-2 text-[5rem] font-bold leading-none text-[#050505]/[0.035]" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-sm font-bold text-dental-blue">{String(index + 1).padStart(2, "0")}</p>
          <h2 className="mt-4 text-xl font-medium leading-tight text-[#050505]">{phase.title}</h2>
          <p className="mt-4 text-sm leading-6 text-clinical-muted">{phase.body}</p>
        </article>
      ))}
    </div>
  );
}
