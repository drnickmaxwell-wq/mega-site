import Placeholder from "@/components/shell/Placeholder";
export const metadata = { title: "Patient Journeys | St Mary’s House Dental Care" };
export default function Page() {
  return <Placeholder title="Patient Journeys" links={[
    { href: "/patient-journeys/implants", label: "Implant Journey" },
    { href: "/patient-journeys/cosmetic", label: "Cosmetic Journey" },
    { href: "/patient-journeys/aligners", label: "Aligner Journey" },
  ]} />;
}
