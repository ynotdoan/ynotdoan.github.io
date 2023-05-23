import data from "../data/data.json"

function Experience() {
  return(
    <>
      <h1>Professional Experience</h1>
      <div>
        {Object.entries(data).length > 0 && 
          Object.entries(data.exp).map(([key, value]) => {
            return (
              <div key={key}>
                <h3 className="inline-block">{value.year}</h3>
                <br />
                <h3 className="inline">{value.company} | {value.location}</h3>
                <br />
                <h3 className="inline">{value.role}</h3>
                <br />
              </div>
            )
        })}
      </div>
    </>
  )
}

export default Experience
