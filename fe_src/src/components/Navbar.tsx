import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, Transition } from "@headlessui/react";
import {
  Mail,
  Globe,
  LogOut,
  Menu as MenuIcon,
  X,
  CircleUserRound,
} from "lucide-react";
import { Fragment } from "react";

/**
 * 고정 상단 네비게이션 바
 * - 로고
 * - 메뉴 링크
 * - Contact 버튼
 * - 스크롤 시 배경 투명도 변경
 */

type NavbarTheme = "dark" | "light" | "primary";

interface NavbarProps {
  theme?: NavbarTheme;
}

export default function Navbar({ theme = "light" }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // TODO: 실제 로그인 상태 연동
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language.toUpperCase()
  );
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollYRef = useRef(0);
  const scrollIdleTimeoutRef = useRef<number | null>(null);

  // 스크롤 임계값 상수
  const SCROLL_THRESHOLD = 100;
  const SCROLL_BACKGROUND_THRESHOLD = 20;
  const NAVBAR_HIDE_DELAY = 1500;

  // 현재 경로
  const currentPath = location.pathname;
  const isHomePage = currentPath === "/";

  // 언어 변경 함수
  const changeLanguage = (langCode: string) => {
    const lang = langCode.toLowerCase();
    localStorage.setItem("language", lang);
    window.location.reload();
  };
  // 스크롤 방향 감지 및 배경 변경
  useEffect(() => {
    // 타이머 취소 헬퍼 함수
    const clearScrollTimer = () => {
      if (scrollIdleTimeoutRef.current) {
        window.clearTimeout(scrollIdleTimeoutRef.current);
        scrollIdleTimeoutRef.current = null;
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      if (!isHomePage) {
        // Partners 등 Home이 아닌 페이지
        const isScrollingUp = currentScrollY < lastScrollY;
        const isScrollingDown = currentScrollY > lastScrollY;
        const isNearTop = currentScrollY < SCROLL_THRESHOLD;

        // 위로 스크롤 (상단 아님) → Navbar + 배경 표시
        if (isScrollingUp && !isNearTop) {
          setShowNavbar(true);
          setIsScrolled(true);

          clearScrollTimer();
          scrollIdleTimeoutRef.current = window.setTimeout(() => {
            setShowNavbar(false);
            setIsScrolled(false);
          }, NAVBAR_HIDE_DELAY);
        }
        // 상단 근처 → Navbar만 표시 (배경 없음)
        else if (isNearTop) {
          setShowNavbar(true);
          setIsScrolled(false);
          clearScrollTimer();
        }
        // 아래로 스크롤 → Navbar 즉시 숨김
        else if (isScrollingDown && !isNearTop) {
          setShowNavbar(false);
          setIsScrolled(false);
          setIsMobileMenuOpen(false);
          clearScrollTimer();
        }
      } else {
        // Home 페이지
        setIsScrolled(currentScrollY > SCROLL_BACKGROUND_THRESHOLD);

        if (currentScrollY < lastScrollY || currentScrollY < SCROLL_THRESHOLD) {
          setShowNavbar(true);
        } else if (
          currentScrollY > lastScrollY &&
          currentScrollY > SCROLL_THRESHOLD
        ) {
          setShowNavbar(false);
          setIsMobileMenuOpen(false);
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    // Home 페이지의 커스텀 스크롤 이벤트 처리
    const handleHomeScroll = (e: Event) => {
      const customEvent = e as CustomEvent<{ scrollY: number }>;
      const currentScrollY = customEvent.detail.scrollY;
      const lastScrollY = lastScrollYRef.current;

      setIsScrolled(currentScrollY > SCROLL_BACKGROUND_THRESHOLD);

      if (currentScrollY < lastScrollY || currentScrollY < SCROLL_THRESHOLD) {
        setShowNavbar(true);
      } else if (
        currentScrollY > lastScrollY &&
        currentScrollY > SCROLL_THRESHOLD
      ) {
        setShowNavbar(false);
        setIsMobileMenuOpen(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    // 섹션 도착 이벤트 (Home 페이지 스크롤 멈춤)
    const handleSectionArrived = () => {
      setShowNavbar(true);
      setIsScrolled(false);
    };

    // 일반 window 스크롤과 커스텀 이벤트 모두 감지
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("homeScroll", handleHomeScroll);
    window.addEventListener("sectionArrived", handleSectionArrived);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("homeScroll", handleHomeScroll);
      window.removeEventListener("sectionArrived", handleSectionArrived);
      if (scrollIdleTimeoutRef.current) {
        window.clearTimeout(scrollIdleTimeoutRef.current);
      }
    };
  }, [isHomePage]);

  // 로그인 여부에 따른 메뉴 항목
  const menuItems = isLoggedIn
    ? [
        {
          label: t("nav.home"),
          href: "/",
          sectionId: "home",
        },
        { label: t("nav.about"), href: "/about", sectionId: "about" },
        { label: t("nav.service"), href: "/service", sectionId: "service" },
        { label: t("nav.partners"), href: "/partners", sectionId: "partners" },
        { label: t("nav.faq"), href: "/faq", sectionId: "faq" },
      ]
    : [
        {
          label: t("nav.home"),
          href: "/",
          sectionId: "home",
        },
        { label: t("nav.partners"), href: "/partners", sectionId: "partners" },
      ];

  const languages = [
    { code: "EN", label: "English" },
    { code: "KO", label: "한국어" },
  ];

  // Theme별 스타일 설정
  const themeStyles = {
    dark: {
      scrolled: "bg-black/20 backdrop-blur-md shadow-lg",
      text: "text-white",
      activeText: "text-primary-darken",
      hoverText: "hover:text-primary-darken",
      style: undefined,
    },
    primary: {
      scrolled: "backdrop-blur-sm shadow-md",
      text: "text-white",
      activeText: "text-black hover:text-black font-semibold",
      hoverText: "hover:text-gray-500",
      style: { backgroundColor: "hsl(210 89% 27% / 0.7)" },
    },
    light: {
      scrolled: "backdrop-blur-sm shadow-md",
      text: "text-white",
      activeText: "text-black font-semibold",
      hoverText: "hover:text-gray-800",
      style: undefined,
    },
  } as const;

  const resolvedTheme = currentPath === "/partners" ? "dark" : theme;
  const currentTheme = themeStyles[resolvedTheme];
  const textColor = isScrolled ? currentTheme.text : "text-white";

  // Navbar hover 핸들러
  const handleNavbarMouseEnter = () => {
    // hover 중일 때 타이머 취소 (숨기지 않음)
    if (scrollIdleTimeoutRef.current) {
      window.clearTimeout(scrollIdleTimeoutRef.current);
      scrollIdleTimeoutRef.current = null;
    }
  };

  const handleNavbarMouseLeave = () => {
    // hover 끝나면 타이머 재시작
    if (!isHomePage && showNavbar) {
      scrollIdleTimeoutRef.current = window.setTimeout(() => {
        setShowNavbar(false);
        setIsScrolled(false);
      }, NAVBAR_HIDE_DELAY);
    }
  };

  return (
    <nav
      onMouseEnter={handleNavbarMouseEnter}
      onMouseLeave={handleNavbarMouseLeave}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? currentTheme.scrolled : "bg-transparent"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      style={isScrolled && currentTheme.style ? currentTheme.style : undefined}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <div className={`text-2xl font-bold transition-colors ${textColor}`}>
            Brilliance
          </div>

          {/* 데스크탑 메뉴 */}
          <div className="hidden items-center gap-6 md:flex">
            {menuItems.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? `${currentTheme.activeText} font-semibold`
                      : textColor
                  } ${currentTheme.hoverText}`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* 우측 아이콘 그룹 */}
          <div className="hidden items-center gap-4 md:flex">
            {/* Contact */}
            <a
              href="#contact"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${textColor} ${currentTheme.hoverText}`}
            >
              <Mail size={18} />
              <span>Contact</span>
            </a>

            {/* 언어 선택 드롭다운 */}
            <Menu as="div" className="relative">
              <Menu.Button
                className={`hover:text-primary-darken flex items-center gap-2 text-sm font-medium transition-colors ${textColor}`}
              >
                <Globe size={18} />
                <span>{selectedLanguage}</span>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <Menu.Item key={lang.code}>
                        {({ active }) => (
                          <button
                            onClick={() => changeLanguage(lang.code)}
                            className={`${active ? "bg-gray-100" : ""} ${
                              selectedLanguage === lang.code
                                ? "text-primary font-semibold"
                                : "text-secondary-2"
                            } block w-full px-4 py-2 text-left text-sm`}
                          >
                            {lang.label}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* 로그인/로그아웃 아이콘 */}
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className={`hover:text-primary-darken flex items-center gap-2 text-sm font-medium transition-colors ${textColor}`}
              title={isLoggedIn ? "로그아웃" : "로그인"}
            >
              {isLoggedIn ? (
                <LogOut size={24} />
              ) : (
                <CircleUserRound size={24} />
              )}
            </button>
          </div>

          {/* 모바일 햄버거 메뉴 */}
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-secondary-2"
                    } hover:text-primary-darken`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
              <hr className="border-gray-200" />
              <a
                href="#contact"
                className="text-secondary-2 hover:text-primary-darken flex items-center gap-2 text-sm font-medium"
              >
                <Mail size={18} />
                <span>Contact</span>
              </a>
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-secondary-2" />
                <select
                  value={selectedLanguage}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="text-secondary-2 rounded border border-gray-300 px-2 py-1 text-sm"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                className="text-secondary-2 hover:text-primary-darken flex items-center gap-2 text-sm font-medium"
              >
                {isLoggedIn ? (
                  <LogOut size={18} />
                ) : (
                  <CircleUserRound size={18} />
                )}
                <span>{isLoggedIn ? "로그아웃" : "로그인"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
