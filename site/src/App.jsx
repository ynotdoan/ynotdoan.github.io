import Experience from './components/Experience'
import Header from './components/Header'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import "./index.css"

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Header />
        <Intro />
        <Projects />
        <Experience />
      </div>
    </>
  )
}

export default App
