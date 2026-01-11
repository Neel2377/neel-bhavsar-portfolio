import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const skills = [
    { name: "HTML-5", img: "/images/html-5.png", alt: "HTML" },
    {
      name: "CSS-3",
      img: "/images/css.png",
      alt: "CSS",
      className: "css-icon",
    },
    { name: "Bootstrap", img: "/images/bootstrap-icon.png", alt: "Bootstrap" },
    {
      name: "JavaScript",
      img: "/images/js-logo.png",
      alt: "JavaScript",
      className: "c-icon",
    },
    {
      name: "React.js",
      img: "/images/React-icon.svg.png",
      alt: "React",
      className: "c-icon",
    },
    {
      name: "Node.js",
      img: "/images/nodejs-logo.svg",
      alt: "Node.js",
      className: "c-icon",
    },
    {
      name: "MongoDB",
      img: "/images/MongoDB.svg",
      alt: "MongoDB",
      className: "c-icon",
    },
    {
      name: "Git",
      img: "/images/Git-Icon-1788C.png",
      alt: "Git",
      className: "c-icon",
    },
    {
      name: "GitHub",
      img: "/images/github.png",
      alt: "GitHub",
      className: "c-icon",
    },
  ];
  return (
    <>
      {/* HOME */}
      <section className="banner position-relative overflow-hidden" id="home">
        <div className="container">
          <div className="row justify-content-center min-vh-100 align-items-center">
            <div className="col-md-6 text-center">
              <div className="banner-content">
                <p
                  className="fw-bold fs-1"
                  style={{ letterSpacing: "2px", color: "#F5C857" }}
                >
                  Full Stack Developer
                </p>

                <p className="text-white fs-5" style={{ letterSpacing: "2px" }}>
                  I am a passionate Full Stack Developer with extensive
                  experience building modern and scalable web applications.
                </p>

                <Link to="/project">
                  <button className="link-button mt-3">
                    VIEW MY WORKS
                    <i className="ri-arrow-right-up-line arrow-icon" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="about-me" id="about">
        <div className="container">
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

      {/* CAREER */}
      <section className="education space overflow-hidden" id="education">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2
                className="education-title text-center text-white mb-5 fw-bold"
                style={{ letterSpacing: "2px" }}
              >
                Career
              </h2>
            </div>
          </div>
          <div
            className="row d-flex flex-row justify-content-center"
            style={{ letterSpacing: "2px" }}
          >
            <div className="col-12">
              <ul className="education-area">
                <li className="education-list text-white">
                  <span className="degree">B.Tech IT</span>
                  <span className="place me-2 text-white">
                    Parul University
                  </span>
                  <span className="year text-white">2024</span>
                </li>
                <li className="education-list text-white">
                  <span className="degree ">12th Science</span>
                  <span className="place board text-white">GHSEB</span>
                  <span className="year text-white">2019</span>
                </li>
                <li className="education-list text-white">
                  <span className="degree me-4">10th</span>
                  <span className="place text-white">GSEB</span>
                  <span className="year text-white">2017</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills" id="skills">
        <div className="container mt-5">
          <h2 className="title text-center" style={{ letterSpacing: "2px" }}>
            Skills
          </h2>

          <div
            className="row gx-4 gy-4 mt-4 justify-content-center"
            style={{ letterSpacing: "2px" }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="col-xl-2 col-lg-3 col-md-3 col-6 mb-4"
              >
                <div className="skill-item text-center">
                  <div className="skill-thumb d-flex flex-column align-items-center justify-content-center">
                    <div className="skill-icon mb-3">
                      <img
                        src={skill.img}
                        alt={skill.alt}
                        className={skill.className || ""}
                      />
                    </div>
                  </div>

                  <div className="skill-content">
                    <p className="skill-name">{skill.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="project">
        <div className="container">
          <h2 className="projects-title" style={{ letterSpacing: "2px" }}>
            Projects
          </h2>

          <div className="row">
            {[
              {
                title: "Cara E-Commerce",
                img: "/images/P1.png",
                link: "https://deluxe-douhua-7f72c8.netlify.app/",
              },
              {
                title: "Croma",
                img: "/images/P2.png",
                link: "https://croma-website-pr.vercel.app/",
              },
              {
                title: "Groww SIP Calculator",
                img: "/images/P3.png",
                link: "https://conditional-statements.vercel.app/",
              },
              {
                title: "Employee Management System",
                img: "/images/P5.png",
                link: "https://oops-js-pr.vercel.app/index.html",
              },
              {
                title: "Gofuelly",
                img: "/images/P6.png",
                link: "https://github.com/Neel2377/project-PHP.git",
              },
              {
                title: "Quotes API",
                img: "/images/P7.png",
                link: "https://quotes-js-pr.vercel.app/",
              },
              {
                title: "Corona API",
                img: "/images/P8.png",
                link: "https://corona-api-js-beige.vercel.app/",
              },
              {
                title: "E-commerce[Add To Cart]",
                img: "/images/P11.png",
                link: "https://e-commerce-add-to-cart-pr-js.vercel.app/",
              },
              {
                title: "Product Management System",
                img: "/images/P12.png",
                link: "https://pms-node-js-pr.vercel.app/auth/login",
              },
              {
                title: "Calculator",
                img: "/images/P13.png",
                link: "https://calculator-js-pr.vercel.app/",
              },
              {
                title: "Digital Library",
                img: "/images/P14.png",
                link: "https://react-library-management-system-pr.vercel.app/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4 mb-4"
                style={{ letterSpacing: "2px" }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card"
                >
                  <div className="project-image">
                    <img src={project.img} alt={project.title} />
                  </div>

                  <div className="project-content">
                    <h5>{project.title}</h5>
                    <span className="project-link">View Project →</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT US */}
      <section className="contact-us" id="contact">
        <div className="container">
          <div className="contact-us-wrapper">
            <div className="contact-us-title text-center">
              <h2 className="big-title" style={{ letterSpacing: "2px" }}>
                Contact Us
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="comment-respond mt-5">
                <h2
                  className="comment-title text-center"
                  style={{ letterSpacing: "2px" }}
                >
                  Let's Connect
                </h2>
                <form action="#" method="post" className="comment-form">
                  <div className="row gx-20 ">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          id="phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="contactform"
                          placeholder="Message"
                          className="form-control-1 style-2"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="form-btn col-12 px-5">
                      <button
                        type="Submit"
                        className="link-btn d-flex flex-row align-items-center justify-content-center"
                        style={{ letterSpacing: "2px" }}
                      >
                        Send Message
                        <i className="ri-arrow-right-up-line btn-icon" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
