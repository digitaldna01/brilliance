import FinancialTourSection from "@/components/service/FinancialTourSection";
import ProductEnrollmentSection from "@/components/service/ProductEnrollmentSection";
import ServiceHero from "@/components/service/ServiceHero";

export default function Service() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceHero />
      <ProductEnrollmentSection />
      <FinancialTourSection />
    </main>
  );
}
