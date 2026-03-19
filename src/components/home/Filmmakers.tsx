import Image from 'next/image';
import filmmakers from '@/data/filmmakers';

export default function Filmmakers() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 tracking-tight mb-3">
            The Team
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-700 to-amber-600" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filmmakers.map((filmmaker) => (
            <div key={filmmaker.name}>
              <div className="aspect-square bg-stone-100 rounded-sm overflow-hidden mb-5 relative">
                <Image
                  src={filmmaker.image}
                  alt={`${filmmaker.name}, ${filmmaker.role}`}
                  fill
                  className="object-cover"
                />
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
}