import data_json from "../data/data.json"

function Projects() {
  return (
    <div className="relative min-w-screen min-h-screen">
      <h1 className="text-center border-0 border-b-4 border-dashed secondary-theme">SELECTED PROJECTS</h1>
      <div className="flex flex-wrap justify-evenly gap-16">

        {Object.entries(data_json).length > 0 && 
          Object.entries(data_json.proj).map(([k, v]) => {
            return (
              <div key={k} className="bg-gray-200 w-[24rem] h-[16rem] rounded-xl">
                <h2 className="text-center">{v.name}</h2>
              </div>
            )
          })}

      </div>
    </div>
  )
}

export default Projects
