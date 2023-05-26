function Navbar() {
  return (
    <>
      <div className="z-20 sticky top-0 flex justify-between bg-white p-2 border-0 border-b-8 border-solid border-green-500">

        <div>
          <h1 className="inline">TONY DOAN</h1>
        </div>

        <div>
          <h2 className="inline"><a href="">Projects</a> :: </h2>
          <h2 className="inline"><a href="">Experience</a> :: </h2>
          <h2 className="inline"><a href="">About</a> </h2>
        </div>

      </div>

    </>
  )
}

export default Navbar
