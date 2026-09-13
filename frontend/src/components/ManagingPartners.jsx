import "./../styles/managingPartners.css";

import humayun from "../assets/images/humayun.png";
import zakir from "../assets/images/Zakir2.png";

import {
    FaCheckCircle,
    FaGraduationCap,
    FaBriefcase
} from "react-icons/fa";

function ManagingPartners() {

    return (

        <section className="partners" id="leadership">

            <div className="container">

                <div className="section-header">

                    <span className="section-tag">
                        LEADERSHIP
                    </span>

                    <h2 className="section-title">
                        Meet Our
                        <span> Managing Partners</span>
                    </h2>

                    <p className="section-description">

                        Nexsora is led by experienced professionals
                        with decades of expertise in engineering,
                        technology, telecommunications,
                        consultancy and business leadership.

                    </p>

                </div>

                {/* Partner 1 */}

                <div className="partner-card row align-items-center">

                    <div className="col-lg-4">

                        <img
                            src={humayun}
                            className="partner-photo img-fluid"
                            alt="S M Humayun Kobir"
                        />

                    </div>

                    <div className="col-lg-8">
                        <h3> S. M. Humayun Kobir</h3>
                        <h5 className="designation"> Managing Partner</h5>
                        <div className="partner-info">
                            <p><FaGraduationCap />
                                B.Sc. in Electrical & Electronic Engineering
                            </p>
                            <p><FaGraduationCap />MBA/EMBA, IEB-F/11955
                            </p>
                            <p><FaBriefcase />
                                27+ Years of Professional Experience
                            </p>
                        </div>

                        <div className="skills">
                            <span><FaCheckCircle /> Engineering Consultancy</span>
                            <span><FaCheckCircle /> Telecommunications</span>
                            <span><FaCheckCircle /> Optical Fiber Infrastructure</span>
                            <span><FaCheckCircle /> Project Management</span>
                            <span><FaCheckCircle /> Software Development</span>
                            <span><FaCheckCircle /> Business Development</span>

                        </div>

                        <blockquote>

                            "Committed to delivering practical,
                            innovative and sustainable engineering
                            and technology solutions."

                        </blockquote>

                    </div>

                </div>

                {/* Partner 2 */}

                <div className="partner-card row align-items-center flex-lg-row-reverse">

                    <div className="col-lg-4">

                        <img
                            src={zakir}
                            className="partner-photo img-fluid"
                            alt="Md Zakir Hossain"
                        />

                    </div>

                    <div className="col-lg-8">
                        <h3> Md. Zakir Hossain</h3>
                        <h5 className="designation"> Managing Partner</h5>
                        <div className="partner-info">
                            <p><FaGraduationCap />
                                B.Sc. in Electrical & Electronic Engineering
                            </p>
                            <p><FaGraduationCap />M Sc in Engineering (EEE)
                            </p>
                            <p><FaBriefcase />
                                27+ Years of Professional Experience
                            </p>
                        </div>

                        <div className="skills">
                            <span><FaCheckCircle /> Engineering Services</span>
                            <span><FaCheckCircle /> Project Execution</span>
                            <span><FaCheckCircle /> Business Operations</span>
                            <span><FaCheckCircle /> Client Relationship</span>
                            <span><FaCheckCircle /> Consultancy</span>
                            <span><FaCheckCircle /> Strategic Planning</span>

                        </div>

                        <blockquote>

                            "Dedicated to building trusted
                            client relationships through
                            quality and professionalism."

                        </blockquote>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default ManagingPartners;