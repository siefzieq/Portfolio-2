import './App.css'
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {

  return (
    <>
      <Header/><br></br>
      <About/><br></br>
      <Projects />
      <Skills/>
      <Contact/>
    </>
  );
}

export default App
