import linkedin from "../assets/imgs/linkedin-icon.png"
import github from "../assets/imgs/github-icon.png"
import email from "../assets/imgs/email-icon.png"
import arrow from "../assets/imgs/arrow-icon.png"
import resume from "../assets/RESUME.pdf"

function Header() {
  return (
    <div className="flex flex-col justify-around items-center w-screen h-screen overflow-hidden">

      <div className="text-center">
        <h1 className="inline text-5xl">Check out my card...</h1>
      </div>

      {/* Card */}
      <div className="flex flex-wrap justify-between items- text-center bg-[#F9F6EE] w-1/2 max-w-[900px] min-w-[300px] aspect-[5/3] drop-shadow-2xl">
        {/* Contact link */}
        <div className="mt-8 ml-6">
          <a href="https://www.linkedin.com/in/ynotdoan/" target="_blank">
            <img src={linkedin} className="px-1" />
          </a>
          <a href="https://github.com/ynotdoan" target="_blank">
            <img src={github} className="px-1" />
          </a>
          <a href="">
            <img src={email} className="px-1" />
          </a>
        </div>

        {/* Site name */}
        <div className="mt-8 mr-6">
          <h2 className="inline">ynotdoan</h2>
        </div>

        {/* Name */}
        <div className="w-full">
          <h1 className="">Tony DOAN</h1>
          <h2 className="">Software Engineer</h2>
        </div>
        
        {/* Nav links */}
        <div className="w-full">
          <h2>
            <a>Projects</a> | <a>Experience</a> | <a>About</a>
          </h2>
        </div>
      </div>

      {/* Resume link */}
      <div>
        <a href={resume} target="_blank">
          <button><h2>View my resume</h2></button>
        </a>
      </div>

      <div className="animate-bounce">
        <img src={arrow} />
      </div>

    </div>
  )
}

export default Header
