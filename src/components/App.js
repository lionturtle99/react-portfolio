import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
