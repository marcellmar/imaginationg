import type { FC } from 'react';
import Link from 'next/link';
import SEOHead from './SEOHead';
import Navigation from './Navigation';
import type { DeepRead } from '../lib/deep-reads';

interface DeepReadPageProps {
  read: DeepRead;
}

const DeepReadPage: FC<DeepReadPageProps> = ({ read }) => {
  return (
    <>
      <SEOHead
        title={`${read.title} | GPI Studio`}
        description={read.description}
        ogImage="/images/og/insights.png"
      />

      <div className="gpi-page">
        <Navigation currentPage="reads" />

        <main className="gpi-shell py-10 md:py-14">
          <section className="grid gap-7 md:grid-cols-[0.72fr_1.28fr] md:items-start">
            <div>
              <Link className="gpi-link font-mono text-sm" href="/insights/growing-pains">
                Back to Growing Pains
              </Link>
              <p className="gpi-kicker mt-5">{read.kicker}</p>
              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">{read.title}</h1>
            </div>

            <div className="gpi-prose max-w-3xl">
              <p className="text-xl leading-snug text-stone-950 md:text-2xl">{read.subtitle}</p>
              {read.opening.map((paragraph) => (
                <p className="mt-4" key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          {read.sections.map((section) => (
            <section className="gpi-rule mt-9 pt-6" key={section.title}>
              <div className="grid gap-6 md:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <p className="gpi-kicker">{section.title}</p>
                </div>
                <div className="gpi-prose max-w-3xl">
                  {section.body.map((paragraph) => (
                    <p className="mb-4 last:mb-0" key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <section className="gpi-rule mt-9 pt-6">
            <div className="grid gap-6 md:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="gpi-kicker">Questions to carry</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  The point is not to explain everything. It is to make the next conversation sharper.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="gpi-table">
                  <tbody>
                    {read.workingQuestions.map(([question, note]) => (
                      <tr key={question}>
                        <td className="w-60 font-mono text-sm font-bold text-stone-950">{question}</td>
                        <td className="text-sm leading-6 text-stone-700">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-9 pt-6">
            <div className="grid gap-6 md:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="gpi-kicker">Use it when</p>
              </div>
              <p className="max-w-3xl text-xl leading-snug text-stone-950 md:text-2xl">{read.useWhen}</p>
            </div>
          </section>

          <section className="gpi-rule mt-9 pt-6">
            <div className="flex flex-col gap-4 font-mono text-sm md:flex-row md:items-center">
              <Link className="gpi-link" href="/insights/growing-pains">All deep reads</Link>
              <Link className="gpi-link" href="/gpi-framework">Read the lens</Link>
              <Link className="gpi-link" href="/work">Bring a decision</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default DeepReadPage;
