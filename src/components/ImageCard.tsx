import Image from "next/image";

type ImageCardProps = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

export function ImageCard({ title, body, imageSrc, imageAlt }: ImageCardProps) {
  return (
    <article className="group h-full overflow-hidden border border-clinical-line bg-white transition hover:border-[#050505] hover:bg-surface-soft">
      <div className="relative aspect-[16/10] bg-clinical-calm">
        <Image src={imageSrc} alt={imageAlt} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover grayscale transition duration-500 group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-[#050505]/24 transition group-hover:bg-[#050505]/12" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <span className="text-xs font-bold uppercase tracking-wide text-blue-100">Dental Market</span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-medium leading-tight text-[#050505]">{title}</h3>
        <p className="mt-5 body-copy">{body}</p>
      </div>
    </article>
  );
}
