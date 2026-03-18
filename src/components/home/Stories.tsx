export default function Stories() {
  const stories = [
    {
      title: 'The Gold Ring',
      objectName: 'Gold Wedding Band, c. 1942',
      excerpt: 'A wedding ring passed down through four generations of women, each adding their own story.',
    },
    {
      title: "Grandfather's Watch",
      objectName: 'Seiko 5 Automatic, 1982',
      excerpt: 'A Seiko watch from 1982 that stopped working the day he passed, and then started again.',
    },
    {
      title: 'Letters from Home',
      objectName: 'Handwritten Letters, 1970s–1990s',
      excerpt: 'Handwritten letters from her mother, kept in a shoebox for 30 years, discovered after her death.',
    },
  ];

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
            <article key={story.title} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-stone-100 rounded-sm overflow-hidden flex items-center justify-center mb-5">
                <svg className="w-10 h-10 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-amber-700 font-medium uppercase tracking-widest mb-2">
                {story.objectName}
              </p>
              <h3 className="text-lg font-light text-stone-900 group-hover:text-amber-700 transition-colors duration-300 mb-2">
                {story.title}
              </h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed mb-4">
                {story.excerpt}
              </p>
              <a
                href="#"
                className="text-xs text-stone-900 font-medium uppercase tracking-widest border-b border-stone-400 hover:border-amber-700 hover:text-amber-700 transition-colors duration-300 pb-0.5"
              >
                Read Story
              </a>
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
};