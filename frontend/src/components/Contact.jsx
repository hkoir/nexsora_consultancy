import {
    FaPhoneAlt,
    FaEnvelope,
    FaGlobe,
    FaMapMarkerAlt,
} from "react-icons/fa";

import "./../styles/contact.css";

function Contact() {
    return (
        <section className="contact" id="contact">

            <div className="container">

                <div className="section-header">

                    <span className="section-tag">
                        CONTACT US
                    </span>

                    <h2 className="section-title">
                        Let's Build Something
                        <span> Together</span>
                    </h2>

                    <p className="section-description">
                        Whether you need engineering expertise,
                        technology solutions or professional consultancy,
                        we're ready to discuss your requirements.
                    </p>

                </div>

                <div className="row g-4">

                    <div className="col-md-6 col-lg-3">

                        <div className="contact-card">

                            <FaPhoneAlt className="contact-icon" />

                            <h5>Phone</h5>

                            <p>+880 1743-800705</p>

                        </div>

                    </div>

                    <div className="col-md-6 col-lg-3">

                        <div className="contact-card">

                            <FaEnvelope className="contact-icon" />

                            <h5>Email</h5>

                            <p>info@nexsora.ink</p>

                        </div>

                    </div>

                    <div className="col-md-6 col-lg-3">

                        <div className="contact-card">

                            <FaGlobe className="contact-icon" />

                            <h5>Website</h5>

                            <p>www.nexsora.ink</p>

                        </div>

                    </div>

                    <div className="col-md-6 col-lg-3">

                        <div className="contact-card">

                            <FaMapMarkerAlt className="contact-icon" />

                            <h5>Location</h5>

                            <p>Dhaka, Bangladesh</p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;