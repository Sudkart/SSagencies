import { useState } from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Services() {
     const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                    <h4 className="text-primary">Our Services</h4>
                    <h1 className="display-4 mb-4">We Provide Best Services</h1>
                    <p className="mb-0">Whether you’re looking for the right insurance coverage or financial support through loans, we offer trusted solutions tailored to your needs. Our goal is to make your journey simple, secure, and stress-free. With us, you get guidance, transparency, and support every step of the way.
                    </p>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/blog-1.png" className="img-fluid rounded-top w-100" alt=""></img>
                                <div className="service-icon p-3">
                                    <i className="fa fa-users fa-2x"></i>
                                </div>
                            </div>
                            <div className="service-content p-4">
                                <div className="service-content-inner">
                                    <a href="#" className="d-inline-block h4 mb-4">Life Insurance</a>
                                    <p className="mb-4">Protect your loved ones with financial security for the future.</p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/blog-2.png" className="img-fluid rounded-top w-100" alt=""></img>
                                <div className="service-icon p-3">
                                    <i className="fa fa-hospital fa-2x"></i>
                                </div>
                            </div>
                            <div className="service-content p-4">
                                <div className="service-content-inner">
                                    <a href="#" className="d-inline-block h4 mb-4">Health Insurance</a>
                                    <p className="mb-4">Affordable healthcare coverage for you and your family.</p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/blog-3.png" className="img-fluid rounded-top w-100" alt=""></img>
                                <div className="service-icon p-3">
                                    <i className="fa fa-car fa-2x"></i>
                                </div>
                            </div>
                            <div className="service-content p-4">
                                <div className="service-content-inner">
                                    <a href="#" className="d-inline-block h4 mb-4">Car Insurance</a>
                                    <p className="mb-4">Drive with confidence backed by reliable protection.</p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/blog-4.png" className="img-fluid rounded-top w-100" alt=""></img>
                                <div className="service-icon p-3">
                                    <i className="fa fa-home fa-2x"></i>
                                </div>
                            </div>
                            <div className="service-content p-4">
                                <div className="service-content-inner">
                                    <a href="#" className="d-inline-block h4 mb-4">Home Insurance</a>
                                    <p className="mb-4">Safeguard your home and belongings from unexpected risks.</p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Conditionally render MORE services */}
            {showMore && (
              <>
                {/* Personal Loan */}
                <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/blog-4.png" className="img-fluid rounded-top w-100" alt=""></img>
                                <div className="service-icon p-3">
                                    <i className="fa fa-hand-holding-usd fa-2x"></i>
                                </div>
                            </div>
                            <div className="service-content p-4">
                                <div className="service-content-inner">
                                    <a href="#" className="d-inline-block h4 mb-4">Personal Loans</a>
                                    <p className="mb-4">Quick and flexible loans to meet your personal needs.</p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Home Loan */}
                <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/blog-4.png" className="img-fluid rounded-top w-100" alt=""></img>
                                <div className="service-icon p-3">
                                    <i className="fa fa-house-user fa-2x"></i>
                                </div>
                            </div>
                            <div className="service-content p-4">
                                <div className="service-content-inner">
                                    <a href="#" className="d-inline-block h4 mb-4">Home Loans</a>
                                    <p className="mb-4">Easy financing options to make your dream home a reality.</p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Education Loan */}
                <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="img/blog-4.png" className="img-fluid rounded-top w-100" alt=""></img>
                                <div className="service-icon p-3">
                                    <i className="fa fa-graduation-cap fa-2x"></i>
                                </div>
                            </div>
                            <div className="service-content p-4">
                                <div className="service-content-inner">
                                    <a href="#" className="d-inline-block h4 mb-4">Education Loans</a>
                                    <p className="mb-4">Invest in your future with tailored study loan solutions.</p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
              </>
            )}
                    {/* Button to toggle more services */}
                    <div
                    className="col-12 text-center wow fadeInUp"
                    data-wow-delay="0.2s"
                    >
                    <button
                        className="btn btn-primary rounded-pill py-3 px-5"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "Show Less" : "More Services"}
                    </button>
                    </div>
                 </div>
            </div>
        </div>
    </>
  );
};
