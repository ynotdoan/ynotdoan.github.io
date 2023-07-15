import data from "../data/data.json"
import resume from "../assets/RESUME.pdf"

function Experience() {
  return(
    <>
      <div className="relative min-w-screen min-h-screen">
        <h1 className="text-center border-0 border-b-4 border-dashed">PROFESSIONAL EXPERIENCE</h1>

        {/* Resume link */}
        <div className="text-center">
          <a href={resume} target="_blank">
            <button><h2>View my resume</h2></button>
          </a>
        </div>

        <p className=" w-1/2 min-h-screen left-0 my-6 p-0 border-0 border-r-4 border-dashed border-red-500 z-0"></p>

        <div className="w-4/5 text-center mt-[-100vh] z-1">
          {Object.entries(data).length > 0 && 
            Object.entries(data.exp).map(([key, value]) => {
              return (
                <div key={key}>
                  <h2 className="w-1/4 ml-auto right-0 text-left border-0 border-b-4 border-red-500 border-solid">{value.year}</h2>
                  <div className="bg-slate-300 opacity-75 rounded-xl">
                    <h2 className="text-center opacity-100">{value.company} | {value.location}</h2>
                    <br />
                    <h2 className="text-center">{value.role}</h2>
                    <br />
                  </div>
                </div>
              )
          })}
        </div>
      </div>
    </>
  )
}

export default Experience
