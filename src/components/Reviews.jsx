import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Ava M.',
    text: 'Beautiful design and super lightweight. The glass finish looks incredible in person.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Noah K.',
    text: 'Premium feel and the tap-to-pay works flawlessly. Love the minimalist aesthetic.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Liam S.',
    text: 'Exactly what I was looking for — sleek, modern, and surprisingly durable.',
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">What customers say</h2>
          <p className="mt-2 text-neutral-600">Real feedback from people who switched to a cleaner carry.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.id} className="rounded-2xl bg-white ring-1 ring-neutral-100 shadow-sm p-6">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < r.rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'} />
                ))}
              </div>
              <blockquote className="mt-3 text-neutral-700">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-neutral-900">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
