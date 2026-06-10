import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { getSnapshotBySlug, CompanySnapshot } from '../../lib/snapshots-content';

interface CompanyPageProps {
  snapshot: CompanySnapshot | null;
}

const getScoreColor = (score: number) => {
  if (score <= 3.5) return 'text-stone-950';
  if (score <= 6.9) return 'text-stone-600';
  return 'text-red-700';
};

// Calculate state from score (source of truth)
const getStateFromScore = (score: number): string => {
  if (score <= 3.0) return 'Field';
  if (score < 7.0) return 'Transitioning';
  return 'Particle';
};

const getStateColor = (state: string) => {
  if (state.toLowerCase().includes('field')) return 'text-stone-950';
  if (state.toLowerCase().includes('particle')) return 'text-red-700';
  return 'text-stone-600';
};

const snapshotHeroOverrides: Record<string, { title: string; body: string[] }> = {
  canva: {
    title: 'Canva is taking over the first messy draft.',
    body: [
      'The marketer opens a blank deck five minutes before the meeting. The sales lead needs a one-pager. HR needs a flyer. The founder needs a launch graphic. Nobody is asking for a design department yet. They need the work to look real enough to move.',
      'Canva sits at the moment before work becomes official. The draft gets a brand kit, AI help, comments, approvals, templates, charts, video, and a path into the next campaign. The deeper move is control over the handoff between loose idea and approved asset.',
    ],
  },
  disney: {
    title: 'Disney is trying to turn every park gate into a login.',
    body: [
      'The family planner is in the app before the trip starts: hotel, park pass, lightning lane, character breakfast, stroller route, dinner slot, movie memory, jersey request, and the kid asking for the next thing before the first line even moves.',
      'Disney has always sold memory. The current fight is cleaner and harder: connect the trip, the stream, the game, the cruise, the store, and the next franchise into one guest file. The company with the best family signal gets to feed demand before the family can name it.',
    ],
  },
  netflix: {
    title: 'Netflix is turning attention into a release schedule.',
    body: [
      'The showrunner sees notes after the season. Netflix sees the audience during the season: pause points, rewatches, skips, language jumps, household spread, ad response, and whether a live event turns a quiet account into a habit.',
      'The company is moving past the old streamer fight. It is using behavior as a studio brief, an ad brief, a pricing brief, and a format brief. The machine no longer waits for culture to report back.',
    ],
  },
  amazon: {
    title: 'Amazon is using AI to make scale feel small again.',
    body: [
      'The warehouse lead feels it first when the plan changes before the shift settles. The AWS buyer feels it when capacity becomes the whole strategy. The shopper feels it when search turns into a conversation instead of a shelf.',
      'Amazon is training the nervous system of a giant company: cloud workloads, routes, ads, listings, support, and shopping intent feeding each other. The old flywheel moved goods and cash. The new one moves decisions.',
    ],
  },
  ups: {
    title: 'UPS is learning to say no to the wrong package.',
    body: [
      'The driver feels the difference between a full truck and a good route. Some volume keeps the day busy and still drains the business: extra stops, weak yield, tight windows, facility strain, and a customer with enough scale to bend the network around itself.',
      'UPS spent decades worshipping density. The new test is more disciplined: which packages deserve the network, which customers earn capacity, and which work only looks good because the truck was already moving.',
    ],
  },
  stripe: {
    title: 'The demo works. Then finance opens the invoice.',
    body: [
      'The product lead gets the first clean demo. Finance gets the first strange invoice. A customer burns through model usage in an afternoon. A bot slips through signup. Sales promises usage pricing before any team knows how to meter it. The feature ships, then finance, support, legal, and product all inherit the same problem.',
      'Stripe is moving into the part of the business where usage becomes a charge, a refund, a receipt, a fraud signal, a tax question, and eventually a finance rule. In the AI economy, the company helping teams price the work may sit closer to power than the company only moving the money.',
    ],
  },
  spotify: {
    title: 'Spotify is turning taste into supply.',
    body: [
      'An artist checks the dashboard and sees the old fight: streams, saves, payout, playlist placement. Across the aisle, a product team is building a different fight. The listener can ask for a playlist, a personal podcast, a remix, a cover, or a mood without caring which old media box it came from.',
      'Spotify used to rent the catalog and organize the shelves. Now it is learning how to make new shelves, new formats, and new versions from the taste data it already owns. The deeper move sits under the music debate: whoever owns the listener prompt can decide which kind of audio gets born next.',
    ],
  },
  anthropic: {
    title: 'Anthropic is selling permission to use the dangerous tool.',
    body: [
      'The security lead is the real buyer. The engineer already wants Claude Code. The analyst already wants the model in the workflow. The blocker is the audit trail, data boundary, admin control, procurement review, and the career risk of letting frontier AI touch live work.',
      'Anthropic is building around the blocker. Claude Enterprise, Claude Code, Claude Gov, partner services, and safety work all point at the same lane: make powerful models usable in places where a loose chatbot would get shut down. The prize is bigger than model share. It is becoming the permission layer for intelligence inside serious work.',
    ],
  },
};

