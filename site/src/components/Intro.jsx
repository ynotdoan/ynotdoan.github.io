import me from "../assets/imgs/me.png"

function Intro() {
  return (
    <div className="flex flex-wrap justify-center my-24">

      <div>
        <img 
          src={me}
          className="rounded-full"
        />
      </div>

      <div className="w-[64rem] m-8">
        <h1 className="border-0 border-b-4 border-solid">Hello, nice to meet you!</h1>
        <h2 className="">
          I'm a motivated individual with experience in web development, application design, and artificial intelligence. 
          I'm enjoy developping new skills, contributing in high impact environments, and working through challenges.
        </h2>
      </div>

    </div>
  )
}

export default Intro
