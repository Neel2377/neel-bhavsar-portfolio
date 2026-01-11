import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top bg-opacity-10">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="my-logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
            aria-label="Toggle navigation"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto me-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/career">CAREER</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skill">SKILLS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">PROJECT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 id="mobileMenuLabel">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="my-logo"
            />
          </h5>

          <button
            type="button"
            className="btn-close btn-close-white border border-3" 
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">Career</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skill">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/project">Project</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
