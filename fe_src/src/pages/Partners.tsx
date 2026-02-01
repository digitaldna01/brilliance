import PartnersHero from "@/components/PartnersHero";
import OrganizationChart from "@/components/OrganizationChart";
import PartnerLogos from "@/components/PartnerLogos";
import Footer from "@/components/Footer";

/**
 * Partners 페이지
 * - 히어로 섹션
 * - 조직도 섹션
 * - 파트너사 로고 섹션
 * - Footer
 */
export default function Partners() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <PartnersHero />

      {/* 조직도 섹션 */}
      <OrganizationChart />

      {/* 파트너사 로고 섹션 */}
      <PartnerLogos />

      {/* Footer */}
      <Footer />
    </div>
  );
}
