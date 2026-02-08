/**
 * Partners 페이지 히어로 섹션
 * - 배경 이미지 (홍콩 전경)
 * - 타이틀: "Our Partners"
 * - 서브타이틀: "Together, We Create Value and Trust"
 * - 설명 텍스트
 * - 반응형: 모바일/태블릿/데스크탑 최적화
 */
export default function PartnersHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full pt-16 sm:h-[55vh] md:h-[60vh] md:min-h-[500px]">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <img
          src="/images/partners-hero.jpg"
          alt="Partners Hero"
          className="h-full w-full object-cover object-center"
        />
        {/* 오버레이 - 가독성 향상 */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/50" />
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white md:px-8 lg:px-10">
        {/* 메인 타이틀 */}
        <h1 className="mb-3 text-3xl leading-tight font-bold md:mb-4 md:text-4xl lg:text-5xl">
          Our Partners
        </h1>

        {/* 서브 타이틀 */}
        <h2 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:text-2xl">
          Together, We Create Value and Trust
        </h2>

        {/* 설명 텍스트 */}
        <p className="mx-auto max-w-xl text-sm leading-relaxed md:max-w-2xl md:text-base lg:text-lg">
          We collaborate with finance leaders to bring innovative solutions and
          shared success
        </p>
      </div>
    </section>
  );
}
