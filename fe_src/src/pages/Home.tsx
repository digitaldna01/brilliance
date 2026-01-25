import VideoSection from "@/components/VideoSection";

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
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {sections.map((section) => (
        <VideoSection
          key={section.id}
          id={section.id}
          videoUrl={section.videoUrl}
          title={section.title}
          description={section.description}
        />
      ))}
    </main>
  );
}
