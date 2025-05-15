import type { NextPage } from 'next';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceContent from '../../components/ServiceContent';

const MovementSprint: NextPage = () => {
  return (
    <ServiceLayout
      title="30-Day Movement Sprint"
      description="A 4-week lightweight execution sprint to turn ideas into action"
      price="$3,000"
      prevService={{ name: "Pre-Market Signal Scan", slug: "pre-market-signal-scan" }}
      nextService={{ name: "MVP Jumpstart", slug: "mvp-jumpstart" }}
    >
      <ServiceContent
        duration="4 weeks (lightweight execution sprint)"
        outcome="Your 'What now?' gets a real answer—and you get moving with a custom action plan + rhythm."
        includes={[
          "Kickoff strategy session (90-min deep dive)",
          "Custom Intent-to-Action system designed for your natural rhythm",
          "Lightweight tools setup (Notion, Airtable, ClickUp, or AI tooling based on your stack)",
          "3 x accountability check-ins (weekly, asynchronous or live)",
          "End-of-sprint retrospective + forward map"
        ]}
        bestFor={[
          "Small teams with an urgent launch or relaunch window",
          "Founders burnt out by 'plate spinning' needing a focus reset",
          "Orgs stuck in planning loops needing external momentum injection"
        ]}
        whyItWorks="We remove the friction, compress clarity into action, and create a 4-week rhythm that drives progress without adding weight."
      />
    </ServiceLayout>
  );
};

export default MovementSprint;