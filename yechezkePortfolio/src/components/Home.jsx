import React from "react";
import Typewriter from "typewriter-effect";
import videobg from "../videos/home.mp4";

const Home = ({ classicHeader, darkTheme, handleNavClick }) => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark" />

        {/* ---------------image background------------------ */}
        <div
          className="hero-bg parallax"
          style={{ backgroundImage: 'url("images/background.jpg")' }}
        ></div>

        {/* -------------------video background---------------------- */}

        {/* <div className="player hero-bg parallax">
          <video
            src={videobg}
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          ></video>
        </div> */}

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">Get To Know Me Better</p>
                <h3 className="text-9 fw-500 text-white mb-2 mb-md-3">Chay Fadida</h3>

                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  <Typewriter
                    options={{
                      strings: [
                        "Software Engineer",
                        "DevOps Engineer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <p className="text-2 text-light mb-1">
                Passionate software engineering student with a keen interest in DevOps practices.
                </p>
                {/* <p className="text-2 text-light mb-3">
                I thrive as a quick learner and strong team player, eagerly looking forward to applying my skills in contributing to innovative projects.
                </p> */}
                <p></p>
                <p className="text-6 text-light mb-5">
                This website is served to you by my own private On-Prem Kubernetes cluster that I have built in my living room, 
                <br></br>how cool is that? also this is develop branch in gitops
                </p>
                {/* <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Hire Me
                </a> */}
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
