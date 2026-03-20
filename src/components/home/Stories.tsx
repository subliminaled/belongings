import { getPublishedStories } from '@/lib/stories';

export default function Stories() {
  const stories = getPublishedStories();

  return (
    <section id="stories" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 tracking-tight mb-3">
            Featured Stories
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-700 to-amber-600" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story) => (
            <article key={story.slug} className="group">
              <div className="aspect-[4/3] bg-stone-100 rounded-sm overflow-hidden mb-5 border border-stone-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-xs text-amber-700 font-medium uppercase tracking-widest mb-2">
                {story.name}
              </p>
              <h3 className="text-lg font-light text-stone-900 group-hover:text-amber-700 transition-colors duration-300 mb-2">
                {story.title}
              </h3>
              <p className="text-sm text-stone-500 font-light italic mb-2">
                {story.object}
              </p>
              <p className="text-sm text-stone-600 font-light leading-relaxed mb-4">
                {story.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-2.5 border border-stone-400 text-stone-900 hover:bg-stone-50 transition-colors duration-300 font-light tracking-wide text-sm">
            View All Stories
          </button>
        </div>
      </div>
    </section>
  );
}