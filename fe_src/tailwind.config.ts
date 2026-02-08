import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // 통상적인 breakpoint 사용 (Tailwind 기본값)
    screens: {
      sm: "640px", // 모바일 가로/작은 태블릿
      md: "768px", // 태블릿
      lg: "1024px", // 데스크탑
      xl: "1280px", // 큰 데스크탑
      "2xl": "1536px", // 초대형 화면
    },
    extend: {
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
        kr: ["Noto Sans KR", "sans-serif"],
      },
      fontSize: {
        // Fluid Typography - 뷰포트에 따라 자동 조정
        // clamp(최소값, 선호값, 최대값)
        xs: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)", // 12-14px
        sm: "clamp(0.875rem, 0.85rem + 0.3vw, 1rem)", // 14-16px
        base: "clamp(1rem, 0.95rem + 0.5vw, 1.125rem)", // 16-18px
        lg: "clamp(1.125rem, 1rem + 1vw, 1.5rem)", // 18-24px
        xl: "clamp(1.25rem, 1.1rem + 1.2vw, 1.75rem)", // 20-28px
        "2xl": "clamp(1.5rem, 1.3rem + 1.5vw, 2.25rem)", // 24-36px
        "3xl": "clamp(1.875rem, 1.5rem + 2vw, 3rem)", // 30-48px
        "4xl": "clamp(2.25rem, 1.8rem + 2.5vw, 3.75rem)", // 36-60px
        "5xl": "clamp(3rem, 2rem + 4vw, 4.5rem)", // 48-72px
        "6xl": "clamp(3.75rem, 2.5rem + 5vw, 5.5rem)", // 60-88px
        "7xl": "clamp(4.5rem, 3rem + 6vw, 7rem)", // 72-112px
      },
      spacing: {
        // 컨테이너 관련 spacing
        "container-sm": "2rem", // 32px (모바일 여백)
        "container-md": "3rem", // 48px (태블릿 여백)
        "container-lg": "5rem", // 80px (데스크탑 여백)
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          lighten: "hsl(var(--primary-lighten))",
          darken: "hsl(var(--primary-darken))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          lighten: "hsl(var(--secondary-lighten))",
          darken: "hsl(var(--secondary-darken))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        error: "hsl(var(--error))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        info: "hsl(var(--info))",
        gray: {
          1: "hsl(var(--gray-1))",
          2: "hsl(var(--gray-2))",
          3: "hsl(var(--gray-3))",
          4: "hsl(var(--gray-4))",
          5: "hsl(var(--gray-5))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
