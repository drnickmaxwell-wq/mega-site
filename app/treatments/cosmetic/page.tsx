import Placeholder from "@/components/shell/Placeholder";
export const metadata = { title: "Cosmetic Dentistry | St Mary’s House Dental Care" };
export default function Page() {
  return <Placeholder title="Cosmetic Dentistry" links={[
    { href: "/treatments/cosmetic/whitening", label: "Whitening" },
    { href: "/treatments/cosmetic/composite-bonding", label: "Composite Bonding" },
    { href: "/treatments/cosmetic/orthodontics", label: "Orthodontics" },
  ]} />;
}
