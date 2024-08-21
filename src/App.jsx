import Index from "./onepage/Index.jsx";
import { Routes, Route } from "react-router-dom";
import ShowServices from "./pages/ShowServices.jsx";
import ShowCrewmates from "./pages/ShowCrewmates.jsx";
import ShowAcademy from "./pages/ShowAcademy.jsx";
import MeetTheIntern from "./pages/MeetTheInterns.jsx";
import ShowBoardingPass from "./pages/ShowBoardingPass.jsx";
import ShowCareers from "./pages/ShowCareers.jsx";
import CareerDetails from "./components/CareerDetails.jsx";
import ShowResources from "./pages/ShowResources.jsx";
import ResourcesDetails from "./components/ResourcesDetails.jsx";
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
        <Route path="/ootb/careers" element={<ShowCareers />} />
        <Route path="/ootb/careers/:slug" element={<CareerDetails />} />
        <Route path="/ootb/resources" element={<ShowResources />} />
        <Route path="/ootb/resources/:slug" element={<ResourcesDetails />} />
      </Routes>
    </>
  );
}

export default App;
