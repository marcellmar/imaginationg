import type { NextPage } from 'next';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceContent from '../../components/ServiceContent';

const MVPJumpstart: NextPage = () => {
  return (
    <ServiceLayout
      title="MVP Jumpstart"
      description="A rapid prototyping sprint to bring your idea to life"
      price="$5,000"
      prevService={{ name: "30-Day Movement Sprint", slug: "movement-sprint" }}
      nextService={{ name: "Ecosystem Map", slug: "ecosystem-map" }}
    >
      <ServiceContent
        duration="2-3 weeks rapid prototyping sprint"
        outcome="A functional MVP you can test, pitch, or pilot—without burning $25K+ on bloated dev projects."
        includes={[
          "Feature prioritization + scope definition workshop",
          "No-code / low-code prototype (Glide, Bubble, Notion, Webflow, Replit, etc.)",
          "Light GTM (go-to-market) snapshot",
          "Optional user testing feedback loop (add-on)",
          "Pitch-ready deck or demo walkthrough video (optional add-on)"
        ]}
        bestFor={[
          "Founders with an idea needing tangible proof fast",
          "Creators or artists wanting to test concepts with real users",
          "Teams exploring product-market fit"
        ]}
        whyItWorks="We blend lean startup methods with agile design, ensuring you walk away with a working prototype—not vaporware."
      />
    </ServiceLayout>
  );
};

export default MVPJumpstart;