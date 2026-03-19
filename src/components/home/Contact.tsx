'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder subscription
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section id="contact" className="bg-stone-900 text-stone-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Newsletter Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-3">
              Stay Connected
            </h2>
            <p className="text-stone-300 font-light leading-relaxed text-base mb-6">
              Get updates about new stories, screenings, and behind-the-scenes content from the Belongings documentary.
            </p>

            {subscribed ? (
              <p className="text-stone-100 font-light text-sm">
                ✓ Check your email to confirm
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 bg-stone-800 border border-stone-700 text-stone-50 placeholder-stone-500 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-light text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 bg-amber-700 hover:bg-amber-600 transition-colors duration-300 font-light tracking-wide text-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Contact Section */}
          <div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-amber-500 mb-4">
                Get in Touch
              </h3>                
                <p className="text-sm text-stone-300 font-light leading-relaxed max-w-sm">
                  Questions, collaboration inquiries, or story leads are always welcome.
                </p><br/>                
              <div className="space-y-4 border-t border-stone-800 pt-4 md:border-t-0 md:pt-0">
                <div>
                  <p className="text-xs text-amber-500 uppercase tracking-widest font-medium mb-1">Email</p>
                  <a href="mailto:hello@belongings.film" className="text-stone-100 font-light text-base hover:text-amber-400 transition-colors">
                    belong@subliminaledfilms.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};