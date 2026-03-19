export default function About() {
  return (
    <section id="about" className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto min-h-screen p-10">
        <div className="mb-10">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 tracking-tight mb-3">
            About This Project
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-700 to-amber-600" />
        </div>

        <div className="space-y-6 text-lg text-stone-700 font-light leading-relaxed mb-12">
          <p>
            Belongings is a feature-length documentary that examines the profound relationship between humans and objects. Through intimate interviews and visual storytelling, we explore why we hold certain possessions so dear, and what these attachments reveal about our identities, memories, and values.
          </p>
          <p>
            From inherited jewelry to handmade gifts, from childhood toys to weathered tools, each object tells a story. This project celebrates the poetry found in everyday items and the extraordinary meanings we assign to them.
          </p>
          <p>
            Directed by acclaimed filmmaker Sarah Chen, Belongings features contributions from psychologists, anthropologists, and everyday people whose lives have been shaped by the things they treasure.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {[
            { label: 'Stories', value: '47' },
            { label: 'Filmmakers', value: '8' },
            { label: 'Countries', value: '12' }
          ].map((stat) => (
            <div key={stat.label} className="text-center py-4">
              <div className="text-4xl font-light text-amber-700 mb-2">{stat.value}</div>
              <div className="text-xs text-stone-600 uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};