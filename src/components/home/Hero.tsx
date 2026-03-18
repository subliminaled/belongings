export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-stone-950">

      {/* Background image — full bleed */}
      <img
        src="/images/hero/background.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient — keeps left column legible on bright backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/75 via-stone-950/45 to-transparent" />

      {/* Two-column grid: content left, strip right */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 min-h-screen">

        {/* Content column — never overlaps strip */}
        <div className="flex flex-col justify-start pt-12 sm:pt-14 lg:pt-16 px-6 sm:px-10 lg:px-16 sm:col-span-8 lg:col-span-9 xl:col-span-10">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-amber-600" />
            <span className="text-xs text-amber-500 tracking-widest uppercase font-medium">
              A Documentary Film
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light leading-none tracking-tight text-white mb-6">
            Belongings
          </h1>

          {/* Rule — bounded to content column */}
          <div className="w-16 h-px bg-stone-500 mb-6" />

          {/* Subhead */}
          <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed max-w-xl xl:max-w-2xl mb-10">
            An intimate portrait of the objects we carry, and everything they say about who we are.
          </p>

          {/* CTA */}
          <a
            href="#stories"
            className="self-start px-8 py-3 border border-amber-700 text-white text-xs tracking-widest uppercase font-light hover:bg-amber-700/20 hover:border-amber-500 transition-colors duration-300"
          >
            Explore Stories
          </a>
        </div>

        {/* Strip column */}
        <div className="relative hidden sm:block sm:col-span-4 lg:col-span-3 xl:col-span-2">
          <img
            src="/images/hero/strip.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}