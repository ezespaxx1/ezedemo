import { LinkItem } from '@/content/wedding-content';

export function NavBar({ links }: { links: LinkItem[] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-cream/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary">
        <a href="#top" className="font-serif text-xl text-charcoal">
          Two Paths, One Promise
        </a>
        <ul className="hidden gap-5 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a className="text-sm text-cocoa transition hover:text-sage" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
