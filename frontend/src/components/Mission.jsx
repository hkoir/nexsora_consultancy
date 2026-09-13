

import {
  FaLaptopCode,
  FaBuilding,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";

import "./../styles/business.css";

function Mission() {

const coreValues = [
  {
    value: "Integrity",
    approach:
      "We conduct business honestly and maintain transparency in our commitments and communication.",
  },
  {
    value: "Quality",
    approach:
      "We focus on workmanship, product suitability, documentation and consistent delivery.",
  },
  {
    value: "Reliability",
    approach:
      "We aim to be responsive and dependable before, during and after project execution.",
  },
  {
    value: "Safety",
    approach:
      "We promote safe working practices and responsible field operations.",
  },
  {
    value: "Customer Focus",
    approach:
      "We align our work with the client's operational priorities and project objectives.",
  },
  {
    value: "Continuous Improvement",
    approach:
      "We seek better methods, technologies and processes for improved performance.",
  },
];


  return (
    <section className="vision-mission-section py-5">
  <div className="container">

    {/* Section Header */}
    <div className="text-center mb-5">
      <h2 className="fw-bold">Vision, Mission & Core Values</h2>
      <p className="text-muted">
        Our commitment to delivering dependable engineering, technology
        and consultancy solutions.
      </p>
    </div>

    {/* Vision & Mission */}
    <div className="row g-4 mb-5">

      {/* Vision */}
      <div className="col-lg-6">
        <div className="h-100 p-4 rounded-4 shadow-sm">
          <h3 className="fw-bold mb-3">Vision</h3>

          <p className="mb-0">
            To become a trusted and professionally recognized engineering
            and consultancy partner in Bangladesh by delivering dependable
            technical solutions, quality services and sustainable value
            to clients.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="col-lg-6">
        <div className="h-100 p-4 rounded-4 shadow-sm">
          <h3 className="fw-bold mb-3">Mission</h3>

          <ul className="mb-0">
            <li>Deliver quality engineering, procurement and deployment
              services tailored to client requirements.</li>

            <li>Develop strong technical and operational capabilities
              for multidisciplinary projects.</li>
              <li>
                Promote electrical safety, fire hazard protection, renewable energy and energy-efficient solutions.
              </li>

            <li>Support clients with responsive maintenance,
              troubleshooting and technical consultancy.</li>

            <li>Build reliable supply and procurement channels for
              engineering, network and institutional requirements.</li>

            <li>Maintain integrity, accountability, safety and customer
              focus in every assignment.</li>
          </ul>
        </div>
      </div>

    </div>

    {/* Core Values */}
    <div className="text-center mb-4">
      <h3 className="fw-bold">Core Values</h3>
      <p className="text-muted">
        The principles that guide how we work and serve our clients.
      </p>
    </div>

    <div className="row g-4">
      {coreValues.map((item) => (
        <div className="col-md-6 col-lg-4" key={item.value}>
          <div className="h-100 p-4 rounded-4 shadow-sm">

            <h5 className="fw-bold mb-2">
              {item.value}
            </h5>

            <p className="text-muted mb-0">
              {item.approach}
            </p>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>
  );
}

export default Mission;