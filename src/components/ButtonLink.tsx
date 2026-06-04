import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  size?: "sm" | "md" | "lg";
};

export function ButtonLink({ href, children, variant = "primary", size = "md" }: ButtonLinkProps) {
  const classes = {
    primary: "bg-dental-blue text-white hover:bg-dental-cyan hover:text-[#050505] focus-visible:outline-dental-blue",
    secondary: "border border-[#050505] bg-transparent text-[#050505] hover:bg-[#050505] hover:text-white focus-visible:outline-dental-blue",
    light: "bg-white text-[#050505] hover:bg-dental-cyan focus-visible:outline-white"
  };
  const sizes = {
    sm: "min-h-10 px-4 py-2 text-sm",
    md: "min-h-11 px-5 py-3 text-sm",
    lg: "min-h-12 px-6 py-3.5 text-base"
  };

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${sizes[size]} ${classes[variant]}`}
    >
      <span>{children}</span>
      <span className="template-arrow" aria-hidden="true">
        <svg viewBox="0 0 10 10" fill="currentColor">
          <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
        </svg>
      </span>
    </Link>
  );
}
