export default function Stories() {
  const stories = [
    {
      title: 'The Gold Ring',
      excerpt: 'A wedding ring passed down through four generations of women, each adding their own story.',
      author: 'Maria Santos'
    },
    {
      title: 'Grandfather\'s Watch',
      excerpt: 'A Seiko watch from 1982 that stopped working the day he passed, and then started again.',
      author: 'James Park'
    },
    {
      title: 'Letters from Home',
      excerpt: 'Handwritten letters from her mother, kept in a shoebox for 30 years, discovered after her death.',
      author: 'Emma Johnson'
    },
    {
      title: 'The Wooden Spoon',
      excerpt: 'A carved wooden cooking spoon that brought a refugee family back to their ancestry and roots.',
      author: 'Hassan Al-Rashid'
    },
    {
      title: 'A Jacket of Memories',
      excerpt: 'His father\'s military jacket, unworn for decades, finally tried on at age 40.',
      author: 'Alexander Volkov'
    },
    {
      title: 'The Blue Blanket',
      excerpt: 'A tattered blanket from childhood that healed the relationship between a mother and daughter.',
      author: 'Sophie Benoit'
    }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
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
              <h3 className="text-lg font-light text-stone-900 group-hover:text-amber-700 transition-colors duration-300 mb-2">
                {story.title}
              </h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed mb-3">
                {story.excerpt}
              </p>
              <p className="text-xs text-amber-700 font-medium uppercase tracking-widest">
                by {story.author}
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
};