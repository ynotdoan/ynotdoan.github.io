import data_json from "../data/data"
import resume from "../assets/RESUME.pdf"

function Experience() {
  return(
    <div className="relative min-w-screen min-h-screen">
      <h1 className="text-center border-0 border-b-4 border-dashed">PROFESSIONAL EXPERIENCE</h1>

      {/* Resume link */}
      <div className="text-center">
        <a href={resume} target="_blank">
          <button className="rounded-full w-56 h-56 shadow-[0_35px_60px_-15px_rgba(255,0,0,0.75)]"><h1>View my resume</h1></button>
        </a>
      </div>

      <div className="flex flex-col md:grid grid-cols-12">
        {Object.entries(data_json[0]).length > 0 && 
          Object.entries(data_json[0].exp).map(([key, value]) => {
            return (
              <div key={key} className="flex md:contents">
                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                  <div className="h-full w-12 flex items-center justify-center">
                    <div className="h-full w-2 bg-red-500 pointer-events-none"></div>
                  </div>

                  <div className="w-12 h-12 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                    {/* <i className="fas fa-check-circle text-white" /> */}
                  </div>
                </div>

                <div className="bg-red-500/25 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-center"> 
                  <img src={value.logo} />
                  <h2 className="font-semibold text-lg mb-1">{value.year} | {value.company}</h2>
                  <p className="leading-tight">{value.role}</p>
                </div>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default Experience
