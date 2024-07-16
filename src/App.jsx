import NavBar from "./components/NavBar.jsx";
import Index from "./onepage/Index.jsx";
import { Routes, Route } from "react-router-dom";
import ShowServices from "./pages/ShowServices.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="services/:slug" element={<ShowServices />} />
      </Routes>
    </>
  );
}

export default App;
