type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "white" | "soft" | "mint";
};

export function Section({ children, className = "", id, tone = "default" }: SectionProps) {
  const tones = {
    default: "",
    white: "bg-white",
    soft: "bg-surface-soft",
    mint: "bg-surface-mint"
  };

  return (
    <section id={id} className={`px-5 py-16 sm:px-6 lg:px-8 lg:py-28 ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-[1750px]">{children}</div>
    </section>
  );
}
