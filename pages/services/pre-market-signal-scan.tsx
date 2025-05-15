import type { NextPage } from 'next';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceContent from '../../components/ServiceContent';

const PreMarketSignalScan: NextPage = () => {
  return (
    <ServiceLayout
      title="Pre-Market Signal Scan"
      description="A no-fluff, data-rich report to guide your product or market decisions"
      price="$1,500"
      prevService={{ name: "Clarity Catalyst Call", slug: "clarity-catalyst-call" }}
      nextService={{ name: "30-Day Movement Sprint", slug: "movement-sprint" }}
    >
      <ServiceContent
        duration="5-7 business days"
        outcome="A no-fluff, data-rich Go | Wait | No-Go report tailored to your product or market hypothesis."
        includes={[
          "Market pulse check: current demand, trends, and timing red flags",
          "Competitive risk + whitespace analysis",
          "Context-specific timing forecast (enter now, wait, or pivot)",
          "Proprietary Clarity Signal Grid recommendation",
          "30-minute debrief call to unpack the brief"
        ]}
        bestFor={[
          "Creators or founders testing new verticals",
          "Businesses exploring product or market expansion",
          "Teams needing to kill or greenlight ideas fast"
        ]}
        whyItWorks="We strip the bloat. You get clarity on whether to move, wait, or walk away—saving months of drift and costly false starts."
      />
    </ServiceLayout>
  );
};

export default PreMarketSignalScan;