import "./../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand" href="#">
          <span className="logo-text">NEXSORA</span>
        </a>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>


        {/* 🔽 DROPDOWN MENU 🔽 */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Explore
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#mission">
                    Mission
                  </a>
                </li>
                 <hr className="dropdown-divider" />  
                 <li>
                  <a className="dropdown-item" href="#core-business">
                    Core Business
                  </a>
                </li>
                 <hr className="dropdown-divider" />  
                <li>
                  <a className="dropdown-item" href="#services">
                    Software Services
                  </a>
                </li>
                 <hr className="dropdown-divider" />               
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#pricing">
                    Pricing
                  </a>
                </li>
              </ul>
            </li>
            {/* 🔼 END DROPDOWN 🔼 */}
                                                   

             <li className="nav-item">
              <a className="nav-link" href="#leadership">
                Managing partner
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#business">
                Business Areas
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a href="#contact" className="btn btn-contact">
                Get in Touch
              </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;