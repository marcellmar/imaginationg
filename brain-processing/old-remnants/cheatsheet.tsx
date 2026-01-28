import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Check, Download, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';
import DriftCheatSheet from '../components/DriftCheatSheet';
import NewsletterSignup from '../components/NewsletterSignup';

// Dynamically import the PDF component to avoid SSR issues
const CheatsheetDownloadButton = dynamic(
  () => import('../components/CheatsheetPDF').then(mod => mod.CheatsheetDownloadButton),
  { ssr: false }
);

const CheatSheetPage: NextPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/send-cheatsheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      if (!response.ok) {
        throw new Error('Failed to send cheatsheet');
      }

      setSubmitSuccess(true);
      setEmail('');
      setName('');
    } catch (error) {
      console.error('Error sending cheatsheet:', error);
      setSubmitError('There was an error sending the cheatsheet. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>5 Signals You're Drifting Instead of Moving | IMAGINATION G</title>
        <meta name="description" content="A quick diagnostic to spot momentum killers in your project, business, or team." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <Link href="/" className="inline-block text-xl font-bold">IMAGINATION G</Link>
            <div className="flex items-center gap-6">
              <Link href="/weapons" className="text-gray-400 hover:text-white transition-colors">
                Interventions
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <span>←</span> Back to Home
              </Link>
            </div>
          </div>
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Drift → Movement Playbook</h1>
            <p className="text-xl text-gray-300">Your 24-Hour Momentum Shift Plan</p>
          </div>

          <div className="mb-12 text-center">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <CheatsheetDownloadButton />

              <button
                onClick={() => setShowEmailForm(!showEmailForm)}
                className="border border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-black transition-all rounded inline-flex items-center gap-2"
              >
                <Mail size={18} />
                Email Me a Copy
              </button>
            </div>

            {showEmailForm && (
              <div className="mt-6 max-w-md mx-auto">
                {submitSuccess ? (
                  <div className="bg-green-900 text-white p-4 rounded mb-4">
                    <Check size={20} className="inline-block mr-2" />
                    <span>Cheatsheet has been emailed to you!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-zinc-900 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Email me the cheatsheet</h3>

                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Your Name (optional)</label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 bg-black border border-zinc-700 rounded focus:border-white focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 bg-black border border-zinc-700 rounded focus:border-white focus:outline-none"
                        placeholder="email@example.com"
                        required
                      />
                    </div>

                    {submitError && (
                      <div className="text-red-500 mb-4 text-sm">
                        {submitError}
                        <p className="mt-2">
                          If email delivery fails, you can still download the PDF directly from this page.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black px-4 py-2 font-medium hover:bg-gray-200 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send to My Email'}
                    </button>

                    <p className="text-xs text-gray-500 mt-2">
                      We respect your privacy and will never share your email.
                    </p>
                  </form>
                )}
              </div>
            )}
          </div>

          <DriftCheatSheet />

          <div className="mt-16 text-center">
            <p className="text-xl mb-6">Ready to move beyond just diagnosing the problem?</p>
            <a
              href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 font-medium text-lg inline-block rounded hover:bg-opacity-90 transition-all">
              Book Your Clarity Call
            </a>
          </div>

          <div className="mt-16">
            <NewsletterSignup
              title="Get Movement Strategies Every Month"
              description="Subscribe to our Movement Metrics newsletter for monthly drift-breaking strategies, case studies, and tools."
            />
          </div>
        </div>
      </main>

      <footer className="bg-zinc-900 py-8 px-4 text-center text-gray-400">
        <div className="max-w-4xl mx-auto">
          <p>© {new Date().getFullYear()} IMAGINATION G. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/" className="hover:text-white transition-colors">Back to Home</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default CheatSheetPage;