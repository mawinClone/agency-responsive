import { useState } from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import "./NavBar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Brand /> */}
          <p>Brand</p>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {/* <Hamburger /> */}
          <p>Hamburger</p>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>HOME</li>
            <li>SERVICE</li>
            <li>ABOUT US</li> 
            <li>Contract </li>
            {/* <li>Contact</li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
