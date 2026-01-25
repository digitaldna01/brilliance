import { useEffect, useState } from "react";

/**
 * 스크롤 스냅 커스텀 훅
 * - 현재 활성화된 섹션 추적
 * - 스크롤 방향 감지
 * - 섹션 간 부드러운 전환
 */

interface UseScrollSnapOptions {
  totalSections: number;
}

export function useScrollSnap({ totalSections }: UseScrollSnapOptions) {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    // TODO: Intersection Observer 설정
    // TODO: 스크롤 방향 감지
    // TODO: 현재 섹션 업데이트

    return () => {
      // TODO: cleanup
    };
  }, [totalSections]);

  const scrollToSection = (index: number) => {
    // TODO: 특정 섹션으로 스크롤
    const section = document.getElementById(`section${index + 1}`);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    currentSection,
    scrollDirection,
    scrollToSection,
  };
}
