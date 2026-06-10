import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { deepReads, growingPainReadOrder } from '../../lib/deep-reads';

const GrowingPainsPage: NextPage = () => {
  const reads = growingPainReadOrder.map((slug) => deepReads[slug]);

  return (
    <>
      <SEOHead
        title="Growing Pains | GPI Studio"
        description="Eight deeper GPI Studio reads on growing pains: old wins, protected waste, slow handoffs, and capability with no path to the work."
        ogImage="/images/og/insights.png"
      />

      <div className="gpi-page">
        <Navigation currentPage="reads" />

        <main className="gpi-shell py-14 md:py-20">
          <section className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <div>
              <Link className="gpi-link font-mono text-sm" href="/insights">
                Back to reads
              </Link>
              <p className="gpi-kicker mt-8">Growing Pains</p>
              <h1 className="mt-4 text-5xl leading-none md:text-7xl">
                The deep reps live here.
              </h1>
            </div>

            <div className="gpi-prose max-w-3xl">
              <p>
                Some pressure needs more than a snapshot. The company looks fine from a distance, but the same delay keeps returning, the old win keeps getting a vote, or the useful capability sits nearby with no path into the decision.
              </p>
              <p className="mt-5">
                These reads are the longer film sessions. They slow the tape down enough to see how good systems get heavy, how waste grows protectors, how speed hits old plumbing, and how a company can step over the capacity it already has.
              </p>
              <p className="mt-5">
                Use this shelf when the quick read names the pain but the operating pattern needs another layer underneath it.
              </p>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="mb-6 grid gap-4 md:grid-cols-[0.75fr_1.25fr]">
              <p className="gpi-kicker">Deep Reps</p>
              <p className="max-w-3xl text-xl leading-snug text-stone-950 md:text-2xl">
                Start with the pressure you have already felt at work.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {reads.map((read) => (
                <Link
                  className="block min-h-[260px] border border-stone-300 bg-[#f7f2e8] p-6 transition-colors hover:border-stone-950"
                  href={`/insights/${read.slug}`}
                  key={read.slug}
                >
                  <p className="font-mono text-xs font-bold uppercase text-stone-600">{read.kicker}</p>
                  <h2 className="mt-7 text-2xl font-bold leading-tight text-stone-950">{read.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-stone-700">{read.subtitle}</p>
                  <p className="mt-5 text-sm leading-6 text-stone-700">{read.description}</p>
                  <p className="mt-6 font-mono text-xs font-bold uppercase text-red-800">Open the tape</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="flex flex-col gap-4 font-mono text-sm md:flex-row md:items-center">
              <Link className="gpi-link" href="/insights/snapshots">Company tape</Link>
              <Link className="gpi-link" href="/gpi-framework">Read the lens</Link>
              <Link className="gpi-link" href="/intake">Bring a growing pain</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default GrowingPainsPage;
