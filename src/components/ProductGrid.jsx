import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Glass Card – Frosted White',
    price: 129,
    image:
      'https://images.unsplash.com/photo-1592492152545-31f5d0f4f3b9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Titanium Card – Obsidian',
    price: 179,
    image:
      'https://images.unsplash.com/photo-1520975922323-7da7458b3e39?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Slim Wallet – Graphite',
    price: 89,
    image:
      'https://images.unsplash.com/photo-1600573472591-ee6c8e6955a0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Card Sleeve – Clear',
    price: 39,
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProductGrid() {
  const [cart, setCart] = useState([]);

  const addToCart = (p) => {
    setCart((prev) => [...prev, p.id]);
  };

  return (
    <section id="products" className="py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Featured products</h2>
            <p className="mt-2 text-neutral-600">Minimal, premium materials. Built for everyday carry.</p>
          </div>
          <div className="text-sm text-neutral-500">Cart: {cart.length}</div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl bg-white ring-1 ring-neutral-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-neutral-900 line-clamp-1">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-neutral-900 font-semibold">${p.price}</span>
                  <button onClick={() => addToCart(p)} className="rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-neutral-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
