import { useState } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'New Arrivals', href: '#' },
    { name: 'Cards', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Sale', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-neutral-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-semibold shadow-sm">F</div>
            <span className="font-semibold tracking-tight text-neutral-900">FlamePay</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                {l.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="relative inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300">
              <ShoppingCart size={18} />
              <span>Cart</span>
            </button>
            <button className="md:hidden p-2 rounded-lg border border-neutral-200" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              <Menu />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map((l) => (
                <a key={l.name} href={l.href} className="rounded-lg px-3 py-2 text-neutral-700 hover:bg-neutral-50">
                  {l.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
