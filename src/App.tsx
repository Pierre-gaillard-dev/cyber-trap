import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Boss from "./pages/Boss";
import QrCode from "./pages/QrCode";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <main className="h-full flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qr-code" element={<QrCode />} />
          <Route path="/boss" element={<Boss />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Header />
      </BrowserRouter>
    </main>
  );
};

export default App;
