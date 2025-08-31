import { Link } from "react-router-dom";
import TopNavbar from "./topnavbar";
export default function Navbar() {
  return (
    <>
      {/* Top navigation bar */}
      <TopNavbar />

    <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="mb-0">
              <i className="fab fa-slack me-2"></i>   <span className="safenest-text" style={{ fontWeight: "bold" }}>SafeNest</span>
            </h1>
            {/* <img src="img/logo.png" alt="Logo" /> */}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link text-bold" >Home</Link>
              <Link to="/about" className="nav-item nav-link text-bold">About</Link>
              <Link to="/services" className="nav-item nav-link text-bold">Services</Link>
              <Link to="/contact" className="nav-item nav-link text-bold">Contact</Link>
            </div>
          </div>

          <div className="d-none d-xl-flex flex-shrink-0 ps-4">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              className="btn btn-light btn-lg-square rounded-circle position-relative wow tada"
              data-wow-delay=".9s"
            >
              <i className="fa fa-phone-alt fa-2x"></i>
              <div className="position-absolute" style={{ top: "7px", right: "12px" }}>
                <span><i className="fa fa-comment-dots text-secondary"></i></span>
              </div>
            </a>
            <div className="d-flex flex-column ms-3">
              <span>Call to Our Experts</span>
              <a href="tel:+919951394411">
                <span className="text-dark">Free: +91 995 139 4411 </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    </>
  );
}
