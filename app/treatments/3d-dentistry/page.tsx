import Placeholder from "@/components/shell/Placeholder";
export const metadata = { title: "3D Dentistry | St Mary’s House Dental Care" };
export default function Page() {
  return <Placeholder title="3D Dentistry" intro="Same-day 3D solutions across veneers, implants, dentures." links={[
    { href: "/treatments/3d-dentistry/3d-printed-veneers", label: "3D Printed Veneers" },
    { href: "/treatments/3d-dentistry/3d-implant-restorations", label: "3D Implant Restorations" },
    { href: "/treatments/3d-dentistry/3d-dentures", label: "3D Dentures" },
    { href: "/treatments/3d-dentistry/surgically-guided-implants", label: "Surgically Guided Implants" },
    { href: "/treatments/3d-dentistry/spark-aligners", label: "Spark Aligners" },
  ]} />;
}
