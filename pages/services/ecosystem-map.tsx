import type { NextPage } from 'next';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceContent from '../../components/ServiceContent';

const EcosystemMap: NextPage = () => {
  return (
    <ServiceLayout
      title="Ecosystem Map + Connection Strategy"
      description="Build alliances and open doors with a strategic connection plan"
      price="$750"
      prevService={{ name: "MVP Jumpstart", slug: "mvp-jumpstart" }}
    >
      <ServiceContent
        duration="1 week"
        outcome="A stakeholder constellation map and clear connection strategy to amplify your reach, build alliances, and open doors."
        includes={[
          "Mapping of key players, allies, gatekeepers, and amplifiers in your space",
          "Custom outreach blueprint with scripts and warm intro pathways",
          "90-day connection plan focused on collaborations, not cold pitches",
          "Visibility map highlighting channels, communities, and partnerships"
        ]}
        bestFor={[
          "Local orgs and platforms needing deeper roots, not more ads",
          "Creators, movements, and platforms seeking to grow via ecosystem alignment"
        ]}
        whyItWorks="We map the invisible threads. Instead of chasing leads, you cultivate the right relationships that compound."
      />
    </ServiceLayout>
  );
};

export default EcosystemMap;