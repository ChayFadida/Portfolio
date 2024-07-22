import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Infrastructure Automation",
      desc: "Automate infrastructure provisioning and management using various tools and methodologies. Design scalable and resilient architectures to support application deployment.",
      icon: "fas fa-network-wired",
      },
    {
      name: "Monitoring and Logging",
      desc: "Set up monitoring and logging solutions to gain insights into application performance and detect issues early. Use tools like Prometheus, ELK stack, or Grafana to ensure system health.",
      icon: "fas fa-server",
    },
    {
      name: "Continuous Integration and Deployment",
      desc: "Skilled in implementing efficient CI/CD pipelines for rapid development, feedback incorporation, and continuous improvement.",
      icon: "fas fa-cogs",
    },
    {
      name: "Agile Practices",
      desc: "Utilize Scrum to enhance team collaboration, iterative development, and adaptive planning for effective project management and delivery.",
      icon: "fas fa-running",
    },
    {
      name: "Containerization",
      desc: "Utilize container technologies like Docker and Kubernetes for efficient deployment and scaling.",
      icon: "fas fa-dice-d6",
    },
    {
      name: "Version Control",
      desc: "Implement version control to track changes in code and configuration for better collaboration.",
      icon: "fas fa-code-branch", // Code branch icon - symbolizing version control
    }
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
