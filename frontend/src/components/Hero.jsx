import "./../styles/hero.css";

import heroImage from "../assets/images/Nexsora-1.png";


function Hero() {
  return (
    <section className="hero">
      <div className="container">

        <div className="row align-items-center hero-content">

          {/* Left Side */}
          <div className="col-lg-6">

            <span className="hero-badge">
              Engineering • Technology • Consultancy
            </span>

            <h1 className="hero-title">
              Building Innovative
              <br />
              Solutions for
              <span> Businesses & Industries</span>
            </h1>

            <p className="hero-description">
              Nexsora is a multidisciplinary partnership firm delivering
              engineering, technology, consultancy, and business solutions
              that empower organizations to innovate, improve efficiency,
              and achieve sustainable growth.
            </p>

            <div className="hero-buttons">

              <a href="#business" className="btn btn-primary-custom">
                Explore Our Services
              </a>

              <a href="#contact" className="btn btn-outline-custom">
                Contact Us
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="hero-image-wrapper">
                <div className="hero-image">
                  <img
                        src={heroImage}
                        alt="Nexsora Professional Solutions"
                        className="img-fluid"
                    />

                </div>
            </div>
        </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;