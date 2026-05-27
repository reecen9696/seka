import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { WhatWeDo } from "./pages/WhatWeDo";
import { WhoWeArePage } from "./pages/WhoWeArePage";
import { Work } from "./pages/Work";
import { GetADemo } from "./pages/GetADemo";
import { DesignSystem } from "./pages/DesignSystem";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/get-a-demo" element={<GetADemo />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
