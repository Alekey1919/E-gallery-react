import useApp from "./useApp";
import Home from "./pages/home/Home";
import Game from "./pages/game/Game";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gamepad from "./assets/gamepad.png";

function App() {
  const { isOpen, handleNavbar, closeNavbar } = useApp();

  return (
    <BrowserRouter>
      <div className="App">
        <button
          onClick={handleNavbar}
          className={`gamepad ${isOpen && "active"}`}
        >
          <img src={gamepad} alt="Games" />
        </button>
        <Navbar isOpen={isOpen} closeNavbar={closeNavbar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:game" element={<Game />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
