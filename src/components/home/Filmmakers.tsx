export default function Filmmakers() {
  const filmmakers = [
    {
      name: 'Sarah Chen',
      role: 'Director',
      bio: 'Award-winning documentary filmmaker specializing in intimate character studies.'
    },
    {
      name: 'Marcus Webb',
      role: 'Cinematographer',
      bio: 'Visual storyteller with a passion for capturing authentic human moments.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Producer',
      bio: 'Experienced producer who brings compelling narratives to life.'
    },
    {
      name: 'James Liu',
      role: 'Editor',
      bio: 'Master editor who shapes raw footage into emotional narratives.'
    },
    {
      name: 'Amara Okafor',
      role: 'Sound Designer',
      bio: 'Creates immersive audio landscapes that enhance the visual experience.'
    },
    {
      name: 'David Ström',
      role: 'Composer',
      bio: 'Original score composer creating the emotional backbone of the film.'
    }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 tracking-tight mb-3">
            The Team
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-700 to-amber-600" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filmmakers.map((filmmaker) => (
            <div key={filmmaker.name}>
              <div className="aspect-square bg-stone-100 rounded-sm flex items-center justify-center overflow-hidden mb-5">
                <span className="text-6xl text-stone-300 font-light">{filmmaker.name.charAt(0)}</span>
              </div>
              <h3 className="text-base font-light text-stone-900 mb-2">{filmmaker.name}</h3>
              <p className="text-xs text-amber-700 font-medium uppercase tracking-widest mb-3">{filmmaker.role}</p>
              <p className="text-sm text-stone-600 font-light leading-relaxed">{filmmaker.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};