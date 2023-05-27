import { useEffect, useState } from "react"
import data from "../data/data.json"
import l_icon from "../assets/linkedin-icon.png"
import g_icon from "../assets/github-icon.png"
import e_icon from "../assets/email-icon.png"
import me from "../assets/me.png"

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
      <div className="grid grid-cols-2 bg-gray-rgba rounded-xl p-8">

        <div className="grid grid-cols-2 mx-24">
          <div className="justify-self-center">
            <img 
              src={me}
              alt="tonydoan"
              className="rounded-full"
            />
          </div>
          <div className="place-self-center text-center">
            <h1>TONY DOAN</h1>
            <h2>Software Engineer</h2>
            <a href="" className="p-2">
              <img 
                src={e_icon}
                alt="ynotdoan@gmail.com"
              />
            </a>
            <a target="_blank" href="https://www.github.com/ynotdoan" className="p-2">
              <img 
                src={g_icon}
                alt="github.com/ynotdoan"
              />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/ynotdoan" className="p-2">
              <img 
                src={l_icon}
                alt="linkedin.com/in/ynotdoan"
              />
            </a>
          </div>

          <h3 className="col-span-2 text-center">
            I'm a motivated individual with experience in web development, application design, and artificial intelligence. 
            I'm passionate about developping new skills, contributing in high impact environments, and working through challenges.
          </h3> 
        </div>

        <div className="place-self-center text-left">
          <table className="table-fixed border-separate border-2 border-solid border-black rounded-xl w-full">
            <tr>
              <td className="align-top bg-gray-0 w-1/3">
                <h3>Location</h3>
                <h3>{data.location}</h3>
              </td>
              <td className="align-top bg-gray-0 w-2/3">
                <h3>Education</h3>
                <h3>
                  {data.education.school} [{data.education.year}] <br />
                </h3>
                <ul>
                  {data.education.degree.map((item, i) => {
                    return <li><h3 className="inline">{item}</h3></li>
                  })}
                </ul>
              </td>
            </tr>
            <tr>
              <td className="align-top bg-gray-0 w-1/3">
                <h3>Age</h3>
                <h3>{myAge}</h3> 
              </td>
              <td className="align-top bg-gray-0 w-2/3">
                <h3>Interests</h3> 
                <ul>
                  {data.interests.map((item, i) => {
                    return <li><h3 className="inline">{item}</h3></li>
                  })}
                </ul>

              </td>
            </tr>
          </table>
        </div>

      </div>
    </>
  )
}

export default About
