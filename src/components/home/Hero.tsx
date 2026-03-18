export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,80,50,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(140,90,40,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tight text-stone-100 mb-6">
          Belongings
        </h1>
        <p className="text-lg sm:text-xl text-stone-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
          Stories of objects that define us. A documentary exploring the intimate connections between people and the things they hold dear.
        </p>
        <button className="px-8 py-3 border border-stone-400 text-stone-100 hover:bg-stone-800 transition-colors duration-300 font-light tracking-wide">
          Explore Stories
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 z-10 flex justify-center w-full">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};