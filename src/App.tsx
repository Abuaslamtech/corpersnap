import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Flyer from "./pages/Flyer";
import About from "./pages/About";
import Support from "./pages/Support";
import Auth from "./pages/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/flyer" element={<Flyer />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default App;
