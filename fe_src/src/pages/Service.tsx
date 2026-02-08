import FinancialTourSection from "@/components/service/FinancialTourSection";
import ProductEnrollmentSection from "@/components/service/ProductEnrollmentSection";
import ServiceHero from "@/components/service/ServiceHero";
import AccountSupport from "@/components/service/AccountSupport";
import Aila from "@/components/service/Aila";

export default function Service() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceHero />
      <ProductEnrollmentSection />
      <FinancialTourSection />
      <AccountSupport />
      <Aila />
    </main>
  );
}
