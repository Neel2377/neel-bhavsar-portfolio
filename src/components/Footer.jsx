import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer" style={{ letterSpacing: "2px" }}>
      <div className="container">
        <div className="row gy-4">

          {/* Brand / About */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <h5 className="footer-title fs-3" style={{color:"#F5C857"}}>Neel Bhavsar</h5>
            <p className="footer-about">
              Full Stack Developer crafting modern, scalable and high-performance
              web applications with clean UI.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 text-center">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skill">Skills</Link></li>
              <li><Link to="/project">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-lg-4 text-lg-end">
            <h5 className="footer-title">Connect</h5>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-linkedin-box-fill" />
              </a>

              <a
                href="https://github.com/Neel2377"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-github-fill" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-instagram-line" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom text-center mt-4">
          <p className="footer-text">
            © {new Date().getFullYear()} Neel Bhavsar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
