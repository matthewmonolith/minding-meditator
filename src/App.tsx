import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "./pages/Timer";
import Info from "./pages/Info";
import Guide from "./pages/Guide";
import Navbar from "./components/UI/Navbar";
import Container from "./components/UI/Container";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Timer />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/about" element={<Info />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
