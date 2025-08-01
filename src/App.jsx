import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Wordle from "./wordle/Wordle";
import Home from "./Home";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/wordle" element={<Wordle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  const isProd = import.meta.env.MODE === "production";
  return (
    <Router basename={isProd ? "/vite-sandbox/" : undefined}>
      <nav className="bg-blue-600 text-white p-4 flex items-center">
        <Link className="flex justify-start" to="/">vite-sandbox</Link>
        <div className="justify-end flex items-center gap-4 ml-auto">
          <Link to="/">Home</Link> | 
          <Link to="/wordle">Wordle</Link>
        </div>
      </nav>

      <AppRoutes />
    </Router>
  );
}
