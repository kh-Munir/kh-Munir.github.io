import About from "./components/navbar/About/About"
import Experience from "./components/navbar/Experience/Experience"
import Footer from "./components/navbar/Footer/Footer"
import Home from "./components/navbar/Home/Home"
import Navbar from "./components/navbar/navbar"
import Projects from "./components/navbar/Projects/Projects"

function App() {
  
  return (
    <div className="bg-[#EFF3EA] h-auto  w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
