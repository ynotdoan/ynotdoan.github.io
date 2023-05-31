import data from "../data/data.json"

function Projects() {
  return (
    <>
      <div className="relative">
        <h1 className="text-center border-0 border-b-4 border-dashed border-green-500">SELECTED PROJECTS</h1>
        <div className="flex flex-wrap justify-evenly gap-16">

          {Object.entries(data).length > 0 && 
            Object.entries(data.proj).map(([k, v]) => {
              return (
                <div key={k} className="bg-gray-200 w-[24rem] h-[16rem] rounded-xl">
                  <h2 className="text-center">{v.name}</h2>
                </div>
              )
            })}

        </div>
      </div>
    </>
  )
}

export default Projects
