import { useState, useEffect } from 'react';
import rollerskate from './../assets/images/rollerskate.png';

function Navbar() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [navbarColor, setNavbarColor] = useState("navbar navbar-expand-lg bg-transparent navbar-dark py-0");

  function onScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.body.scrollHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    setScrollPercent(scrollPercentage);
  
    if(scrollTop < clientHeight) {
      setNavbarColor("navbar navbar-expand-lg bg-transparent navbar-dark py-0");
    } else {
      setNavbarColor("navbar navbar-expand-lg bg-transparent navbar-light py-0");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed-top">
      <nav id="navbar" className={navbarColor} >
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img className="float-start mt-1" src={rollerskate} alt="rollerskate"></img>
            <div className="float-end text-center">
              <p className="mt-2 mb-0">Liam Eller</p>
              <p className="fs-6">Software Engineer</p>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0 ">
              <li className="mx-2 nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="mx-2 nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="mx-2 nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="mx-2 nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="progress bg-transparent  my-0">
        <div className="progress-bar bg-danger opacity-50" role="progressbar" aria-valuenow={scrollPercent} aria-valuemin="0" aria-valuemax="100" style={{width: `${scrollPercent}%`}}></div>
      </div>
    </div>
  )
}

export default Navbar;