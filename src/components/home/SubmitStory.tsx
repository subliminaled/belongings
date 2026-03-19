'use client';

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

interface FormFields {
  fullName: string;
  email: string;
  phone: string;
  objectName: string;
  description: string;
}

interface ImageEntry {
  file: File;
  url: string;
}

const DESCRIPTION_MAX = 500;
const IMAGE_MAX = 2;

export default function SubmitStory() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormFields>({
    fullName: '',
    email: '',
    phone: '',
    objectName: '',
    description: '',
  });
  const [images, setImages] = useState<ImageEntry[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Tracks all created URLs so we can revoke them on unmount.
  const createdUrlsRef = useRef<Set<string>>(new Set());

  // Revoke any un-revoked URLs when the component unmounts.
  useEffect(() => {
    const urls = createdUrlsRef.current;
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, []);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const incoming = Array.from(e.target.files ?? []).map((file) => {
      const url = URL.createObjectURL(file);
      createdUrlsRef.current.add(url);
      return { file, url };
    });

    setImages((prev) => {
      const combined = [...prev, ...incoming];
      if (combined.length > IMAGE_MAX) {
        // Revoke the URLs that won't fit.
        combined.slice(IMAGE_MAX).forEach((e) => {
          URL.revokeObjectURL(e.url);
          createdUrlsRef.current.delete(e.url);
        });
        return combined.slice(0, IMAGE_MAX);
      }
      return combined;
    });

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (index: number) => {
    setImages((prev) => {
      const entry = prev[index];
      if (entry) {
        URL.revokeObjectURL(entry.url);
        createdUrlsRef.current.delete(entry.url);
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    images.forEach((entry) => {
      URL.revokeObjectURL(entry.url);
      createdUrlsRef.current.delete(entry.url);
    });
    setImages([]);
    setFormData({ fullName: '', email: '', phone: '', objectName: '', description: '' });
    if (fileInputRef.current) fileInputRef.current.value = '';
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    'w-full px-4 py-2.5 border border-stone-300 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-light text-sm';

  const labelClass =
    'block text-xs font-medium text-stone-700 uppercase tracking-widest mb-2';

  return (
    <section className="bg-stone-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 tracking-tight mb-3">
            Submit Your Story
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-700 to-amber-600 mb-6" />
          <p className="text-base text-stone-700 font-light">
            Every object carries a life. If you have something that holds meaning — a gift, an
            heirloom, a relic — we&apos;d love to hear its story and consider it for the film.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white p-8 text-center border border-stone-200">
            <h3 className="text-lg font-light text-stone-900 mb-2">Thank you for sharing</h3>
            <p className="text-sm text-stone-600 font-light">
              We&apos;ve received your submission and will be in touch soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white p-8 sm:p-10 space-y-6 border border-stone-200"
          >
            <p className="text-xs text-stone-500 font-light">
              Fields marked <span className="text-amber-700">*</span> are required.
            </p>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name <span className="text-amber-700">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                autoComplete="name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={inputClass}
                placeholder="Jane Smith"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address <span className="text-amber-700">*</span>
              </label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
                placeholder="jane@example.com"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone{' '}
                <span className="text-stone-400 normal-case tracking-normal font-light">
                  (optional)
                </span>
              </label>
              <input
                type="tel"
                id="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={inputClass}
                placeholder="+1 555 000 0000"
              />
            </div>

            {/* Object Name */}
            <div>
              <label htmlFor="objectName" className={labelClass}>
                Object Name <span className="text-amber-700">*</span>
              </label>
              <input
                type="text"
                id="objectName"
                value={formData.objectName}
                onChange={(e) => setFormData({ ...formData, objectName: e.target.value })}
                className={inputClass}
                placeholder="e.g. My grandfather's pocket watch"
                required
              />
            </div>

            {/* Short Story Description */}
            <div>
              <label htmlFor="description" className={labelClass}>
                Short Story Description <span className="text-amber-700">*</span>
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                maxLength={DESCRIPTION_MAX}
                rows={6}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about this object and what it means to you…"
                required
              />
              <p className="text-xs text-stone-500 font-light mt-1 text-right">
                {formData.description.length} / {DESCRIPTION_MAX}
              </p>
            </div>

            {/* Image Upload */}
            <div>
              <span className={labelClass}>
                Upload Images{' '}
                <span className="text-stone-400 normal-case tracking-normal font-light">
                  (up to {IMAGE_MAX}, optional)
                </span>
              </span>

              {images.length < IMAGE_MAX && (
                <label
                  htmlFor="images"
                  className="flex flex-col items-center justify-center gap-2 w-full py-8 border border-dashed border-stone-300 bg-stone-50 cursor-pointer hover:border-amber-600 hover:bg-amber-50/30 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6 text-stone-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 16v-8m0 0-3 3m3-3 3 3M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1"
                    />
                  </svg>
                  <span className="text-xs text-stone-500 font-light">
                    Click to choose up to {IMAGE_MAX} images
                  </span>
                  <span className="text-xs text-stone-400 font-light">JPG, PNG, WEBP</span>
                </label>
              )}

              <input
                ref={fileInputRef}
                type="file"
                id="images"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="sr-only"
                aria-label="Upload up to 2 images"
              />

              {/* Image preview thumbnails */}
              {images.length > 0 && (
                <ul className="flex gap-4 mt-4" aria-label="Selected images">
                  {images.map((entry, i) => (
                    <li key={`${entry.file.name}-${entry.file.size}-${i}`} className="relative">
                      <img
                        src={entry.url}
                        alt={entry.file.name}
                        className="w-20 h-20 object-cover border border-stone-200"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        aria-label={`Remove ${entry.file.name}`}
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-stone-800 text-white text-xs flex items-center justify-center hover:bg-amber-700 transition-colors duration-200"
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-stone-900 text-stone-50 hover:bg-stone-800 transition-colors duration-300 font-light tracking-wide text-sm"
            >
              Submit Your Story
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
