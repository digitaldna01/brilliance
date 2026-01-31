/**
 * 하단 푸터
 * - 회사 정보
 * - 연락처 (한국, 홍콩 오피스)
 * - 영업 시간
 * - 법적 정보 링크
 */
export default function Footer() {
  return (
    <footer className="bg-primary snap-start py-12 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 회사 정보 */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Brilliance</h3>
            <p className="text-sm text-gray-300">
              Your trusted partner for innovative solutions.
            </p>
          </div>

          {/* 한국 오피스 */}
          <div>
            <h4 className="mb-4 font-semibold">Korea Office</h4>
            <p className="text-sm text-gray-300">
              8180 (City Plaza), 8F, 191 Dongbeakjungang-Ro, Giheung-gu
              Yongin-Si, Gyeonggi-do, South Korea
              <br />
              <br />
              Business Hours: 9:00 - 18:00 KST
            </p>
          </div>

          {/* 홍콩 오피스 */}
          <div>
            <h4 className="mb-4 font-semibold">Hong Kong Office</h4>
            <p className="mb-4 text-sm text-gray-300">
              Suite 1003, 10/F Tower 2, China Hong Kong City 33 Canton Road,
              Tsim Sha Tsui, Hong Kong
              <br />
              <br />
              Business Hours: 9:00 - 18:00 HKT
            </p>
            <h4 className="mb-4 font-semibold">TEL +852 2155 2670</h4>
            <h4 className="mb-4 font-semibold">FAX +852 3585 0075</h4>
          </div>

          {/* 링크 */}
          <div>
            <h4 className="mb-4 font-semibold">Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-primary-lighten transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-primary-lighten transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary-lighten transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-8 border-gray-700 pt-6 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Brilliance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
