type ComplianceNoteProps = {
  title?: string;
  body?: string;
};

export function ComplianceNote({
  title = "Important Compliance Note",
  body = "Dental Market does not provide legal, FDA, regulatory, clinical, product-safety, customs, tax, import, or medical advice, and is not offering FDA U.S. Agent service. Manufacturers are responsible for proper compliance, labeling, registrations, product claims, insurance, and import requirements. Product review does not guarantee purchase orders, distribution, sales, private-label cooperation, brand cooperation, or supplier partnership."
}: ComplianceNoteProps) {
  return (
    <div className="border border-[#050505] bg-white p-7">
      <p className="section-kicker">Compliance boundary</p>
      <h2 className="mt-3 text-2xl font-medium leading-tight text-[#050505]">{title}</h2>
      <p className="mt-3 leading-7 text-clinical-ink">{body}</p>
    </div>
  );
}
