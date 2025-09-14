import Placeholder from "@/components/shell/Placeholder";
export const metadata = { title: "General Dentistry | St Mary’s House Dental Care" };
export default function Page() {
  return <Placeholder title="General Dentistry" links={[
    { href: "/treatments/general/restorative", label: "Restorative" },
    { href: "/treatments/general/children", label: "Children’s Dentistry" },
    { href: "/treatments/general/sedation", label: "Sedation" },
    { href: "/treatments/general/the-wand", label: "The Wand (painless numbing)" },
  ]} />;
}
