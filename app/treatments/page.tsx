import Placeholder from "@/components/shell/Placeholder";
export const metadata = { title: "Treatments | St Mary’s House Dental Care" };
export default function Page() {
  return <Placeholder title="Treatments" intro="Explore general, 3D dentistry, and cosmetic treatments." links={[
    { href: "/treatments/general", label: "General" },
    { href: "/treatments/3d-dentistry", label: "3D Dentistry" },
    { href: "/treatments/cosmetic", label: "Cosmetic" },
  ]} />;
}
