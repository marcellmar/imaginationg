import type { FC } from 'react';
import Link from 'next/link';
import SEOHead from './SEOHead';
import Navigation from './Navigation';

export interface FrameworkDetailSpec {
  slug: string;
  title: string;
  kicker: string;
  meta: string;
  description: string;
  summary: string[];
  thesis: string;
  scale: Array<[string, string]>;
  signals: string[];
  examples: Array<[string, string]>;
  clientUse: Array<[string, string]>;
  previous?: [string, string];
  next?: [string, string];
}

interface FrameworkDetailPageProps {
  spec: FrameworkDetailSpec;
}

const FrameworkDetailPage: FC<FrameworkDetailPageProps> = ({ spec }) => {
  return (
    <>
      <SEOHead
        title={`${spec.title} | GPI Lens`}
        description={spec.description}
        ogImage="/images/og/framework.png"
      />

      <div className="gpi-page">
        <Navigation currentPage="framework" />

        <main className="gpi-shell py-14 md:py-20">
          <section className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <div>
              <Link className="gpi-link font-mono text-sm" href="/gpi-framework">
                Back to lens
              </Link>
              <p className="gpi-kicker mt-8">{spec.kicker}</p>
              <h1 className="mt-4 text-5xl leading-none md:text-7xl">{spec.title}</h1>
              <p className="mt-5 font-mono text-sm font-bold text-stone-700">{spec.meta}</p>
            </div>

            <div className="gpi-prose max-w-3xl">
              {spec.summary.map((paragraph) => (
                <p key={paragraph} className="mb-5 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Core Read</p>
              </div>
              <div className="gpi-prose max-w-3xl">
                <p>{spec.thesis}</p>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Scale</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  Read the low end and high end as tendencies, not grades. The
                  situation decides whether the pattern is useful.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="gpi-table">
                  <tbody>
                    {spec.scale.map(([label, body]) => (
                      <tr key={label}>
                        <td className="w-52 font-mono text-sm font-bold text-stone-950">{label}</td>
                        <td className="text-sm leading-6 text-stone-700">{body}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Signals</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  The signs you would expect to see if the read is close to right.
                </p>
              </div>

              <div className="grid gap-px border-y border-stone-300 bg-stone-300 md:grid-cols-2">
                {spec.signals.map((signal) => (
                  <div key={signal} className="bg-[#f7f2e8] p-5">
                    <p className="text-sm leading-6 text-stone-800">{signal}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Examples</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  Examples are not labels forever. A company can move as its market,
                  leadership, incentives, and constraints change.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="gpi-table">
                  <tbody>
                    {spec.examples.map(([name, read]) => (
                      <tr key={name}>
                        <td className="w-52 font-mono text-sm font-bold text-stone-950">{name}</td>
                        <td className="text-sm leading-6 text-stone-700">{read}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Client Use</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  The way this read turns into a map, packet, or decision conversation.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="gpi-table">
                  <tbody>
                    {spec.clientUse.map(([move, use]) => (
                      <tr key={move}>
                        <td className="w-52 font-mono text-sm font-bold text-stone-950">{move}</td>
                        <td className="text-sm leading-6 text-stone-700">{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="flex flex-col gap-4 font-mono text-sm md:flex-row md:items-center">
              {spec.previous && <Link className="gpi-link" href={spec.previous[1]}>{spec.previous[0]}</Link>}
              <Link className="gpi-link" href="/gpi-framework">Lens overview</Link>
              <Link className="gpi-link" href="/maps">Maps</Link>
              {spec.next && <Link className="gpi-link" href={spec.next[1]}>{spec.next[0]}</Link>}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default FrameworkDetailPage;
