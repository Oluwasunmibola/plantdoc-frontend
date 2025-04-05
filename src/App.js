import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage  from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
  );
};

export default App;
