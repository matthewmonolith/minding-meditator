import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "./pages/Timer";
import Guide from "./pages/Guide";
import Navbar from "./components/UI/Navbar";
import Container from "./components/UI/Container";
import { Provider } from "./context/SoundContext";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Timer />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
