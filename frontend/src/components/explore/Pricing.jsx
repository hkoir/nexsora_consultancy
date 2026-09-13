// src/components/Pricing.jsx

function Pricing() {
  const models = [
    {
      title: "Electrical Engineering & Consultancy",
      subtitle: "Engineering & Custom Development",
      badge: "Turnkey Solutions",
      description: "Fixed-price or milestone-based contracts",
      features: [
        "Electrical system design and load dimensioning",
        "Short circuit and fault level analysis",
        "Protection system design and coordination",
        "Earthing and lightning protection assessment",
        "Project supervision and technical consultancy"
      ],
      actionText: "Request a Proposal",
      isPopular: false
    },
    {
      title: "Electrical Fire Protection and safety",
      subtitle: "Ongoing Service & technical Support",
      badge: "Most Requested",
      description: "System audit/inspection and find the gap and rectify as necessary .",
      features: [
        "Electrical fire risk assessment",
        "Inspection of electrical installations",
        "Protection system review and recommendations",
        "Electrical safety compliance support",
        "Fire protection and risk reduction consultancy"
      ],
      actionText: "Discuss more as needed",
      isPopular: true
    },
    {
      title: "Solar energy and Renewable power systems",
      subtitle: "Advisory & Advisory Services",
      badge: "Strategic Partner",
      description: "Dedicated expert consulting hours per month for EEE technical advisory, system audits, or specialized problem-solving.",
      features: [
        "Solar PV system design and sizing ",
        "Load based dimensioning and Battery sizing",
        "Feasibility study and technical evaluation",
        "PV inverter & backup power system design",
        "Project supervision and EPC consultancy"
      ],
      actionText: "Book a Consultation",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-5 bg-light">
      <div className="container py-4">
        
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Engagement & Pricing Models</h2>
          <p className="text-muted col-md-8 mx-auto fs-5">
            Because engineering solutions, industrial service vary in scope, we offer flexible engagement models structured around your project's exact needs.
          </p>
        </div>

        {/* Pricing/Engagement Cards */}
        <div className="row g-4 align-items-stretch">
          {models.map((model, index) => (
            <div key={index} className="col-lg-4">
              <div 
                className={`card h-100 border-0 shadow-sm p-3 ${
                  model.isPopular ? "border border-primary border-2 position-relative" : ""
                }`}
              >
                {model.isPopular && (
                  <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary px-3 py-2">
                    {model.badge}
                  </span>
                )}

                <div className="card-body d-flex flex-column">
                  <div className="mb-3">
                    <span className="badge bg-secondary-subtle text-secondary mb-2">{model.badge}</span>
                    <h3 className="h4 fw-bold">{model.title}</h3>
                    <p className="text-primary fw-semibold small mb-0">{model.subtitle}</p>
                  </div>

                  <p className="text-muted small my-3">{model.description}</p>

                  <hr className="my-3 text-muted" />

                  <ul className="list-unstyled my-3 text-start flex-grow-1">
                    {model.features.map((feat, idx) => (
                      <li key={idx} className="mb-2 small text-secondary">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-3">
                    <a 
                      href="#contact" 
                      className={`btn w-100 fw-semibold ${
                        model.isPopular ? "btn-primary" : "btn-outline-dark"
                      }`}
                    >
                      {model.actionText}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Custom Quote Banner */}
        <div className="mt-5 p-4 rounded bg-white border text-center shadow-sm">
          <h4 className="fw-bold mb-2">Have a complex multi-tenant software or engineering requirement?</h4>
          <p className="text-muted mb-3">Our team evaluates technical specifications individually to provide exact scope estimates.</p>
          <a href="#contact" className="btn btn-outline-primary px-4 fw-semibold">Get a Custom Estimate</a>
        </div>

      </div>
    </section>
  );
}

export default Pricing;