const getHeroInsight = (snapshot: CompanySnapshot) => {
  return snapshotHeroOverrides[snapshot.slug]?.title || snapshot.pattern;
};

const getHeroBody = (snapshot: CompanySnapshot) => {
  return snapshotHeroOverrides[snapshot.slug]?.body || [
    'A company rarely gets heavy all at once. First the old win keeps getting a vote, the clean plan starts paying rent to yesterday\'s structure, or the best people work around the system to keep the day moving.',
    'Use this snapshot to spot the pattern early: what still helps the company move, what slows the next move down, and where the pressure may show up before the market gives it a lazy name.',
  ];
};

const CompanyPage: NextPage<CompanyPageProps> = ({ snapshot }) => {
  if (!snapshot) {
    return (
      <div className="gpi-page">
        <Navigation currentPage="companies" />
        <div className="gpi-shell py-24">
          <h1 className="text-4xl font-bold">Company snapshot not found</h1>
          <p className="mt-4 text-stone-700">This company read is unavailable.</p>
          <Link href="/insights/snapshots" className="gpi-link mt-8 inline-block">
            Back to snapshots
          </Link>
        </div>
      </div>
    );
  }

  const heroInsight = getHeroInsight(snapshot);
  const heroBody = getHeroBody(snapshot);

  return (
    <>
      <SEOHead
        title={`${snapshot.name} Company Snapshot | GPI Studio`}
        description={`${snapshot.name}: ${heroInsight}`}
      />

      <div className="gpi-page">
        <Navigation currentPage="companies" />

        <main className="gpi-shell py-14 md:py-20">
          <section className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div>
              <Link href="/insights/snapshots" className="gpi-link font-mono text-sm">
                Back to snapshots
              </Link>
              <p className="gpi-kicker mt-8">{snapshot.name}</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">{heroInsight}</h1>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm text-stone-600">
                <span className={getStateColor(getStateFromScore(snapshot.gpiScore))}>
                  {getStateFromScore(snapshot.gpiScore)}
                </span>
                <span>{snapshot.gpiScore.toFixed(2)} GPI</span>
              {snapshot.ticker && (
                  <span>{snapshot.ticker}</span>
              )}
                <span>{snapshot.analysisDate}</span>
              </div>

              <div className="mt-8 gpi-prose max-w-3xl text-stone-800">
                {heroBody.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">The Read</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  The habit under the headline.
                </p>
              </div>

              <div className="gpi-prose max-w-3xl">
                <h2 className="text-3xl font-bold leading-tight text-stone-950 md:text-4xl">{snapshot.pattern}</h2>
                <p className="mt-5">{snapshot.patternDescription}</p>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Scorecard + Read Checks</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  The number, then the pressure points.
                </p>
              </div>

              <div className="space-y-8">
                <div className="grid gap-px border-y border-stone-300 bg-stone-300 md:grid-cols-2">
                  <div className="bg-[#f7f2e8] p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">GPI Score</p>
                    <p className={`mt-2 font-mono text-3xl font-bold ${getScoreColor(snapshot.gpiScore)}`}>
                      {snapshot.gpiScore.toFixed(2)}
                    </p>
                  </div>
                  <div className="bg-[#f7f2e8] p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">State</p>
                    <p className="mt-2 text-xl font-bold text-stone-950">{snapshot.state}</p>
                  </div>
                  {snapshot.marketCap && (
                    <div className="bg-[#f7f2e8] p-5">
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">Market Cap</p>
                      <p className="mt-2 text-xl font-bold text-stone-950">{snapshot.marketCap}</p>
                    </div>
                  )}
                  {snapshot.employees && (
                    <div className="bg-[#f7f2e8] p-5">
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">Employees</p>
                      <p className="mt-2 text-xl font-bold text-stone-950">{snapshot.employees.toLocaleString()}</p>
                    </div>
                  )}
                  {snapshot.revenue && (
                    <div className="bg-[#f7f2e8] p-5 md:col-span-2">
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">Revenue</p>
                      <p className="mt-2 text-xl font-bold text-stone-950">{snapshot.revenue}</p>
                    </div>
                  )}
                </div>

                <div className="overflow-x-auto">
                  <table className="gpi-table">
                    <tbody>
                      {snapshot.dimensions.map((dim) => (
                        <tr key={dim.dimension}>
                          <td className="w-56 font-mono text-sm font-bold text-stone-950">{dim.dimension}</td>
                          <td className={`w-16 font-mono text-sm font-bold ${getScoreColor(dim.score)}`}>{dim.score}</td>
                          <td className="text-sm leading-6 text-stone-700">{dim.explanation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {snapshot.keyNumbers.length > 0 && (
            <section className="gpi-rule mt-14 pt-8">
              <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <p className="gpi-kicker">Numbers Worth Holding</p>
                  <p className="mt-3 text-sm leading-6 text-stone-700">
                    The filing pile gets smaller here.
                  </p>
                </div>

                <div className="grid gap-px border-y border-stone-300 bg-stone-300 md:grid-cols-2">
                  {snapshot.keyNumbers.map((num) => (
                    <div key={num} className="bg-[#f7f2e8] p-5 text-sm leading-6 text-stone-800">
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Still Working / Still Stuck</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  What still has legs. What still drags.
                </p>
              </div>

              <div className="grid gap-px border-y border-stone-300 bg-stone-300 md:grid-cols-2">
                <div className="bg-[#f7f2e8] p-5">
                  <div className="font-mono text-sm font-bold text-stone-950">Still working</div>
                  <ul className="mt-4 space-y-3">
                    {snapshot.enablers.map((item) => (
                      <li key={item} className="text-sm leading-6 text-stone-700">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#f7f2e8] p-5">
                  <div className="font-mono text-sm font-bold text-stone-950">Still stuck</div>
                  <ul className="mt-4 space-y-3">
                    {snapshot.friction.map((item) => (
                      <li key={item} className="text-sm leading-6 text-stone-700">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {snapshot.quotable && (
            <section className="gpi-rule mt-14 pt-8">
              <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <p className="gpi-kicker">The Line</p>
                </div>
                <blockquote className="max-w-3xl text-2xl leading-snug text-stone-950">
                  "{snapshot.quotable}"
                </blockquote>
              </div>
            </section>
          )}

          <section className="gpi-rule mt-14 pt-8">
            <div className="flex flex-col gap-4 font-mono text-sm md:flex-row md:items-center">
              <Link className="gpi-link" href="/insights/snapshots">All snapshots</Link>
              <Link className="gpi-link" href="/gpi-framework">Read the lens</Link>
              <Link className="gpi-link" href="/studio">Turn a decision into a studio session</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { getAllSnapshots } = await import('../../lib/snapshots-content');
  const snapshots = getAllSnapshots();
  const paths = snapshots.map((s) => ({ params: { slug: s.slug } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<CompanyPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const snapshot = getSnapshotBySlug(slug);

  return {
    props: { snapshot },
    revalidate: 3600,
  };
};

export default CompanyPage;
