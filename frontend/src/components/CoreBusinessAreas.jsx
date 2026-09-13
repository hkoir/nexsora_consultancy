import "../styles/CoreBusinessAreas.css";

const businessAreas = [
  {
    title: "Solar & Renewable Energy Solutions",
    icon: "☀️",
  items: [
  "Solar PV system design, sizing, dimensioning and engineering calculations",
  "Rooftop solar system design, layout planning and grid-connected solutions",
  "Solar site survey, feasibility assessment, energy-yield estimation and technical planning",
  "Solar inverter selection, mounting structure design and technical equipment specification",
  "DC/AC cabling, electrical integration, protection and earthing design",
  "Solar system performance analysis, testing, commissioning and technical verification",
  "Net-metering, grid integration and energy-management system consultancy",
  "Solar monitoring, maintenance, troubleshooting and system optimization",
  "Battery energy storage, backup power and hybrid solar system design support",
  "Renewable energy and energy-efficiency assessment and consultancy",
  "Solar project technical supervision, installation support and deployment assistance",
  "Solar equipment and related electrical materials supply as a supporting service",
],
  },

 {
  title: "Electrical & Power Engineering",
  icon: "⚡",
  items: [
    "Electrical system design, load assessment, sizing and engineering calculations",
    "Power distribution system design, single-line diagrams and equipment specification",
    "Cable sizing, voltage drop, short-circuit and fault current calculations",
    "Electrical protection coordination, circuit breaker selection and earthing system design",
    "Electrical fire hazard assessment, fire protection and safety consultancy",
    "Lightning protection system design, risk assessment and earthing integration",
    "Transformer, generator, UPS and power backup system sizing and design",
    "Electrical energy efficiency assessment, power quality analysis and system optimization",
    "Electrical inspection, testing, commissioning and technical compliance verification",
    "Electrical system troubleshooting, maintenance planning and technical consultancy",
    "Electrical equipment procurement, installation supervision and deployment support",
  ],
},

 
{
  title: "Optical Fiber & Telecom Infrastructure",
  icon: "🌐",
  items: [
    "Optical fiber network design, architecture and infrastructure planning",
    "Fiber route survey, route selection, feasibility assessment and technical planning",
    "Fiber optic cable sizing, fiber core allocation and link capacity planning",
    "Optical power budget, link loss, attenuation and optical link calculations",
    "Long-haul, metro and access fiber network design and deployment consultancy",
    "FTTH, FTTx and fiber-to-building network design and technical planning",
    "ODF/FDF, fiber distribution, patch panel and passive infrastructure design",
    "Fiber optic cable selection, duct, pole, trench and associated infrastructure planning",
    "Optical fiber splicing, termination, OTDR testing and power meter measurement",
    "Fiber network performance assessment, fault localization and troubleshooting",
    "Telecom infrastructure maintenance, rehabilitation and network optimization",
    "NTTN, ISP and enterprise connectivity infrastructure consultancy",
    "Fiber network project technical supervision, procurement and installation support",
  ],
},
  {
    title: "Network & IT Equipment Supply",
    icon: "🖥️",
    items: [
      "Networking equipment sourcing and supply",
      "Switches, routers, racks and structured networking accessories",
      "Optical network accessories and passive components",
      "UPS, power and supporting infrastructure equipment",
      "Institutional IT and communication equipment procurement",
    ],
  },

 
  {
    title: "Engineering Deployment & Maintenance",
    icon: "🔧",
    items: [
      "Installation and commissioning support",
      "Preventive and corrective maintenance",
      "Field troubleshooting and technical support",
      "Site surveys and deployment planning",
      "Documentation and maintenance reporting",
    ],
  },

  {
    title: "Civil & Infrastructure Works",
    icon: "🏗️",
    items: [
      "Civil construction and repair works",
      "Trenching, ducting and infrastructure support",
      "Equipment foundation and site preparation support",
      "Cable route-related civil activities",
      "Restoration and associated site works",
    ],
  },
   {
    title: "Software Automation & Digital Solutions",
    icon: "⚙️",
    items: [
      "Business process automation and workflow digitization",
      "Custom web-based business applications and dashboards",
      "Pharmacy, retail, inventory and point-of-sale software solutions",
      "Database-driven applications, reporting and management information systems",
      "API integration between business systems, devices and external services",
      "Local software agents and hardware integration for printing, scanning and other operational devices",
      "Cloud-based and multi-tenant application architecture support",
      "System maintenance, troubleshooting, enhancement and technical support",
    ],
  },

  {
    title: "Office & General Supply",
    icon: "📦",
    items: [
      "Office equipment and accessories",
      "Institutional supplies and consumables",
      "Electrical and technical accessories",
      "General procurement and delivery services",
      "Customized supply according to client specification",
    ],
  },
];

export default function CoreBusinessAreas() {
  return (
    <section className="core-business-section py-5">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Core Business Areas
          </h2>

          <p className="text-muted mx-auto section-intro">
            Nexsora Engineering & Consultancy provides integrated
            engineering, renewable energy, technology, automation,
            infrastructure and procurement solutions tailored to
            client requirements.
          </p>
        </div>

        {/* Business Areas */}
        <div className="row g-4">

          {businessAreas.map((area) => (
            <div
              className="col-md-6 col-lg-4"
              key={area.title}
            >
              <div className="business-card h-100 p-4 rounded-4">

                <div className="business-icon mb-3">
                  {area.icon}
                </div>

                <h4 className="business-title">
                  {area.title}
                </h4>

                <ul className="business-list">
                  {area.items.map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}