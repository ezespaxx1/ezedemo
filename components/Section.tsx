import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-28 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow ? <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">{eyebrow}</p> : null}
        <h2 className="max-w-3xl font-serif text-4xl leading-tight text-charcoal md:text-5xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
