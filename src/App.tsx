import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "./pages/Timer";
import Info from "./pages/Info";
import Guide from "./pages/Guide";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
