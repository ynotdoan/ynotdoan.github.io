import data from "../data/data.json"

function Projects() {
  return (
    <>
      <h1>Selected Projects</h1>
      <div>
        {Object.entries(data).length > 0 && 
          Object.entries(data.proj).map(([key, value]) => {
            return (
              <div key={key}>
                <h3 className="inline-block">{value.name}</h3>
                <br />
                <h3 className="inline">{value.tools}</h3>
                <br />
                <h3 className="inline">{value.desc}</h3>
                <br />
              </div>
            )
        })}
      </div>
    </>
  )
}

export default Projects
