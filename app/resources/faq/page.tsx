import Placeholder from "@/components/shell/Placeholder";
export const metadata = { title: "Resources | St Mary’s House Dental Care" };
export default function Page() {
  return <Placeholder title="Resources" intro="Downloadable leaflets and FAQs." links={[
    { href: "/resources/faq", label: "FAQs" },
    { href: "/downloads", label: "Patient Leaflets (later)" },
  ]} />;
}
