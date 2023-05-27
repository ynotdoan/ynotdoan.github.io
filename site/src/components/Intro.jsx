import l_icon from "../assets/imgs/linkedin-icon.png"
import g_icon from "../assets/imgs/github-icon.png"
import e_icon from "../assets/imgs/email-icon.png"
import m_icon from "../assets/imgs/man-icon.png"
import resume from "../assets/RESUME.pdf"

function Intro() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-[64rem] p-4">
          <h1 className="border-0 border-b-4 border-solid border-green-500">Hello, nice to meet you!</h1>
          <h2 className="">
            I'm a motivated individual with experience in web development, application design, and artificial intelligence. 
            I'm passionate about developping new skills, contributing in high impact environments, and working through challenges.
          </h2>
        </div>

        <div className="w-[24rem]">
          <table className="m-auto border-spacing-x-4 border-4 border-solid border-green-500">
            <tr>
              <th className="text-center" colSpan={2}><h3>(Click on icons to contact me)</h3></th>
            </tr>
            <tr>
              <td className="w-2/3 text-right"><h3>Download my resume</h3></td>
              <td className="w-1/3 text-left">
                <a target="_blank" href={resume}>
                  <img 
                    src={m_icon}
                    alt="resume"
                  />
                </a>
              </td>
            </tr>

            <tr>
              <td className="w-2/3 text-right"><h3>Check out my Github</h3></td>
              <td className="w-1/3 text-left">
                <a target="_blank" href="https://www.github.com/ynotdoan">
                  <img 
                    src={g_icon}
                    alt="github.com/ynotdoan"
                  />
                </a>
              </td>
            </tr>

            <tr>
              <td className="w-2/3 text-right"><h3>Connect with me on LinkedIn</h3></td>
              <td className="w-1/3 text-left">
                <a target="_blank" href="https://www.linkedin.com/in/ynotdoan">
                  <img 
                    src={l_icon}
                    alt="linkedin.com/in/ynotdoan"
                  />
                </a>
              </td>
            </tr>

            <tr>
              <td className="w-2/3 text-right"><h3>Send me an email</h3></td>
              <td className="w-1/3 text-left">
                <a target="_blank" href="">
                  <img 
                    src={e_icon}
                    alt="ynotdoan@gmail.com"
                  />
                </a>
              </td>
            </tr>
          </table>
        </div>

      </div>
    </>
  )
}

export default Intro
