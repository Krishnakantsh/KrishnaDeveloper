import "./App.css";
import Header from "./Components/Header/Header.jsx";
import HeroSection from "./Components/heroSection/HeroSection.jsx";
import WhatDo from "./Components/Services/WhatDo.jsx";
import "./Components/MainCss/Maincsss.css";
import Projects from "./Components/Projects/Projects.jsx";
import Contacts from "./Components/Contact/Contacts.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Project1 from "./Components/CssDesigns/Project1/Project1.jsx";
import Project2 from "./Components/CssDesigns/Project2/Project2.jsx";
import Project3 from "./Components/CssDesigns/Project3/Project3.jsx";
import CssDesignsArea from "./Components/CssDesigns/CssDeisgnsArea/CssDesignsArea.jsx";
import CodeViewer from "./Components/CodeViewer/CodeViewer.jsx";
import Alert from "./Components/Alert/Alert.jsx";
import { useRef } from "react";
import LatestWork from "./Components/LatestWork.jsx";

function App() {
  // bookmarks
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const latestRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Alert />
      <Header
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        latestRef={latestRef}
      />
      <section ref={heroRef} >
        <HeroSection />
      </section>
      <WhatDo />
      <section ref={projectsRef}>
        <Projects />
      </section>
      <Skills />
      <CssDesignsArea />
      <section ref={contactRef} >
        <Contacts />
      </section>
      <section  ref={latestRef} >
        <LatestWork />
      </section>
      <Footer />
    </div>
  );
}

export default App;
