import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  darkBackground?: boolean;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = "Subscribe to Movement Metrics",
  description = "Get monthly insights on breaking drift patterns and building unstoppable momentum.",
  darkBackground = false
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'GPI Studio' }),
      });

      if (!res.ok) throw new Error('Failed');

      setSubmitted(true);
      setEmail('');
      setError('');
    } catch {
      setError('Something went wrong. Try again.');
    }
  };

  const bgClass = darkBackground
    ? 'bg-stone-100'
    : 'bg-gradient-to-r from-stone-50 to-stone-100';

  return (
    <div className={`${bgClass} p-8 rounded-lg`}>
      {!submitted ? (
        <>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-6">{description}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded focus:outline-none focus:border-red-600 placeholder-stone-400"
              />
              {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 font-medium rounded hover:bg-red-700 transition-all inline-flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-500">
            Join 5,000+ readers getting actionable insights. One email per month, unsubscribe anytime.
          </p>
        </>
      ) : (
        <div className="text-center py-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-900 rounded-full mb-4">
            <Check size={24} className="text-green-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Thanks for subscribing!</h3>
          <p className="text-gray-400">
            Check your inbox for a confirmation email and special welcome resources.
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsletterSignup;
