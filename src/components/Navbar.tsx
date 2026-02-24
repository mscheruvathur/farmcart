import { useState } from 'react';
import farmcartLogo from '../assets/FARMCART-LOGO.png';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Products', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-4 border-[#039448] bg-white shadow-sm">
      <nav className="mx-auto flex h-[70px] w-full max-w-[1440px] items-center justify-between px-6 sm:px-8 md:h-[80px] md:px-12 lg:px-16" aria-label="Main navigation">
        <a href="#hero" className="inline-flex items-center" aria-label="Farmcart home">
          <img src={farmcartLogo} alt="Farmcart" className="h-10 w-auto object-contain sm:h-11 md:h-12" />
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-text transition hover:bg-slate-100 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="text-lg">☰</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[15px] font-semibold text-[#1a1a1a] transition hover:text-[#039448] lg:text-[16px]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <ul className="mx-auto flex w-full max-w-[1440px] flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-text transition hover:bg-slate-100 hover:text-[#039448]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
