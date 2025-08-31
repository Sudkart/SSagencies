import {useEffect,useState} from "react";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    return (
        <>
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                        <div className="container py-5">
                            <div className="row g-5">
                                <div className="col-xl-9">
                                    <div className="mb-5">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-6 col-xl-5">
                                                <div className="footer-item">
                                                    <a href="index.html" className="p-0">
                                                        <h3 className="text-white"><i className="fab fa-slack me-3"></i>SS Agencies</h3>
                                                    </a>
                                                    <p className="text-white mb-4">Finding insurance made simple call or message today and get the support you need delivered straight to you.</p>
                                                    <div className="footer-btn d-flex">
                                                        <a className="btn btn-md-square rounded-circle me-3" href="https://www.facebook.com/people/Ss-Agencies/100063147047067/"><i className="fab fa-facebook-f"></i></a>
                                                        <a className="btn btn-md-square rounded-circle me-3" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                                        <a className="btn btn-md-square rounded-circle me-3" href="https://www.instagram.com/ss.agencies/"><i className="fab fa-instagram"></i></a>
                                                        <a className="btn btn-md-square rounded-circle me-0" href="#"><i className="fab fa-linkedin-in"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6 col-xl-3">
                                                <div className="footer-item">
                                                    <h4 className="text-white mb-4">Useful Links</h4>
                                                    <a href="/about" className="text-white"><i className="fas fa-angle-right me-2"></i> About Us</a>
                                                    <a href="/services" className="text-white"><i className="fas fa-angle-right me-2"></i> Services</a>
                                                    {/* <a href="/" className="text-white"><i className="fas fa-angle-right me-2"></i> FAQ's</a> */}
                                                    <a href="/contact" className="text-white"><i className="fas fa-angle-right me-2"></i> Contact</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6 col-xl-4">
                                                <div className="footer-item">
                                                    <h4 className="mb-4 text-white">Instagram</h4>
                                                    <div className="row g-3">
                                                        <div className="col-4">
                                                            <div className="footer-instagram rounded">
                                                                <img src="img/resized_instagram_1.jpeg" className="img-fluid w-100" alt=""></img>
                                                                <div className="footer-search-icon">
                                                                    <a href="https://www.instagram.com/p/DN_FlZ1E0mY/?igsh=MTEzaHllanR4eW85cw==" data-lightbox="footerInstagram-1" className="my-auto"><i className="fas fa-link text-white"></i></a>
                                                                </div>
                                                            </div>
                                                    </div>
                                                    <div className="col-4">
                                                            <div className="footer-instagram rounded">
                                                                <img src="img/instagram-2.jpeg" className="img-fluid w-100" alt=""></img>
                                                                <div className="footer-search-icon">
                                                                    <a href="https://www.instagram.com/p/DN9k5jGE32H/?igsh=dzlpODNyeDI5dHRj" data-lightbox="footerInstagram-2" className="my-auto"><i className="fas fa-link text-white"></i></a>
                                                                </div>
                                                            </div>
                                                    </div>
                                                        <div className="col-4">
                                                            <div className="footer-instagram rounded">
                                                                <img src="img/instagram-3.jpeg" className="img-fluid w-100" alt=""></img>
                                                                <div className="footer-search-icon">
                                                                    <a href="https://www.instagram.com/p/DN9j7uPE0XV/?igsh=ZXE1b3Y4NmFkamJy" data-lightbox="footerInstagram-3" className="my-auto"><i className="fas fa-link text-white"></i></a>
                                                                </div>
                                                            </div>
                                                    </div>
                                                        <div className="col-4">
                                                            <div className="footer-instagram rounded">
                                                                <img src="img/instagram-4.jpeg" className="img-fluid w-100" alt=""></img>
                                                                <div className="footer-search-icon">
                                                                    <a href="https://www.instagram.com/p/DIZyyfLzDfh/?igsh=MTFubmd5ZXhxaWlvNw==" data-lightbox="footerInstagram-4" className="my-auto"><i className="fas fa-link text-white"></i></a>
                                                                </div>
                                                            </div>
                                                    </div>
                                                        <div className="col-4">
                                                            <div className="footer-instagram rounded">
                                                                <img src="img/instagram-footer-5.jpg" className="img-fluid w-100" alt=""></img>
                                                                <div className="footer-search-icon">
                                                                    <a href="img/instagram-footer-5.jpg" data-lightbox="footerInstagram-5" className="my-auto"><i className="fas fa-link text-white"></i></a>
                                                                </div>
                                                            </div>
                                                    </div>
                                                    <div className="col-4">
                                                            <div className="footer-instagram rounded">
                                                                <img src="img/instagram-footer-6.jpg" className="img-fluid w-100" alt=""></img>
                                                                <div className="footer-search-icon">
                                                                    <a href="img/instagram-footer-6.jpg" data-lightbox="footerInstagram-6" className="my-auto"><i className="fas fa-link text-white"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-5" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                                        <div className="row g-0">
                                            <div className="col-12">
                                                <div className="row g-4">
                                                    <div className="col-lg-6 col-xl-4">
                                                        <div className="d-flex">
                                                            <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                                                                <i className="fas fa-map-marker-alt fa-2x"></i>
                                                            </div>
                                                            <div>
                                                                <h4 className="text-white">Address</h4>
                                                                <p className="mb-0 text-white">Hyderabad, Telangana</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-xl-4">
                                                        <div className="d-flex">
                                                            <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                                                                <i className="fas fa-envelope fa-2x"></i>
                                                            </div>
                                                            <div>
                                                                <h4 className="text-white">Mail Us</h4>
                                                                <p className="mb-0 text-white">ssagencies97@gmail.com</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-xl-4">
                                                        <div className="d-flex">
                                                            <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                                                                <i className="fa fa-phone-alt fa-2x"></i>
                                                            </div>
                                                            <div>
                                                                <h4 className="text-white">Telephone</h4>
                                                                <p className="mb-0 text-white">+91 995 139 4411</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-3">
                                    <div className="footer-item">
                                        <h4 className="text-white mb-4">Newsletter</h4>
                                        <p className="text-white mb-3">Subscribe with your email to stay updated on current offers, discounts, and exclusive deals.</p>
                                        <div className="position-relative rounded-pill mb-4">
                                            <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email"></input>
                                            <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                                        </div>
                                        <div className="d-flex flex-shrink-0">
                                            <div className="footer-btn">
                                                <button type="button" className="btn btn-lg-square rounded-circle position-relative wow tada" data-wow-delay=".9s" aria-label="Call">
                                                    <i className="fa fa-phone-alt fa-2x"></i>
                                                    <div className="position-absolute" style={{ top: '2px', right: '12px' }}>
                                                        <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="d-flex flex-column ms-3 flex-shrink-0">
                                                <span>Call to Our Experts</span>
                                                <a href="tel:+ 0123 456 7890"><span className="text-white">Free: + 91 995 139 4411</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer End */}

                    {/*** Copyright Start ***/}
                    {/* <div className="container-fluid copyright py-4">
                        <div className="container">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-6 text-center text-md-end mb-md-0">
                                    <span className="text-body"><a href="/home" className="border-bottom text-white"><i className="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                                </div>
                                <div className="col-md-6 text-center text-md-start text-body">
                                    Designed By <a className="border-bottom text-white" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a className="border-bottom text-white" href="https://themewagon.com">ThemeWagon</a>
                                </div> 
                            </div>
                        </div>
                    </div> */}


                    {/*- Back to Top */}
                   {isVisible && ( <button type="button" className="btn btn-primary btn-lg-square rounded-circle back-to-top" aria-label="Back to Top"  onClick={scrollToTop}><i className="fa fa-arrow-up"></i></button> )}
        </>
    );
}