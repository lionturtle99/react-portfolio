import closeup from './../assets/images/closeup.jpg';

function About() {
  return (
    <section className="mt-3" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="fw-bold">About Me <a href="https://www.linkedin.com/in/liamellerportland/" className="fs-4 fa fa-linkedin"></a></h1>
            <hr></hr>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center p-5">
            <div>
              <img src={closeup} alt="profile" width="500em"></img>
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="fw-bold">LIAM ELLER</h1>
            <h5 className="text-danger mb-4">Software Engineer</h5>
            <p className="lead">Coming from a background in the service industry, I adapted to become an energetic problem solver and thoughtful communicator. I enjoy the challenge of fast paced, difficult work and learning new systems. I try to incorporate these characteristics in my everyday life as well; To adapt to the struggles of everyday life, to be curious & passionate, and to always strive to grow both personally and professionally.</p> 
            <p className="lead mb-4">I'm originally from a small eco village in the wilderness of Alaska, I moved to Portland, Oregon in April of 2017 following a cycling tour across the Pyrenees mountains. I worked in restaurants for many years and although I liked the people aspect of it, I knew it wasn’t for me. Wishing to change careers I started looking into tech, and the more I researched the more I got excited about the conversations being had around social, racial and gender equity in tech right now. I decided to enroll at Epicodus in January of 2022</p>
            <div className="buttons">
              <a href="assets/resume.pdf" download="liam-eller-resume.pdf" className="btn btn-danger mx-4 my-2">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
