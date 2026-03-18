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
    <section className="bg-stone-900 text-stone-50 py-20 px-4 sm:px-6 lg:px-8">
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

          {/* Contact & Social Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-amber-500 mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-amber-500 uppercase tracking-widest font-medium mb-1">Email</p>
                  <a href="mailto:hello@belongings.film" className="text-stone-100 font-light text-base hover:text-amber-400 transition-colors">
                    hello@belongings.film
                  </a>
                </div>
                <div>
                  <p className="text-xs text-amber-500 uppercase tracking-widest font-medium mb-1">Press</p>
                  <a href="mailto:press@belongings.film" className="text-stone-100 font-light text-base hover:text-amber-400 transition-colors">
                    press@belongings.film
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-amber-500 mb-4">
                Follow Along
              </h3>
              <div className="flex space-x-4">
                {['Instagram', 'Twitter', 'Vimeo', 'YouTube'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-xs text-stone-300 hover:text-amber-400 transition-colors font-light uppercase tracking-widest border-b border-transparent hover:border-amber-400"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center text-stone-400 font-light text-xs">
          <p>© 2026 Belongings. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-stone-100 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-100 transition-colors">Terms</a>
            <a href="#" className="hover:text-stone-100 transition-colors">Credits</a>
          </div>
        </div>
      </div>
    </section>
  );
};