import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Navbar from './components/ui/NavBar';
import Footer from './components/ui/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar/>
        <Home/> 
        <Footer/>
      </div>
    ),
  },
  {
    path: "service",
    element: (
      <div>
        <Navbar/>
        <Service/>
        <Footer/>
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
        <Navbar/>
        <About/>
        <Footer/>
      </div>
    ),
  },
  {
    path: "contact",
    element: (
      <div>
        <Navbar/>
        <Contact/>
        <Footer/>
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
