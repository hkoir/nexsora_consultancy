import "./../styles/about.css";

import logoSvg from "../assets/svg/nexsora-2svg.svg";

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left */}
                    <div className="col-lg-5">
                        <div className="about-image">
                            <div className="about-circle">
                            <a className="navbar-brand d-flex align-items-center" href="#hero">
                                <img 
                                    src={logoSvg} 
                                    alt="Nexsora Logo" 
                                    style={{ height: "300px", width: "auto" }} 
                                />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="col-lg-7">
                        <span className="section-tag">
                            ABOUT NEXSORA
                        </span>

                        <h2 className="section-title">
                            Building Value Through
                            <span> Innovation</span>
                        </h2>

                        <p className="about-text">

                            Nexsora is a multidisciplinary partnership
                            firm established to provide engineering,
                            technology, consultancy, and business
                            solutions that help organizations solve
                            complex challenges and achieve sustainable
                            growth.

                        </p>

                        <p className="about-text">
                            We believe in combining technical expertise,
                            innovation, integrity, and practical
                            experience to deliver reliable solutions
                            tailored to each client's unique needs.
                        </p>

                        <div className="about-features">
                            <div className="feature">
                                ✔ Professional Excellence
                            </div>
                            <div className="feature">
                                ✔ Innovative Thinking
                            </div>
                            <div className="feature">
                                ✔ Client-Centered Approach
                            </div>
                            <div className="feature">
                                ✔ Sustainable Solutions
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;