

import "./../styles/WhyChooseUs.css";

function WhyChooseUs() {
  const reasons = [
    {
      icon: "bi-mortarboard-fill",
      title: "BUET-Engineered Expertise",
      description:
        "Engineering consultancy led by BUET engineers with strong academic foundations and extensive professional experience.",
    },
    {
      icon: "bi-briefcase-fill",
      title: "Extensive Industry Experience",
      description:
        "Decades of practical experience in electrical engineering, telecom infrastructure, optical fiber, renewable energy and project execution.",
    },
    {
      icon: "bi-rulers",
      title: "Practical Engineering Solutions",
      description:
        "Technically sound, cost-conscious and implementable solutions designed around real project requirements and business objectives.",
    },
    {
      icon: "bi-shield-check",
      title: "Professional Commitment",
      description:
        "We uphold integrity, accountability, technical diligence and transparent communication in every consultancy engagement.",
    },
    {
      icon: "bi-gear-wide-connected",
      title: "Integrated Technical Capability",
      description:
        "A multidisciplinary approach connecting electrical systems, energy, telecom, IT and infrastructure for comprehensive project support.",
    },
    {
        icon: "bi-people-fill",
      title: "Client-Focused Partnership",
      description:
        "We work closely with our clients to understand their challenges, provide clear recommendations and support successful project outcomes.",
    },
  ];

  return (
    <section id="why-choose-us" className="why-choose-us py-5">
      <div className="container py-4">

        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-tag">WHY NEXSORA</span>

          <h2 className="fw-bold display-6 mt-2">
            Why Choose Nexsora?
          </h2>

          <p className="text-muted col-lg-8 mx-auto">
            Engineering expertise, professional experience and a commitment
            to delivering practical solutions that create lasting value.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="why-card h-100 p-4">

                <div className="why-icon mb-3">
                  <i className={`bi ${reason.icon}`}></i>
                </div>

                <h3 className="h5 fw-bold mb-3">
                  {reason.title}
                </h3>

                <p className="text-muted mb-0">
                  {reason.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="why-bottom text-center mt-5 pt-4">
          <h3 className="h4 fw-bold">
            Commitment. Expertise. Excellence.
          </h3>

          <p className="text-muted mb-0">
            Your trusted partner for professional engineering consultancy
            and technical project support.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;