import betterMerch from './../assets/images/better-merch-logo.jpg';
import hogwarts from './../assets/images/hogwarts.jpg';
import api from './../assets/images/Api.png';

function Projects() {
  return (
    <section className="mt-3" id="projects">
      <div className="container my-5 py-5">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="fw-bold">Projects <a href="https://github.com/lionturtle99" className="fa fa-github mx-2"></a></h1>
            <hr></hr>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-4">
              <a className="text-center" href="https://github.com/lionturtle99/Better-Merch---Roller-Skate-e-Commerce"><img src={betterMerch} alt="hops wearing a crown and glasses"></img></a>
              <div className="card-body">
                <h3 className="card-title text-center">Better Merch</h3>
                <p className="card-text text-center">
                  My Epicodus capstone project. A fully functional e-Commerce website for local artists to sell more modern roller skate merchandise than what's currently available on a single platform.
                </p>
                  <p className="card-text mb-0">Main technologies used:</p>
                  <ul className="card-text">
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Firebase</li>
                    <li>Stripe</li>
                    <li>NodeJS</li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 text-center">
              <a href="https://github.com/lionturtle99/Hogwarts-School-of-Magic"><img src={hogwarts} alt="castle with with a lake and boats"></img></a>
              <div className="card-body">
                <h3 className="card-title">Hogwarts School of Magic</h3>
                <p className="card-text">
                  C# MVC team project. I was responsible for implementing AJAX, Bootstrap 5 and .NET Identity with LINQ to communicate with MySQL database.
                </p>
                  <p className="card-text">
                    You can view<a className="text-decoration-none" href="http://hogwarts.dlinds.com:6001"> the live site </a>to see what house you belong in.
                  </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4">
              <a href="https://github.com/lionturtle99/currency-exchange-API-week"><img src={api} alt="application programming interface diagram"></img></a>
              <div className="card-body text-center">
                <h3 className="card-title">Animal Shelter API</h3>
                <p className="card-text">
                  An API that functions as a animal shelter website. It utilizes RESTful principles, version control, Cross-Origin Resource Sharing, and Swagger. The user is able to see the in-use version of the API when using Postman.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;