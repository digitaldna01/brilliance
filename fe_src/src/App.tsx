import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Service from "@/pages/Service";
import Faq from "@/pages/Faq";
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
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
