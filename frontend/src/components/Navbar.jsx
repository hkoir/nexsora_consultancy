
import "./../styles/navbar.css";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
      setExploreOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  // Close mobile menu when clicking a menu item
  const handleMenuClick = () => {
    setMenuOpen(false);
    setExploreOpen(false);
  };

  return (
    <nav
      ref={menuRef}
      className="navbar navbar-expand-lg navbar-custom sticky-top"
    >
      <div className="container">

        {/* Logo */}
        <a
          className="navbar-brand"
          href="#"
          onClick={handleMenuClick}
        >
          <span className="logo-text">NEXSORA</span>
        </a>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a
                className="nav-link active"
                href="#"
                onClick={handleMenuClick}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={handleMenuClick}
              >
                About
              </a>
            </li>

            {/* Explore Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                type="button"
                onClick={() => setExploreOpen((prev) => !prev)}
                aria-expanded={exploreOpen}
              >
                Explore
              </button>

              <ul
                className={`dropdown-menu ${
                  exploreOpen ? "show" : ""
                }`}
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="#mission"
                    onClick={handleMenuClick}
                  >
                    Mission
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="#core-business"
                    onClick={handleMenuClick}
                  >
                    Core Business
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="#services"
                    onClick={handleMenuClick}
                  >
                    Software Services
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="#pricing"
                    onClick={handleMenuClick}
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#leadership"
                onClick={handleMenuClick}
              >
                Managing Partner
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#business"
                onClick={handleMenuClick}
              >
                Business Areas
              </a>
            </li>

            
            <li className="nav-item">
              <a
                className="nav-link"
                href="#why-choose-us"
                onClick={handleMenuClick}
              >
                Why Nexsora
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={handleMenuClick}
              >
                Contact
              </a>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a
                href="#contact"
                className="btn btn-contact"
                onClick={handleMenuClick}
              >
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

