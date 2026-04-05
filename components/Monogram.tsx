export function Monogram({ initials }: { initials: string }) {
  return (
    <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-full border border-gold/60 bg-cream/80">
      <span className="font-serif text-3xl tracking-wide text-cocoa">{initials}</span>
      <span className="absolute -inset-2 rounded-full border border-gold/30" aria-hidden />
    </div>
  );
}
