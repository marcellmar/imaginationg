import WeaponLayout from '../../components/WeaponLayout';
import WeaponContent from '../../components/WeaponContent';

const MarketSmackdown = () => {
  return (
    <WeaponLayout
      title="Market Smackdown"
      description="Face the truth you've been avoiding. Go or drift."
      price="$1,500"
      prevWeapon={{ name: "Ecosystem Collision Map", slug: "ecosystem-map" }}
      nextWeapon={{ name: "30-Day Drift Break", slug: "movement-sprint" }}
    >
      <WeaponContent weaponSlug="pre-market-signal-scan" />
    </WeaponLayout>
  );
};

export default MarketSmackdown;