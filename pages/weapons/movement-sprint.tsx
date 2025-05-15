import WeaponLayout from '../../components/WeaponLayout';
import WeaponContent from '../../components/WeaponContent';

const DriftBreak = () => {
  return (
    <WeaponLayout
      title="30-Day Drift Break"
      description="Movement. Forced. No plan. No options. Just move."
      price="$3,000"
      prevWeapon={{ name: "Market Smackdown", slug: "pre-market-signal-scan" }}
      nextWeapon={{ name: "First Blood Build", slug: "mvp-jumpstart" }}
    >
      <WeaponContent weaponSlug="movement-sprint" />
    </WeaponLayout>
  );
};

export default DriftBreak;