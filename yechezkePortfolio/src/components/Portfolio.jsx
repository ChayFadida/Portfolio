import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    WEBSERVER: "WebServer",
    APP: "Application",
    RESEARCH: "Research",
  };

  const projectsData = [
    {
      title: "Building A Web Server At Home",
      projectInfo:
        "The website you're currently visiting is being hosted from a Docker container right in my living room. I've set up a Linux web server utilizing Nginx and Node.js to manage incoming requests and serve static files efficiently.",
      client: "Ruby Clinton",
      technologies: "Docker, Nginx, Node.js",
      date: "August, 2023",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/webServer.jpg",
      sliderImages: [
        "images/projects/nginx.jpg",
        "images/projects/docker.jpg",
      ],
      categories: [filters.WEBSERVER],
    },
    {
      title: "Harbor Docker Image Management",
      projectInfo:
        "Implemented a Harbor instance on the web server to effectively manage version control for all Docker images supporting the web server infrastructure. Docker images crucial for the web server's operation are meticulously tagged and maintained within Harbor. The deployed applications seamlessly pull required images from Harbor, ensuring a streamlined and reliable deployment process. Harbor instance: harbor.chay-techs.com",
      technologies: "Harbor, Docker",
      industry: "Art & Design",
      date: "July , 2023",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/harbor.jpg",
      sliderImages: [
      ],
      categories: [filters.WEBSERVER],
    },
    {
      title: "Computerized Examination Management System",
      projectInfo:
        "CEMS is a comprehensive and user-friendly information system designed to centralize and optimize the management of tests within a college environment. Developed as a collaborative group project, we worked together as a dedicated team to bring this system to life. In this endeavor, I undertook the role of the Scrum Master, orchestrating our efforts and ensuring effective coordination through the Jira platform. The system aims to enhance efficiency, accuracy, and reliability in handling various test-related activities, including test creation, administration, grading, and information processing.",
      client: "Ruby Clinton",
      technologies: "Java, JavaFX, Jira, MySQL",
      industry: "Art & Design",
      date: "May, 2023",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/cemsLogo.jpg",
      sliderImages: [
        "images/projects/cemsStudent.jpg",
        "images/projects/cemsLecturer.jpg",
        "images/projects/cemsHOD.jpg"
      ],
      categories: [filters.APP],
    },
    {
      title: "Jenkins CI/CD Pipeline Maintenance",
      projectInfo:
        "Implemented a robust Jenkins CI/CD pipeline for managing Docker image releases, deployments, and version control. Set up dedicated pipelines for reverse proxy, Jenkins instance, and even this website! Streamlined DevOps practices, ensuring efficient and reliable software delivery. jenkins instance: jenkins.chay-techs.com",
      client: "Ruby Clinton",
      technologies: "Jenkins, Docker",
      industry: "Art & Design",
      date: "June, 2023",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        linkedin: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
      },
      thumbImage: "images/projects/jenkins.jpg",
      sliderImages: [
      ],
      categories: [filters.WEBSERVER],
    },
    {
      title: "Stocks View Website",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "Node JS, Express, Json Web Token, BCRYPT, Rest API, Docker, MySQL",
      industry: "Art & Design",
      date: "February, 2023",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/stocksProj.jpg",
      sliderImages: [
        "images/projects/stocksDockerCompose.png",
        "images/projects/stocksJWT.png",
        "images/projects/stocksPasswords.png"
      ],
      categories: [filters.BRAND, filters.PHOTOS],
    },
    {
      title: "Logistic Regression Implementation And Proof",
      projectInfo:
        "For my final optimization project, I immersed myself in the realm of logistic regression and self-training techniques. Through Python programming, I constructed a model that can effectively differentiate between two objects using a vector of \"abilities.\" The project highlights my self-driven approach to mastering advanced machine learning concepts, emphasizing independent research, implementation, and optimization skills.",
      client: "Ruby Clinton",
      technologies: "Python",
      industry: "Art & Design",
      date: "March, 2022",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/logisticRegressionGraph.png",
      sliderImages: [
        "images/projects/logisticRegression.png",
        "images/projects/logisticRegressionOutput.png",
        "images/projects/logisticRegressionInput.png",
      ],
      categories: [filters.RESEARCH],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Projects
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
