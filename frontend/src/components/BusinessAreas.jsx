

import {
  FaLaptopCode,
  FaBuilding,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";

import "./../styles/business.css";

function BusinessAreas() {
  return (
    <section className="business" id="business">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            OUR BUSINESS AREAS
          </span>

          <h2 className="section-title">
            Delivering Expertise Across
            <span> Multiple Disciplines</span>
          </h2>

          <p className="section-description">
            Nexsora combines engineering expertise,
            innovative technology, professional consultancy,
            and business solutions to help organizations
            achieve sustainable success.
          </p>

        </div>

        <div className="row g-4">

          <div className="col-md-6 col-lg-3">    
            <div className="business-card">
              <FaBuilding className="business-icon" />
              <h4>Engineering</h4>
              <p>
                Engineering consultancy, technical services,
                project planning, implementation,
                and infrastructure solutions.
              </p>

            </div>

          </div>

          <div className="col-md-6 col-lg-3">

            <div className="business-card">

              <FaLaptopCode className="business-icon" />

              <h4>Technology</h4>

              <p>
                Software development, web applications,
                ERP, Pharmacy POS,
                cloud and digital solutions.
              </p>

            </div>

          </div>

          <div className="col-md-6 col-lg-3">

            <div className="business-card">

              <FaChartLine className="business-icon" />

              <h4>Consultancy</h4>

              <p>
                Professional advisory, strategic planning,
                business transformation,
                and operational excellence.
              </p>

            </div>

          </div>

          <div className="col-md-6 col-lg-3">

            <div className="business-card">

              <FaCogs className="business-icon" />

              <h4>Business Solutions</h4>

              <p>
                Integrated solutions designed to improve
                productivity, efficiency,
                and sustainable growth.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BusinessAreas;