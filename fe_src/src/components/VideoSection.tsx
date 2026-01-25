import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * 재사용 가능한 풀스크린 비디오 섹션
 * - 배경 비디오
 * - 텍스트 오버레이
 * - 슬라이드 업 애니메이션
 * - 뷰포트 진입 시 애니메이션 트리거
 */

interface VideoSectionProps {
  id: string;
  videoUrl: string;
  title: string;
  description: string;
  overlayDark?: boolean; // 어두운 오버레이 추가 여부
}

export default function VideoSection({
  id,
  videoUrl,
  title,
  description,
  overlayDark = true,
}: VideoSectionProps) {
  // Intersection Observer로 뷰포트 진입 감지
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% 보일 때 트리거
    triggerOnce: true, // 한 번만 트리거 (이후 계속 보임)
  });

  // 타이핑 애니메이션을 위한 variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // 각 글자 사이 간격
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };

  // 제목을 단어 단위로 분리하여 각 단어를 inline-block으로 처리
  const titleWords = title.split(" ");

  return (
    <section
      id={id}
      ref={ref}
      className="relative h-screen w-full snap-start overflow-hidden"
    >
      {/* 배경 비디오 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* 어두운 오버레이 (선택적) */}
      {overlayDark && (
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      )}

      {/* 텍스트 콘텐츠 */}
      <motion.div
        className="relative z-10 flex h-full items-center justify-center text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          {/* 타이핑 애니메이션 제목 */}
          <motion.h2
            className="mb-3 text-3xl leading-tight font-bold md:mb-4 md:text-4xl lg:text-5xl"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {titleWords.map((word, wordIndex) => (
              <span key={`${id}-word-${wordIndex}`} className="inline-block">
                {word.split("").map((letter, letterIndex) => {
                  const globalIndex =
                    titleWords
                      .slice(0, wordIndex)
                      .reduce((sum, w) => sum + w.length, 0) +
                    wordIndex +
                    letterIndex;

                  return (
                    <motion.span
                      key={`${id}-${wordIndex}-${letterIndex}`}
                      custom={globalIndex}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  );
                })}
                {wordIndex < titleWords.length - 1 && (
                  <span className="inline-block">&nbsp;</span>
                )}
              </span>
            ))}
          </motion.h2>

          {/* 설명 텍스트 */}
          <motion.p
            className="mx-auto max-w-xl text-sm leading-relaxed wrap-break-word md:max-w-2xl md:text-base lg:text-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
