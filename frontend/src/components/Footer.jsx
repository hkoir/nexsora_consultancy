import "./../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row">

          {/* Company */}
          <div className="col-lg-5 mb-4">

            <h3 className="footer-logo">
              NEXSORA
            </h3>

            <p className="footer-text">
              Nexsora is a multidisciplinary partnership firm delivering
              engineering, technology, consultancy, and business solutions
              with a commitment to quality, innovation, and long-term value.
            </p>

          </div>

          {/* Quick Links */}
          <div className="col-lg-3 mb-4">

            <h5>Quick Links</h5>

            <ul className="footer-links">

              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#business">Business Areas</a></li>
              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Contact */}
          <div className="col-lg-4 mb-4">

            <h5>Contact</h5>

            <p>📞 +880 1743-800705</p>

            <p>✉ info@nexsora.ink</p>

            <p>🌐 www.nexsora.ink</p>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          <p>
            © 2026 Nexsora. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;