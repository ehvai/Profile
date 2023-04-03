import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import About from "./About/About";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
