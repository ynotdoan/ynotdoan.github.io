import data from "../data/data.json"

function Experience() {
  return(
    <>
      <div className="relative">
        <h1 className="text-center border-0 border-b-4 secondary-theme border-dashed">PROFESSIONAL EXPERIENCE</h1>
        <div className="w-3/4 m-auto">
          {Object.entries(data).length > 0 && 
            Object.entries(data.exp).map(([key, value]) => {
              return (
                <div key={key}>
                  <h2 className="inline-block">{value.year}</h2>
                  <br />
                  <h2 className="inline">{value.company} | {value.location}</h2>
                  <br />
                  <h2 className="inline">{value.role}</h2>
                  <br />
                </div>
              )
          })}
        </div>
      </div>
    </>
  )
}

export default Experience
