import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2020 - 2024",
      title: "Bachelor of Science in Software Engineering Student",
      place: "Ort Braude",
      desc: "",
    },
    {
      yearRange: "Graduated in 2015",
      title: "High School",
      place: "The Hebrew Reali school of Haifa",
      desc: "",
    }
  ];

  const experienceDetails = [
    {
      yearRange: "2022 - Today",
      title: "DevOps Engineer",
      place: "Intel",
      desc: [
        "Led the building, deployment, maintenance, and automation of the software development pipeline from source control to production.","",
        "Proficiently monitored systems using CI/CD tools such as Jenkins, Ansible, and other relevant technologies.","",
        "Applied Python for scripting and automation to enhance overall operational efficiency. ","",
        "Implemented DevOps best practices to foster collaboration between development and operations teams, facilitating faster delivery of high-quality software products."
      ],
    },
  ];

  const skills = [
    {
      name: "Kubernetes",
      percent: 85,
    },
    {
      name: "Linux",
      percent: 85,
    },
    {
      name: "Docker",
      percent: 90,
    },
    {
      name: "Ansible",
      percent: 85,
    },
    {
      name: "Networking",
      percent: 75,
    },
    {
      name: "Prometheus & Grafana",
      percent: 80,
    },
    {
      name: "CI/CD",
      percent: 80,
    },
    {
      name: "On-Prem",
      percent: 95,
    },
    {
      name: "GitOps",
      percent: 80,
    },
    {
      name: "Azure DevOps",
      percent: 90,
    },
    {
      name: "Jenkins",
      percent: 85,
    },
    {
      name: "Python",
      percent: 80,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
  experienceDetails.map((value, index) => (
    <div
      key={index}
      className={
        "bg-white  rounded p-4 mb-4 " +
        (darkTheme ? "bg-dark" : "bg-white border")
      }
    >
      <p className="badge bg-primary text-2 fw-400">
        {value.yearRange}
      </p>
      <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
        {value.title}
      </h3>
      <p className={darkTheme ? "text-primary" : "text-danger"}>
        {value.place}
      </p>
      {/* Separate lines in value.desc */}
<p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
  {value.desc.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {/* Add <br /> tag if not the last line */}
      {index !== value.desc.length - 1 && <br />}
    </React.Fragment>
  ))}
</p>
    </div>
  ))}


          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
