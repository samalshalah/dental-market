import Image from "next/image";

export type ProductCategoryPanel = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

type ProductCategoryPanelsProps = {
  items: ProductCategoryPanel[];
};

export function ProductCategoryPanels({ items }: ProductCategoryPanelsProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
      <div className="flex flex-col gap-4 md:h-[40rem] md:flex-row">
        {items.map((item, index) => {
          const panelNumber = String(index + 1).padStart(2, "0");

          return (
            <label
              key={item.title}
              className="product-category-panel group relative isolate min-h-[19rem] cursor-pointer overflow-hidden bg-[#050505] transition-all duration-500 ease-out focus-within:outline-none md:h-[40rem] md:min-h-0"
            >
              <input
                className="sr-only"
                type="radio"
                name="product-category-panel"
                defaultChecked={index === items.length - 1}
                aria-label={item.title}
              />

              <div className="panel-image absolute inset-0 transition duration-500">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  className="object-cover grayscale transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#050505]/28 transition duration-500 group-hover:bg-[#050505]/16" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/68 via-[#050505]/20 to-[#050505]/5" />
              </div>

              <div className="panel-shell relative z-10 flex h-full min-h-[19rem] flex-col justify-between p-6 text-white transition duration-500 md:min-h-0">
                <div className="panel-label transition duration-500">
                  <span className="panel-number block text-3xl font-semibold leading-none transition duration-500">
                    {panelNumber}.
                  </span>
                  <h3 className="panel-title mt-5 max-w-[18rem] text-3xl font-medium leading-tight transition duration-500 md:text-2xl">
                    {item.title}
                  </h3>
                </div>

                <div className="panel-body relative mt-10 max-w-xl transition duration-500">
                  <span className="pointer-events-none absolute -right-3 -top-20 text-[8rem] font-bold leading-none text-white/10 md:text-[10rem]">
                    {panelNumber}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#12c7ea]">Dental Market</p>
                  <p className="mt-4 max-w-lg text-base leading-7 text-slate-100">{item.body}</p>
                </div>
              </div>
            </label>
          );
        })}
      </div>

      <div className="relative overflow-hidden py-4">
        <span className="pointer-events-none absolute -right-4 top-4 hidden text-[23rem] font-bold leading-none text-[#050505]/[0.035] xl:block">
          D
        </span>
        <p className="section-kicker">Product categories</p>
        <h2 className="section-heading mt-3 max-w-3xl">Built for manufacturers, not dental clinic marketing</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-clinical-muted">
          Dental Market is for suppliers, factories, and export teams seeking a U.S. commercial path. The work focuses
          on product qualification, buying review, supplier readiness, and separate B2B marketing preparation.
        </p>
      </div>
    </div>
  );
}
