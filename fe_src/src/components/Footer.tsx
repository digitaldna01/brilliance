/**
 * 고정 하단 푸터
 * - 회사 정보
 * - 연락처 (한국, 홍콩 오피스)
 * - 영업 시간
 * - 소셜 미디어 링크
 * - 법적 정보 링크
 */
export default function Footer() {
  return (
    <footer className="bg-primary fixed right-0 bottom-0 left-0 z-40 text-white">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* 회사 정보 */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Brilliance</h3>
            {/* TODO: 소셜 미디어 아이콘 */}
          </div>

          {/* 오피스 정보 */}
          <div>
            <h4 className="mb-2 font-bold">Company</h4>
            {/* TODO: 한국/홍콩 오피스 정보 */}
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="mb-2 font-bold">Contact Us</h4>
            {/* TODO: 연락처 정보 */}
          </div>
        </div>

        {/* 하단 법적 정보 */}
        <div className="border-primary-lighten mt-8 border-t pt-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">© 2026 Brilliance. All rights reserved.</p>
            <div className="flex gap-4 text-sm">
              {/* TODO: Privacy Policy, Terms of Use 링크 */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
