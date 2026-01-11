import React from "react";
import { Link } from "react-router";

function Project() {
  return (
    <>
      <section className="projects" id="project">
        <div className="container mt-5">
          <h2 className="projects-title" style={{ letterSpacing: '2px' }}>Projects</h2>

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
              }
            ].map((project, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-4" style={{ letterSpacing: '2px' }}>
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
    </>
  );
}

export default Project;
