import React from "react"
import Navbar from "./components/Navbar"
import OverView from "./components/OverView"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Service from "./components/Services"
import Project from "./components/Project"


const App :React.FC = ()=> {

  return (

   <div>
     <Navbar />
     <OverView />
     <Team />
     <Service/>
     <Project />
     <Contact />
     <Footer/>
   </div>

  )
}

export default App
