import Image from "next/image";

type ImageCardProps = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

export function ImageCard({ title, body, imageSrc, imageAlt }: ImageCardProps) {
  return (
    <article className="surface-card group h-full overflow-hidden transition hover:bg-surface-soft">
      <div className="relative aspect-[16/10] bg-clinical-calm">
        <Image src={imageSrc} alt={imageAlt} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#050505]/28 transition group-hover:bg-[#050505]/18" aria-hidden="true" />
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
