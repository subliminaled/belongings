import { teaserStory } from '@/data/stories';

export default function Hero() {
  const teaser = teaserStory;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-stone-950">

      {/* Background image — full bleed */}
      <img
        src="/images/stories/ren/ren-stone.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient — keeps left column legible on bright backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/75 via-stone-950/45 to-transparent" />

      {/* Two-column grid: content left, strip right */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 min-h-screen">

        {/* Content column — never overlaps strip */}
        <div className="flex flex-col justify-between px-6 sm:px-10 lg:px-16 sm:col-span-8 lg:col-span-9 xl:col-span-10 min-h-screen">

          {/* Top: eyebrow / title / subhead */}
          <div className="pt-6 sm:pt-8 lg:pt-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-amber-600" />
              <span className="text-xs text-amber-500 tracking-widest uppercase font-medium">
                 A short web docuseries
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-none tracking-tight text-white mb-4">
              Belongings
            </h1>

            <div className="w-16 h-px bg-stone-500 mb-4" />

            <p className="text-sm sm:text-base text-stone-200 font-light leading-relaxed max-w-xl xl:max-w-3xl">
              Exploring real human connections to the material world
            </p>
          </div>

          {/* Middle: teaser */}
          <div className="flex items-center justify-center py-6">
            {teaser?.youtubeId ? (
              <div className="w-full max-w-3xl">
                <div className="aspect-video rounded-sm overflow-hidden border border-stone-800">
                  <iframe
                    src={`https://www.youtube.com/embed/${teaser.youtubeId}`}
                    title={teaser.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : (
              <div className="w-full max-w-3xl">
                <img src="/images/thumb/teaser.png" alt="Teaser" className="w-full rounded-sm object-cover" />
              </div>
            )}
          </div>

          {/* Bottom: CTA */}
          <div className="flex items-center justify-center pb-16 md:pb-20 lg:pb-24">
            <a
              href="#submit-story"
              className="px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 border border-amber-700 text-white text-xs md:text-sm lg:text-base tracking-widest uppercase md:font-medium font-light hover:bg-amber-700/20 hover:border-amber-500 transition-colors duration-300 rounded"
            >
              Tell Your Story
            </a>
          </div>
        </div>

        {/* Strip column */}
        <div className="relative hidden sm:block sm:col-span-4 lg:col-span-3 xl:col-span-2">
          <img
            src="/images/hero/still-strip.png"
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