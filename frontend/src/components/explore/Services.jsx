// src/components/Services.jsx

function Services() {
  const servicesList = [
    {
      icon: "bi-laptop",
      title: "Web Development",
      description: "Custom, responsive web applications built with modern frameworks and optimized for high performance."
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Digital Growth",
      description: "Data-driven marketing strategies, SEO optimization, and analytics to expand your market presence."
    },
    {
      icon: "bi-shield-check",
      title: "Cyber Security",
      description: "Comprehensive audits and active defense systems to keep your corporate infrastructure and data safe."
    }
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container py-4">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Our Software Services</h2>
          <p className="text-muted col-md-8 mx-auto">
            Comprehensive solutions tailored to scale your business and boost efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {servicesList.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="card-body">
                  <div className="badge bg-primary-subtle text-primary p-3 rounded-circle fs-3 mb-3">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h3 className="h5 card-title fw-bold mb-3">{service.title}</h3>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;