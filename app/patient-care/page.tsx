import Placeholder from "@/components/shell/Placeholder";
export const metadata = { title: "Patient Care | St Mary’s House Dental Care" };
export default function Page() {
  return <Placeholder title="Patient Care" links={[
    { href: "/patient-care/emergency", label: "Emergency" },
    { href: "/patient-care/anxiety", label: "Anxiety Care" },
  ]} />;
}
