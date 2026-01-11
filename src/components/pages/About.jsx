import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="about-me" id="about">
        <div className="container mt-5">
          <div className="row align-items-center justify-content-center">
            <div className="about-me-content d-flex flex-column align-items-center justify-content-center text-center p-3 col-xl-10 col-lg-8 col-md-12 col-sm-12 col-12">
              <h2
                className="about-head text-center mb-3 fw-bold"
                style={{ letterSpacing: "2px" }}
              >
                About Me
              </h2>
              <p className="about-para" style={{ letterSpacing: "2px" }}>
                My name is Neel Bhavsar, I am a Full Stack Developer with
                expertise in both front-end and back-end technologies. With a
                deep understanding of JavaScript, HTML, CSS, and frameworks such
                as React, Angular, and Vue.js, I craft intuitive and responsive
                user interfaces. I am driven by challenges and constantly strive
                to learn and implement the latest technologies to deliver
                high-quality solutions. My ability to work across all stages of
                development, from concept to deployment, allows me to bring
                seamless digital experiences to life.
              </p>
            </div>
            <div
              className="d-flex flex-wrap justify-content-center gap-4 mt-5 mb-5"
              style={{ letterSpacing: "2px" }}
            >
              {/* Phone */}
              <div className="information-box">
                <div className="icon fs-2">
                  <i
                    className="ri-phone-line info-icon"
                    style={{ color: "#F5C857" }}
                  />
                </div>
                <div>
                  <h5 className="info-title">Phone :</h5>
                  <div className="info-text">
                    <Link to="tel:+919978403138" className="text-white">
                      +91 9978403138
                    </Link>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="information-box">
                <div className="icon fs-2">
                  <i
                    className="ri-mail-line info-icon"
                    style={{ color: "#F5C857" }}
                  />
                </div>
                <div>
                  <h5 className="info-title">Email :</h5>
                  <div className="info-text">
                    <Link
                      to="mailto:neelbhavsar440@gmail.com"
                      className="text-white"
                    >
                      neelbhavsar440@gmail.com
                    </Link>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="information-box">
                <div className="icon fs-2">
                  <i
                    className="ri-map-pin-line info-icon"
                    style={{ color: "#F5C857" }}
                  />
                </div>
                <div>
                  <h5 className="info-title">Location :</h5>
                  <div className="info-text text-white">Gandevi, Gujarat</div>
                </div>
              </div>

              {/* Birth Date */}
              <div className="information-box">
                <div className="icon fs-2">
                  <i
                    className="ri-cake-2-line info-icon"
                    style={{ color: "#F5C857" }}
                  />
                </div>
                <div>
                  <h5 className="info-title">Birth Date :</h5>
                  <div className="info-text text-white">23/12/2000</div>
                </div>
              </div>

              {/* Experience */}
              <div className="information-box">
                <div className="icon fs-2">
                  <i
                    className="ri-briefcase-line info-icon"
                    style={{ color: "#F5C857" }}
                  />
                </div>
                <div>
                  <h5 className="info-title">Experience :</h5>
                  <div className="info-text text-white">Fresher</div>
                </div>
              </div>

              {/* Projects */}
              <div className="information-box">
                <div className="icon fs-2">
                  <i
                    className="ri-folder-line info-icon"
                    style={{ color: "#F5C857" }}
                  />
                </div>
                <div>
                  <h5 className="info-title">Projects :</h5>
                  <div className="info-text text-white">20+</div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="information-box">
                <div className="icon fs-2">
                  <i
                    className="ri-stack-line info-icon"
                    style={{ color: "#F5C857" }}
                  />
                </div>
                <div>
                  <h5 className="info-title">Tech Stack :</h5>
                  <div className="info-text text-white">MERN</div>
                </div>
              </div>

              {/* Country */}
              <div className="information-box">
                <div className="icon fs-2">
                  <i
                    className="ri-earth-line info-icon"
                    style={{ color: "#F5C857" }}
                  />
                </div>
                <div>
                  <h5 className="info-title">Location :</h5>
                  <div className="info-text text-white">India</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-me">
            <div
              className="d-flex flex-row justify-content-center text-center gap-5 mb-5"
              style={{ letterSpacing: "2px" }}
            >
              <div className="social-media">
                <Link
                  to="https://www.linkedin.com/"
                  target="_blank"
                  className="social-link linkedin"
                >
                  <i className="ri-linkedin-box-fill info-icon" />
                </Link>
                <p className="text-white">Linked In</p>
              </div>
              <div className="social-media">
                <Link
                  to="https://github.com/Neel2377?tab=overview&from=2025-06-01&to=2025-06-11"
                  target="_blank"
                  className="social-link github"
                >
                  <i className="ri-github-line info-icon" />
                </Link>
                <p className="text-white">Github</p>
              </div>
              <div className="social-media">
                <Link
                  to="https://www.instagram.com/neel__2377/?igsh=bXloODE3cmc2MWhr#"
                  target="_blank"
                  className="social-link instagram"
                >
                  <i className="ri-instagram-line info-icon" />
                </Link>
                <p className="text-white">Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
