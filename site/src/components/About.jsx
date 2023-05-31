import { useEffect, useState } from "react"
import data from "../data/data.json"

function About() {
  const [myAge, setMyAge] = useState(0)
  const bday = new Date(data.birthday);
  const mstoyr = 24 * 60 * 60 * 1000 * 365

  useEffect(() => {
    var age = Math.abs(new Date() - bday) / mstoyr
    const i = setInterval(() => {
      setMyAge(age)
    }, 1)
    return () => clearInterval(i)
  }, [myAge])

  return (
    <>
      <div className="relative">

        <h1 className="text-center border-0 border-b-4 border-dashed border-green-500">About Me</h1>

        <div className="flex flex-wrap justify-center">

          <div className="w-1/2 border border-solid border-black">
            <h3>Location</h3>
            <h3>{data.location}</h3>
          </div>

          <div className="w-1/2 border border-solid border-black">
            <h3>Age</h3>
            <h3>{myAge}</h3>
          </div>

          <div className="w-1/2 border border-solid border-black">
            <h3>Education</h3>
            <h3>
              {data.education.school} [{data.education.year}] <br />
            </h3>
            <ul>
              {data.education.degree.map((item, i) => {
                return <li><h3 className="inline">{item}</h3></li>
              })}
            </ul>
          </div>

          <div className="w-1/2 border border-solid border-black">
            <h3>Interests</h3> 
            <ul>
              {data.interests.map((item, i) => {
                return <li><h3 className="inline">{item}</h3></li>
              })}
            </ul>
          </div>

        </div>
      </div>

    </>
  )
}

export default About
