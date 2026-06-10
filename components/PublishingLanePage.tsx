import type { FC } from 'react';
import Link from 'next/link';
import SEOHead from './SEOHead';
import Navigation from './Navigation';
import type { PublishingLane } from '../lib/publishing-lanes';

interface PublishingLanePageProps {
  lane: PublishingLane;
}

const PublishingLanePage: FC<PublishingLanePageProps> = ({ lane }) => {
  return (
    <>
      <SEOHead
        title={`${lane.title} | GPI Studio`}
        description={lane.description}
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
              <p className="gpi-kicker mt-8">Publishing Lane</p>
              <h1 className="mt-4 text-5xl leading-none md:text-7xl">{lane.title}</h1>
            </div>

            <div className="gpi-prose max-w-3xl">
              <p>{lane.description}</p>
              <p className="mt-5">{lane.purpose}</p>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Reads</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  Current examples in this lane. Some are full articles; some are
                  working surfaces that will become articles as the lane fills in.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="gpi-table">
                  <tbody>
                    {lane.items.map((item) => (
                      <tr key={item.href}>
                        <td className="w-72 font-mono text-sm font-bold text-stone-950">
                          <Link className="gpi-link" href={item.href}>{item.title}</Link>
                        </td>
                        <td className="text-sm leading-6 text-stone-700">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="flex flex-col gap-4 font-mono text-sm md:flex-row md:items-center">
              <Link className="gpi-link" href="/insights">Reads</Link>
              <Link className="gpi-link" href="/gpi-framework">Lens</Link>
              <Link className="gpi-link" href="/maps">Maps</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default PublishingLanePage;
