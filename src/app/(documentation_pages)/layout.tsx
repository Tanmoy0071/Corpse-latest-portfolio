import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
