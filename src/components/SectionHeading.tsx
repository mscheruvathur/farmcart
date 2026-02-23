type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight text-text md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p>
    </header>
  );
}
