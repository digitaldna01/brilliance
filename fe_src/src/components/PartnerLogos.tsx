import { useEffect, useRef, useState } from "react";

/**
 * 파트너사 로고 그리드 섹션
 * - 타이틀: "Our Partners"
 * - 설명: "Explore Our Financial and Credit Rating Partners"
 * - 로고 그리드 (3열 구조)
 */

// 임시 데이터 - 나중에 i18n으로 변경
const partners = [
  {
    id: 1,
    name: "AXA",
    description: "Group Insurance Leader",
    year: "2000",
    logo: "/images/partners/axa.png",
    link: "https://www.axa.com.hk/en",
  },
  {
    id: 2,
    name: "GENERALI",
    description: "Leading European Insurer",
    year: "2001",
    logo: "/images/partners/generali.jpg",
    link: "https://www.generali.com.hk/EN_US",
  },
  {
    id: 3,
    name: "ZURICH",
    description: "Global Insurance Solutions",
    year: "2002",
    logo: "/images/partners/zurich.png",
    link: "https://www.zurich.com.hk/en",
  },
  {
    id: 4,
    name: "CHUBB",
    description: "Global P&C Insurance",
    year: "2003",
    logo: "/images/partners/chubb.png",
    link: "https://www.chubb.com/hk-en/",
  },
  {
    id: 5,
    name: "Standard Chartered",
    description: "Emerging Markets Bank",
    year: "2004",
    logo: "/images/partners/standard-chartered.png",
    link: "https://www.sc.com/hk/",
  },
  {
    id: 6,
    name: "HSBC",
    description: "Global Banking Services",
    year: "2005",
    logo: "/images/partners/hsbc.png",
    link: "https://www.hsbc.com.hk",
  },
  {
    id: 7,
    name: "FitchRatings",
    description: "Global Credit Ratings",
    year: "2006",
    logo: "/images/partners/fitchRatings.png",
    link: "https://www.fitchratings.com",
  },
  {
    id: 8,
    name: "MOODY'S",
    description: "Premier Credit Ratings",
    year: "2007",
    logo: "/images/partners/moodys.png",
    link: "https://www.moodys.com",
  },
  {
    id: 9,
    name: "AXA",
    description: "Group Insurance Leader",
    year: "2000",
    logo: "/images/partners/axa.png",
    link: "https://www.axa.com.hk/en",
  },
];

export default function PartnerLogos() {
  const [isVisible, setIsVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [columnsCount, setColumnsCount] = useState(3);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // 화면 크기별 열 개수 감지
  useEffect(() => {
    const updateColumnsCount = () => {
      if (window.innerWidth >= 1024) {
        setColumnsCount(3); // lg: 3열
      } else {
        setColumnsCount(2); // 모바일/태블릿: 2열
      }
    };

    updateColumnsCount();
    window.addEventListener("resize", updateColumnsCount);

    return () => {
      window.removeEventListener("resize", updateColumnsCount);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isGridVisible) {
            setIsGridVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, [isGridVisible]);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* 타이틀 */}
        <div
          ref={titleRef}
          className={`mb-12 text-center transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-37.5 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Partners</h2>
          <p className="text-gray-600">
            Explore Our Financial and Credit Rating Partners
          </p>
        </div>

        {/* 로고 그리드 */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {partners.map((partner, index) => {
            // 행별로 delay 계산 - 화면 크기별 열 개수 고려
            const rowIndex = Math.floor(index / columnsCount);
            const delay = rowIndex * 200;

            return (
              <a
                key={partner.id}
                href={partner.link}
                target="_blank"
                rel="noreferrer"
                className="group hover:border-primary flex flex-col items-center rounded-lg border-2 border-gray-200 p-2 transition-all ease-out hover:shadow-md sm:flex-row sm:items-start sm:gap-2 lg:gap-4"
                style={{
                  transitionDuration: "1500ms, 300ms",
                  transitionProperty:
                    "transform, opacity, border-color, box-shadow",
                  transitionDelay: isGridVisible ? `${delay}ms, 0ms` : "0ms",
                  transform: isGridVisible
                    ? "translateY(0)"
                    : "translateY(150px)",
                  opacity: isGridVisible ? 1 : 0,
                }}
              >
                {/* 로고 */}
                <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-gray-100 sm:mb-0 sm:h-16 sm:w-16 lg:h-18 lg:w-18">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="lg:max-w-base max-h-8 max-w-8 object-contain sm:max-h-10 sm:max-w-10 lg:max-h-12"
                  />
                </div>

                {/* 정보 */}
                <div className="flex flex-col text-center sm:text-left">
                  <p className="mb-2 text-xs font-semibold sm:text-sm lg:text-base">
                    {partner.name}
                  </p>
                  <p className="text-xs text-gray-600 transition-all duration-300 ease-out group-hover:-translate-y-2 sm:text-sm">
                    <span className="hidden transition-all duration-300 ease-out group-hover:inline">
                      {partner.description}
                    </span>
                    <span className="transition-all duration-300 ease-out group-hover:hidden">
                      Working Since
                    </span>
                  </p>
                  <p className="text-xs font-medium ease-out sm:text-sm">
                    <span className="transition-all duration-300 ease-out group-hover:hidden">
                      {partner.year}
                    </span>
                    <span className="hidden transition-all duration-300 ease-out group-hover:inline">
                      Open Website →
                    </span>
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
