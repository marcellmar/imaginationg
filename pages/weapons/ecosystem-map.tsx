import WeaponLayout from '../../components/WeaponLayout';
import WeaponContent from '../../components/WeaponContent';

const EcosystemCollisionMap = () => {
  return (
    <WeaponLayout
      title="Ecosystem Collision Map"
      description="Your network is dead. Get the real collisions. Or stay soft."
      price="$1,000"
      prevWeapon={{ name: "Clarity Collision", slug: "clarity-catalyst-call" }}
      nextWeapon={{ name: "Market Smackdown", slug: "pre-market-signal-scan" }}
    >
      <WeaponContent weaponSlug="ecosystem-map" />
    </WeaponLayout>
  );
};

export default EcosystemCollisionMap;