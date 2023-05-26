import bg_header from "../assets/header.png"
import me from "../assets/me.png"
import l_icon from "../assets/linkedin-icon.png"
import g_icon from "../assets/github-icon.png"
import e_icon from "../assets/email-icon.png"

function Header() {
  return (
    <>
      <div className="relative text-center w-full">

        {/* BACKGROUND  */}
        <div className="absolute w-full overflow-hidden border-0 border-b-8 border-solid border-green-500">
          <img 
            src={bg_header}
            alt="header-bg"
            className="opacity-1"
          />
        </div>

        <div className="flex flex-wrap h-96 items-center justify-center">

          {/* NAME AND ROLE */}
          <div className="z-10 text-white text-xl px-4">
            <h1 className="inline-block">Tony Doan</h1> <br />
            <h2 className="inline border-0 border-b-4 border-solid border-green-500">Software Engineer</h2>
          </div>

          {/* PROFILE PIC */}
          <div className="z-10">
            <img 
              src={me}
              alt="header-img"
              className="w-2/3 rounded-full border-4 border-solid border-green-500"
            />
          </div>
          
        </div>

      </div>
    </>
  )
}

export default Header
