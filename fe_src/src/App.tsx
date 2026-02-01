import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Partners from "@/pages/Partners";

/**
 * 메인 앱 컴포넌트
 * - 레이아웃 구조
 * - Navbar (고정 상단)
 * - 라우팅 (Home, Partners 등)
 */
function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        {/* 고정 Navbar */}
        <Navbar />

        {/* 라우팅 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
