import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="h-full flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Header />
      </BrowserRouter>
    </main>
  );
};

export default App;
