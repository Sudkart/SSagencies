/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import HiringWidget from "./hiringwidget";
export default function Home() {
  useEffect(() => {

  }, []);

  return (
    <>
     <HiringWidget />
 <div
  id="homeCarousel"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  {/* indicators */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>

  {/* slides */}
  <div className="carousel-inner">
    {/* Slide 1 */}
    <div className="carousel-item active" data-bs-interval="5000">
      <div
        className="hero-slide"
        style={{ backgroundImage: "url('/img/lifeinsurance.jpg')",height: "80vh" }}
      >
        <div className="container hero-overlay d-flex align-items-center justify-content-center">
          <div className="text-center py-5">
            <h1 className="display-4 fw-bold mb-3">Secure Your Future</h1>
            <p className="lead mb-4">Life insurance plans tailored to your needs.</p>
            <a href="/services" className="btn btn-outline-dark btn-lg rounded-pill">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="carousel-item" data-bs-interval="5000">
      <div
        className="hero-slide"
        style={{ backgroundImage: "url('/img/healthinsurance.jpg')",height: "80vh" }}
      >
        <div className="container hero-overlay d-flex align-items-center justify-content-center">
          <div className="text-center py-5">
            <h1 className="display-4 fw-bold mb-3">Health Comes First</h1>
            <p className="lead mb-4">Affordable care for you and your family.</p>
            <a href="/contact" className="btn btn-outline-dark btn-lg rounded-pill">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Slide 3 */}
    <div className="carousel-item" data-bs-interval="5000">
      <div
        className="hero-slide"
        style={{ backgroundImage: "url('/img/vehicleInsurance.jpeg')",height: "80vh" }}
      >
        <div className="container hero-overlay d-flex align-items-center justify-content-center">
          <div className="text-center py-5">
            <h1 className="display-4 fw-bold mb-3">A Need for all vehicles</h1>
            <p className="lead mb-4">Choose the right coverage for your vehicle.</p>
            <a href="/about" className="btn btn-outline-dark btn-lg rounded-pill">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Slide 4 */}
    <div className="carousel-item" data-bs-interval="5000">
      <div
        className="hero-slide"
        style={{ backgroundImage: "url('/img/pensionplans.jpg')",height: "80vh" }}
      >
        <div className="container hero-overlay d-flex align-items-center justify-content-center">
          <div className="text-center py-5">
            <h1 className="display-4 fw-bold mb-3">Retirement, Reimagined</h1>
            <p className="lead mb-4">Plans that grow with you.</p>
            <a href="/about" className="btn btn-outline-dark btn-lg rounded-pill">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* controls */}
  <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev" aria-label="Previous">
    <i className="fas fa-chevron-left fa-2x"></i>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next" aria-label="Next">
    <i className="fas fa-chevron-right fa-2x"></i>
    <span className="visually-hidden">Next</span>
  </button>
</div>


      {/* === SCROLL-ANIMATED SECTIONS === */}

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h4 className="text-primary">Our Features</h4>
            <h2 className="display-6">Insurance for a Better Future</h2>
            <p className="text-muted">
              Tailored plans, transparent pricing, and friendly support.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="0">
              <div className="p-4 border rounded h-100 text-center">
                <i className="far fa-handshake fa-3x mb-3 text-primary"></i>
                <h5>Trusted Company</h5>
                <p className="text-muted">Serving families with integrity.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
              <div className="p-4 border rounded h-100 text-center">
                <i className="fa fa-dollar-sign fa-3x mb-3 text-primary"></i>
                <h5>Money Back</h5>
                <p className="text-muted">Flexible options if plans change.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
              <div className="p-4 border rounded h-100 text-center">
                <i className="fa fa-bullseye fa-3x mb-3 text-primary"></i>
                <h5>Flexible Plans</h5>
                <p className="text-muted">Pick what truly fits your life.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
              <div className="p-4 border rounded h-100 text-center">
                <i className="fa fa-headphones fa-3x mb-3 text-primary"></i>
                <h5>24/7 Support</h5>
                <p className="text-muted">We’re here when you need us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6" data-aos="fade-right">
              <img src="/img/about-1.png" alt="About" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h4 className="text-primary">About Our Company</h4>
              <h2 className="display-6">High Range of Exploring Protection</h2>
              <p className="text-muted">
                We design protection that grows with you — no surprises, just clarity.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="fa fa-check text-primary me-2"></i> Save money with transparent plans</li>
                <li className="mb-2"><i className="fa fa-check text-primary me-2"></i> Flexible, modern policies</li>
                <li className="mb-2"><i className="fa fa-check text-primary me-2"></i> Friendly advisors</li>
              </ul>
              <a href="/services" className="btn btn-primary rounded-pill px-4">More Information</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-white" data-aos="flip-up">
        <div className="container text-center">
          <h3 className="mb-3">Ready to get covered?</h3>
          <p className="mb-4">Talk to our experts and find a plan that works for you.</p>
          <a href="/contact" className="btn btn-light rounded-pill px-4">Contact Us</a>
        </div>
      </section>
    
    </>
  );
}
