import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

// function scrollProgress() {
//   const scrollTop = document.documentElement.scrollTop;
//   const clientHeight = document.documentElement.clientHeight;
//   const scrollHeight = document.body.scrollHeight;
//   const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
//   const progressBar = document.querySelector(".progress-bar");
//   const navbar = document.getElementById("navbar");

//   const height = window.innerHeight|| document.documentElement.clientHeight|| 
//   document.body.clientHeight;
//   const navPercentage = height / 2;

//   progressBar.setAttribute("aria-valuenow", Math.round(scrollPercentage));
//   progressBar.style['--width'] = Math.round(scrollPercentage);

//   if(document.body.scrollTop < 880 || scrollTop < 880) {
//     // navbar.classNameList.add("navbar-light");
//     navbar.classNameList.remove("navbar-dark");
//   } else {
//     navbar.classNameList.add("navbar-dark");
//     navbar.classNameList.remove("navbar-light");
//   }
// }

// window.addEventListener('scroll', scrollProgress);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
