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
            <li><Link to="/"><p>HOME</p></Link></li>
            <li><Link to="/service"><p>SERVICE</p></Link></li>
            <li><Link to="/about"><p>ABOUT US</p></Link></li>
            <li><Link to="/contact"><p>CONTACT</p></Link></li>
          </ul>
        </div>

        <div className="contract-info">
          <ul>
            <img
              src={LineImg}
              style={{ marginRight: "10px", maxWidth: "40px" }}
              alt="line-logo"
            />
            <li><p>Lorem ipsum</p></li>
            <img
              src={PhoneImg}
              style={{ marginRight: "10px", maxWidth: "40px" }}
              alt="line-logo"
            />
            <li><p>091-715-3583</p></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
