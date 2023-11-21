import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import ResumePage from './components/ResumePage.jsx';
import ResumeButton from './components/ResumeButton';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/button" element={<ResumeButton />} />
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
