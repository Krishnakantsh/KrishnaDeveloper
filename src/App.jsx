
import './App.css'
import Header from './Components/Header/Header.jsx'
import HeroSection from './Components/heroSection/HeroSection.jsx'
import WhatDo from './Components/Services/WhatDo.jsx'
import './Components/MainCss/Maincsss.css'
import Projects from './Components/Projects/Projects.jsx'
import Contacts from './Components/Contact/Contacts.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Project1 from './Components/CssDesigns/Project1/Project1.jsx'
import Project2 from './Components/CssDesigns/Project2/Project2.jsx'
import Project3 from './Components/CssDesigns/Project3/Project3.jsx'
import CssDesignsArea from './Components/CssDesigns/CssDeisgnsArea/CssDesignsArea.jsx'
import CodeViewer from './Components/CodeViewer/CodeViewer.jsx'


function App() {

  return (
      <div > 
           <Header/>
           <HeroSection/>
           <WhatDo/>
           <Projects/>
           <Skills/>
          <CssDesignsArea/>
          
           <Contacts/>
           <Footer/>
      </div>
  )
}

export default App
