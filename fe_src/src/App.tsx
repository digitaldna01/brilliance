import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";

/**
 * 메인 앱 컴포넌트
 * - 레이아웃 구조
 * - Navbar (고정 상단)
 * - Home (스크롤 가능한 메인 콘텐츠)
 * - Footer (고정 하단)
 */
function App() {
  return (
    <div className="relative">
      {/* 고정 Navbar */}
      <Navbar />

      {/* 메인 콘텐츠 */}
      <Home />

      {/* 고정 Footer */}
      <Footer />
    </div>
  );
}

export default App;
