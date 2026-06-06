import { StepCard } from "./StepCard";

type FeatureGridItem = {
  title: string;
  body: string;
  eyebrow?: string;
};

type FeatureGridProps = {
  items: FeatureGridItem[];
  columns?: "three" | "four" | "five";
};

export function FeatureGrid({ items, columns = "three" }: FeatureGridProps) {
  const columnClass = {
    three: "md:grid-cols-2 xl:grid-cols-3",
    four: "md:grid-cols-2 xl:grid-cols-4",
    five: "md:grid-cols-2 xl:grid-cols-5"
  }[columns];

  return (
    <div className={`grid gap-6 ${columnClass}`}>
      {items.map((item, index) => (
        <StepCard
          key={item.title}
          number={String(index + 1).padStart(2, "0")}
          title={item.title}
          body={item.body}
          eyebrow={item.eyebrow}
        />
      ))}
    </div>
  );
}
