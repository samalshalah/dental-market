import Image from "next/image";

type StripItem = {
  category: string;
  number: string;
  title: string;
  body: string;
  image: string;
};

const stripItems: StripItem[] = [
  {
    category: "Sourcing",
    number: "01",
    title: "Supply Sourcing Review",
    body: "Qualification review for selected dental supplies before sample requests, purchase discussion, or cooperation expectations.",
    image: "/images/dental-products/dental-accessories-assortment-1200.webp"
  },
  {
    category: "Buying Review",
    number: "02",
    title: "Sample and Supply Review",
    body: "Supply fit, sample availability, packaging direction, pricing logic, and U.S. buyer presentation are reviewed first.",
    image: "/images/dental-products/restorative-dental-supplies-1200.webp"
  },
  {
    category: "B2B Marketing",
    number: "03",
    title: "B2B Marketing Systems",
    body: "English websites, multilingual-ready structure, SEO, distributor pages, and trade-show follow-up systems.",
    image: "/images/dental-products/orthodontic-bands-instruments-1200.webp"
  },
  {
    category: "Channels",
    number: "04",
    title: "Distributor / Dealer Materials",
    body: "Clearer supply story, trust signals, buyer questions, and sales materials for channel conversations.",
    image: "/images/dental-products/sterile-metal-instruments-1200.webp"
  },
  {
    category: "Follow-Up",
    number: "05",
    title: "Trade-Show Follow-Up",
    body: "Landing pages, email and WeChat templates, lead tracking, and sales material organization after exhibitions.",
    image: "/images/dental-products/dental-polishing-burs-1200.webp"
  }
];

export function HomeServiceStrip() {
  return (
    <section className="relative mb-20 overflow-hidden bg-[#050505] text-white">
      <div className="relative grid lg:grid-cols-5">
        {stripItems.map((item, index) => (
          <article
            key={item.title}
            className="group relative min-h-[24rem] overflow-hidden border-b border-white/10 lg:min-h-[35rem] lg:border-b-0 lg:border-r"
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 20vw, 100vw"
              className="object-cover opacity-[0.72] scale-105 grayscale transition duration-700 group-hover:scale-100 group-hover:opacity-[0.82]"
            />
            <div className="absolute inset-0 bg-[#050505]/30 transition duration-500 group-hover:bg-[#050505]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-[#050505]/18 to-[#050505]/5" />
            <div className="relative h-full p-6 sm:p-8 lg:p-10">
              <span
                className={`absolute top-7 z-10 inline-block bg-white/10 px-3 py-2 text-sm font-bold uppercase tracking-wide text-white backdrop-blur ${
                  index === 0 ? "left-7" : "right-[-1.6rem]"
                }`}
              >
                {item.category}
              </span>

              <p className="absolute left-8 top-24 text-[8rem] font-bold leading-none text-transparent opacity-0 transition duration-500 [-webkit-text-stroke:1px_rgba(255,255,255,0.18)] group-hover:translate-y-0 group-hover:opacity-100 lg:text-[9.5rem]">
                {item.number}
              </p>

              <div className="absolute inset-x-0 bottom-0 translate-y-0 p-6 transition duration-500 lg:translate-y-24 lg:group-hover:translate-y-0 sm:p-8 lg:p-10">
                <h2 className="max-w-[16rem] text-3xl font-medium leading-tight text-white lg:text-[2rem]">{item.title}</h2>
                <div className="mt-6 opacity-100 transition duration-500 lg:opacity-0 lg:group-hover:opacity-100">
                  <p className="text-base leading-7 text-white/75">{item.body}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
