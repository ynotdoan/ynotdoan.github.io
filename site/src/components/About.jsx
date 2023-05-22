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

        <div className="grid grid-cols-2 place-self-center">
          <div className="place-self-center">
            <img 
              src={me}
              alt="tonydoan"
              className="rounded-full"
            />
          </div>
          <div className="place-self-center text-center">
            <h1>TONY DOAN</h1>
            <h2>Software Engineer</h2>
            <h2>(site WIP)</h2>
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
        </div>

        <div className="place-self-center text-left">
          <table className="table-fixed border-separate border-2 border-solid border-black rounded-xl w-full mx-auto">
            <tr>
              <td className="text-center rounded-t-xl bg-gray-200" colSpan={2}>
                <h3>
                  I'm a motivated individual with experience in web development, application design, and artificial intelligence. 
                  I'm passionate about developping new skills, contributing in high impact environments, and working through challenges.
                </h3>
              </td>
            </tr>
            <tr>
              <td className="align-top bg-gray-0">
                <h3>Location</h3>
                <h3>{data.location}</h3>
              </td>
            {/* </tr> */}
            {/* <tr> */}
              <td className="align-top bg-gray-0">
                <h3>Education</h3>
                <h3>{data.education.school} ({data.education.year}) <br />{data.education.degree}</h3>
              </td>
            </tr>
            <tr className="bg-gray-200 col-span-2 text-center">
              <td colSpan={2}>
                <h3>Skills</h3>
              </td>
            </tr>
            <tr className="align-top bg-gray-0">
              <td>
                <h3>Age</h3>
                <h3>{myAge}</h3> 
              </td>
            {/* </tr> */}
            {/* <tr> */}
              <td>
                <h3>Interests</h3> 
              </td>
            </tr>
          </table>
        </div>

      </div>
    </>
  )
}

export default About
