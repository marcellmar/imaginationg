import type { NextPage } from 'next';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceContent from '../../components/ServiceContent';

const ClarityCatalystCall: NextPage = () => {
  return (
    <ServiceLayout
      title="Clarity Catalyst Call"
      description="A 90-minute catalytic session to move from drift to momentum"
      price="$250"
      nextService={{ name: "Pre-Market Signal Scan", slug: "pre-market-signal-scan" }}
    >
      <ServiceContent
        duration="90 minutes (Zoom or in-person if local)"
        outcome="A distilled, action-ready Dream → Move → Build map you can use immediately to navigate your current friction point."
        includes={[
          "Pre-session discovery prompts to focus your intent",
          "A live 90-minute catalytic session facilitated by our Chief Catalyst",
          "Live-mapping of your current obstacle, energy drains, and movement blocks",
          "Creation of a personalized 1-page Dream → Move → Build clarity map",
          "Post-session email follow-up with recording, notes, and your map"
        ]}
        bestFor={[
          "Founders in decision fog",
          "Creators overwhelmed by ideas with no traction",
          "Teams spinning in misalignment"
        ]}
        whyItWorks="We don't waste time. In one powerful session, we uncover hidden decision loops, surface your internal compass, and architect your next move without adding complexity."
      />
    </ServiceLayout>
  );
};

export default ClarityCatalystCall;