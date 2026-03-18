'use client';

import { FormEvent, useState } from 'react';

export default function SubmitStory() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    story: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder submission
    setSubmitted(true);
    setFormData({ name: '', email: '', story: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-stone-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 tracking-tight mb-3">
            Share Your Story
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-700 to-amber-600 mb-6" />
          <p className="text-base text-stone-700 font-light">
            Do you have an object that defines you? We'd love to hear its story.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white p-8 text-center border border-stone-200">
            <h3 className="text-lg font-light text-stone-900 mb-2">Thank you for sharing</h3>
            <p className="text-sm text-stone-600 font-light">
              We've received your story and will review it shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 space-y-5 border border-stone-200">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-stone-700 uppercase tracking-widest mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2.5 border border-stone-300 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-light text-sm"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-stone-700 uppercase tracking-widest mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2.5 border border-stone-300 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-light text-sm"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="story" className="block text-xs font-medium text-stone-700 uppercase tracking-widest mb-2">
                Your Story (500 words max)
              </label>
              <textarea
                id="story"
                value={formData.story}
                onChange={(e) => setFormData({...formData, story: e.target.value})}
                maxLength={500}
                rows={6}
                className="w-full px-4 py-2.5 border border-stone-300 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-light text-sm resize-none"
                placeholder="Tell us about an object that means something to you..."
                required
              />
              <p className="text-xs text-stone-500 font-light mt-2">
                {formData.story.length} / 500
              </p>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-2.5 bg-stone-900 text-stone-50 hover:bg-stone-800 transition-colors duration-300 font-light tracking-wide text-sm"
            >
              Submit Your Story
            </button>
          </form>
        )}
      </div>
    </section>
  );
};