import About from './components/About'
import Experience from './components/Experience'
import Header from './components/Header'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import "./index.css"

function App() {
  return (
    <>
      <div className="primary-theme">
        <Navbar />
        <Header />
        <Intro />
        <Projects />
        <Experience />
        <About />
      </div>
    </>
  )
}

export default App
