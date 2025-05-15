import WeaponLayout from '../../components/WeaponLayout';
import WeaponContent from '../../components/WeaponContent';

const ClarityCollisionPage = () => {
  return (
    <WeaponLayout
      title="Clarity Collision"
      description="You speak. We cut. You move. We leave."
      price="$500"
      nextWeapon={{ name: "Ecosystem Collision Map", slug: "ecosystem-map" }}
    >
      <WeaponContent weaponSlug="clarity-catalyst-call" />
    </WeaponLayout>
  );
};

export default ClarityCollisionPage;