import { useEffect, useRef } from "react";
import VideoSection from "@/components/VideoSection";
import Footer from "../components/Footer";
/**
 * 랜딩 페이지 메인
 * - 4개의 풀스크린 비디오 섹션
 * - 스크롤 스냅 적용
 * - 각 섹션은 슬라이드 업 애니메이션
 */

// 섹션 데이터
const sections = [
  {
    id: "section1",
    videoUrl: "/videos/Slide1.mp4",
    title: "A Journey into the New Financial Landscape",
    description:
      "Brilliance introduces offshore finance to domestic clients. Discover premium financial products in regions where domestic financial regulations and tax laws do not apply.",
  },
  {
    id: "section2",
    videoUrl: "/videos/Slide2.mp4",
    title: "Build Legacy Beyond Borders",
    description:
      '"Offshore" refers to activities outside one\'s home country. Offshore finance involves cross-border financial transactions, typically centered in global hubs such as Singapore, Hong Kong, Switzerland, the Cayman Islands, and Bermuda.',
  },
  {
    id: "section3",
    videoUrl: "/videos/Slide3.mp4",
    title: "Enjoy your Borderless Retirement Life",
    description:
      "We connect you to offshore investment opportunities that preserve and grow your wealth across borders, free from unnecessarily tax burdens.",
  },
  {
    id: "section4",
    videoUrl: "/videos/Slide4.mp4",
    title: "Protect the future of your family wealth",
    description:
      "When parents pass away, the financial product doesn't expire but is instead transferred to heirs without jurisdictions without inheritance tax. These financial products can be held long-term, allowing wealth to be preserved across generations.",
  },
];

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer로 현재 섹션 감지
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      threshold: 0.5, // 50% 보이면 활성화
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 현재 보이는 섹션 ID 전달
          window.dispatchEvent(
            new CustomEvent("activeSection", {
              detail: { sectionId: entry.target.id },
            })
          );
        }
      });
    }, observerOptions);

    // 모든 섹션 관찰
    const sections = container.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // 내부 스크롤을 감지하여 커스텀 이벤트 발생
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout: number;

    const handleScroll = () => {
      // 커스텀 이벤트로 스크롤 위치 전달
      window.dispatchEvent(
        new CustomEvent("homeScroll", {
          detail: { scrollY: container.scrollTop },
        })
      );

      // 스크롤이 멈췄는지 감지 (디바운스)
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        // 스크롤이 멈춘 후 0.5초 뒤 Navbar 표시 이벤트
        window.dispatchEvent(
          new CustomEvent("sectionArrived", {
            detail: { scrollY: container.scrollTop },
          })
        );
      }, 500); // 0.5초
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="fixed inset-0 h-screen w-full snap-y snap-mandatory overflow-y-scroll"
    >
      <main>
        {sections.map((section) => (
          <VideoSection
            key={section.id}
            id={section.id}
            videoUrl={section.videoUrl}
            title={section.title}
            description={section.description}
          />
        ))}
        <Footer />
      </main>
    </div>
  );
}
