import bg_header from "../assets/imgs/header.png"
import me from "../assets/imgs/me.png"

function Header() {
  return (
    <>
      <div className="relative text-center w-full h-[24rem]">

        {/* BACKGROUND  */}
        <div className="absolute w-full h-[23.5rem] overflow-hidden bg-green-500">
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
