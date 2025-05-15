import WeaponLayout from '../../components/WeaponLayout';
import WeaponContent from '../../components/WeaponContent';

const FirstBloodBuild = () => {
  return (
    <WeaponLayout
      title="First Blood Build"
      description="Bleed for it. Or keep lying to yourself. Build the bruise."
      price="$5,000"
      prevWeapon={{ name: "30-Day Drift Break", slug: "movement-sprint" }}
    >
      <WeaponContent weaponSlug="mvp-jumpstart" />
    </WeaponLayout>
  );
};

export default FirstBloodBuild;