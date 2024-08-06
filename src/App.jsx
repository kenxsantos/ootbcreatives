import NavBar from "./components/NavBar.jsx";
import Index from "./onepage/Index.jsx";
import { Routes, Route } from "react-router-dom";
import ShowServices from "./pages/ShowServices.jsx";
import ShowCrewmates from "./pages/ShowCrewmates.jsx";
import CrewmatesCard from "./components/CrewmatesCard.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="services/:slug" element={<ShowServices />} />
        <Route path="crewmates/:slug" element={<ShowCrewmates />} />
      </Routes>
    </>
  );
}

export default App;
