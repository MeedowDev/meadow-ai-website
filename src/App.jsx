import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Journey from "./pages/Journey";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="journey" element={<Journey />} />
          <Route path="contact" element={<Contact />} />

          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
