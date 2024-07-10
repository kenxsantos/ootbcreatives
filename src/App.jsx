import NavBar from "./components/NavBar.jsx";
import Index from "./onepage/Index.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
