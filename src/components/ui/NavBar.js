import { useState } from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import LineImg from "../../assets/images/line-img.png";
import PhoneImg from "../../assets/images/phone-img.png";
import Logo from "../../assets/images/logo.png";
import { CgMenu } from "react-icons/cg";
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
          <img
              src={Logo}
              style={{ marginRight: "10px", maxWidth: "110px", paddingTop:"10px" }}
              alt="line-logo"
            />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <CgMenu />
        </div>

        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>HOME</li>
            <li>SERVICE</li>
            <li>ABOUT US</li>
            <li>Contact </li>
          </ul>
        </div>

        <div className="contract-info">
          <ul>
            <img
              src={LineImg}
              style={{ marginRight: "10px", maxWidth: "40px" }}
              alt="line-logo"
            />
            <li>Lorem ipsum</li>
            <img
              src={PhoneImg}
              style={{ marginRight: "10px", maxWidth: "40px" }}
              alt="line-logo"
            />
            <li>091-715-3583</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
