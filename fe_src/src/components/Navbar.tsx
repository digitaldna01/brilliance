import { useState } from "react";

/**
 * 고정 상단 네비게이션 바
 * - 로고
 * - 메뉴 링크
 * - Contact 버튼
 * - 스크롤 시 배경 투명도 변경 (선택적)
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // TODO: 스크롤 이벤트 리스너 추가

  return (
    <nav className="fixed top-0 right-0 left-0 z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <div className="text-xl font-bold">Brilliance</div>

          {/* 메뉴 */}
          <div className="hidden items-center gap-8 md:flex">
            {/* TODO: 메뉴 아이템 추가 */}
          </div>

          {/* Contact 버튼 */}
          <div>{/* TODO: Contact 버튼 */}</div>
        </div>
      </div>
    </nav>
  );
}
