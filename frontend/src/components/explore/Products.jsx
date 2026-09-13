
import "../../styles/product.css";

function Products() {
  const productsList = [
    {
      title: "Engineering Consultancy",
      tag: "Core Business",
      description:
        "Professional engineering consultancy covering electrical systems, renewable energy, safety, protection, optical fiber and telecom infrastructure.",
      features: [
        "Electrical System Design & Dimensioning",
        "Load, Cable & Short-Circuit Calculations",
        "Electrical Safety, Fire Hazard & Protection Assessment",
        "Lightning Protection & Earthing System Design",
        "Solar PV & Renewable Energy Consultancy",
        "Optical Fiber & Telecom Infrastructure Planning",
      ],
    },
    {
      title: "Engineering Project Support",
      tag: "Technical Services",
      description:
        "Practical technical support for engineering projects from feasibility and design through procurement, installation supervision, testing and commissioning.",
      features: [
        "Site Survey & Feasibility Assessment",
        "Technical Specification & Equipment Selection",
        "Procurement & Vendor Technical Evaluation",
        "Installation & Deployment Supervision",
        "Testing & Commissioning Support",
        "Maintenance & Troubleshooting Consultancy",
      ],
    },
    {
      title: "Digital Solutions",
      tag: "Add-on Services",
      description:
        "Software and digital solutions developed to support business operations, workflow automation, reporting and management requirements.",
      features: [
        "Business Management Software",
        "Custom Web Applications",
        "Workflow & Process Automation",
        "Data & Management Dashboards",
        "Reporting & Analytics",
        "API & System Integration",
      ],
    },
  ];

  return (
    <section id="products" className="py-5">
      <div className="container py-4">

        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Our key Solutions & Services</h2>
          <p className="text-muted col-md-8 mx-auto">
            Engineering expertise at our core, supported by technical project
            services and practical digital solutions.
          </p>
        </div>

        {/* Products / Services Grid */}
        <div className="row g-4 justify-content-center">
          {productsList.map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 border shadow-sm p-4">
                <div className="card-body d-flex flex-column">

                  <span className="badge bg-secondary mb-2 align-self-start">
                    {product.tag}
                  </span>

                  <h3 className="h4 card-title fw-bold">
                    {product.title}
                  </h3>

                  <p className="text-muted my-3">
                    {product.description}
                  </p>

                  <ul className="ps-2 mb-4 service-features">
                    {product.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="mb-2 text-secondary"
                      >
                        <span className="service-bullet"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <a
                      href="#contact"
                      className="btn btn-outline-primary fw-semibold w-100"
                    >
                      Discuss Your Requirement
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;

