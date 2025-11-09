import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 ring-1 ring-inset ring-neutral-200">Featured • New</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              The sleek way to checkout
            </h1>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              A minimalist card designed for modern payments. Glass-morphic, secure, and delightful to use. Pair it with our accessories for a complete fintech aesthetic.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-neutral-800">
                Shop now
              </a>
              <a href="#reviews" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm ring-1 ring-neutral-200 hover:bg-neutral-50">
                See reviews
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 h-[380px] sm:h-[460px] md:h-[520px] rounded-2xl bg-white shadow-xl shadow-neutral-200/70 ring-1 ring-neutral-100">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
