import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage  from "./pages/ContactPage";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </Router>
  );
};

export default App;
