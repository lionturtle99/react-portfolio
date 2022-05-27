function Home() {
  return (
    <section>
      <div className="home-bg-img">
        <div className="home">
          <div className="container">
            <div className="row">
              <div className="col-md-1">
              </div>
              <div className="col-md-11">
                <h1 className="display fw-bold"><span className="text-light">LIAM</span> <br></br>ELLER</h1>
                <h3 className="text-danger">Software Engineer</h3>
                <div className="buttons">
                  <a href="#contact" className="btn btn-danger mx-4 my-2">Contact me</a>
                  <a href="#about" className="btn btn-outline-danger mx-4 my-2">About</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;