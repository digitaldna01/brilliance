import { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // TODO: 실제 로그인 상태 연동
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language.toUpperCase()
  );
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 현재 경로 가져오기
  const currentPath = window.location.pathname;

  // 언어 변경 함수
  const changeLanguage = async (langCode: string) => {
    const lang = langCode.toLowerCase();
    await i18n.changeLanguage(lang);
    setSelectedLanguage(langCode);
    localStorage.setItem("language", lang);
  };
  // 스크롤 방향 감지 및 배경 변경
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 스크롤 위치가 20px 이상일 때 배경 불투명
      setIsScrolled(currentScrollY > 20);

      // 스크롤 방향 감지
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // 위로 스크롤 또는 상단 근처 → Navbar 표시
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 아래로 스크롤 → Navbar 숨김
        setShowNavbar(false);
        setIsMobileMenuOpen(false); // 모바일 메뉴도 닫기
      }

      setLastScrollY(currentScrollY);
    };

    // Home 페이지의 커스텀 스크롤 이벤트 처리
    const handleHomeScroll = (e: Event) => {
      const customEvent = e as CustomEvent<{ scrollY: number }>;
      const currentScrollY = customEvent.detail.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
        setIsMobileMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    // 섹션 도착 이벤트 처리 (스크롤이 멈췄을 때)
    const handleSectionArrived = () => {
      setShowNavbar(true);
      setIsScrolled(false); // 모든 섹션 도착 시 배경 투명
    };

    // 일반 window 스크롤과 커스텀 이벤트 모두 감지
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("homeScroll", handleHomeScroll);
    window.addEventListener("sectionArrived", handleSectionArrived);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("homeScroll", handleHomeScroll);
      window.removeEventListener("sectionArrived", handleSectionArrived);
    };
  }, [lastScrollY]);

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
      scrolled: "bg-black/80 backdrop-blur-md shadow-lg",
      text: "text-white",
      style: undefined,
    },
    primary: {
      scrolled: "backdrop-blur-sm shadow-md",
      text: "text-white",
      style: { backgroundColor: "hsl(210 89% 27% / 0.7)" }, // CSS 변수 직접 사용
    },
    light: {
      scrolled: "backdrop-blur-sm shadow-md",
      text: "text-white",
      style: undefined,
    },
  };

  const currentTheme = themeStyles[theme];
  const textColor = isScrolled ? currentTheme.text : "text-white";

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
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
                  className={`text-sm font-medium transition-all duration-500 ${
                    isActive ? "text-primary-darken font-semibold" : textColor
                  } hover:text-primary-darken`}
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
              className={`hover:text-primary-darken flex items-center gap-2 text-sm font-medium transition-colors ${textColor}`}
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
