import Placeholder from "@/components/shell/Placeholder";
export const metadata = { title: "About | St Mary’s House Dental Care" };
export default function Page() {
  return <Placeholder title="About" intro="Who we are and how we care." links={[
    { href: "/team", label: "Meet the Team" },
    { href: "/patient-stories", label: "Patient Stories" },
  ]} />;
}
