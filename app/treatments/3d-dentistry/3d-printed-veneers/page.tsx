import Placeholder from "@/components/shell/Placeholder";
export const metadata = { title: "3D Printed Veneers | St Mary’s House Dental Care" };
export default function Page() {
  return <Placeholder title="3D Printed Veneers" intro="Same-day smile improvements with cutting-edge 3D printing." links={[
    { href: "/fees", label: "See Fees" },
    { href: "/patient-stories", label: "Patient Stories" },
  ]} />;
}
