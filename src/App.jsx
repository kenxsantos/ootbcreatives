import Index from "./onepage/Index.jsx";
import { Routes, Route } from "react-router-dom";
import ShowServices from "./pages/ShowServices.jsx";
import ShowCrewmates from "./pages/ShowCrewmates.jsx";
import ShowAcademy from "./pages/ShowAcademy.jsx";
import MeetTheIntern from "./pages/MeetTheInterns.jsx";
import ShowBoardingPass from "./pages/ShowBoardingPass.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="services/:slug" element={<ShowServices />} />
        <Route path="crewmates/:slug" element={<ShowCrewmates />} />
        <Route path="/ootb/academy" element={<ShowAcademy />} />
        <Route
          path="/ootb/academy/meet-the-interns"
          element={<MeetTheIntern />}
        />
        <Route
          path="/ootb/academy/meet-the-interns/:year/:batch/:intern"
          element={<ShowBoardingPass />}
        />
      </Routes>
    </>
  );
}

export default App;
