import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import BowlImage from '../assets/images/bowl_cropped.png';

export default function HeroSection(){
    return(
        <>
        <div id="hero_section">
            <div className="container py-5 my-md-5 mt-0 mb-3">
                <div className="row">
                    <div className="col-md-7 col-12">
                        <div className="hero_section_content d-flex flex-column gap-4">
                            <h1 className="main_headline_text fw-bolder" data-aos="fade-right" >
                                Step Into A Greener Tomorrow With
                                <span className="special_text">GoGreenVerz</span>
                            </h1>
                            <p className="d-md-block d-none" data-aos="fade-right" data-aos-duration="1500">
                                Elevate your business with cleantech solutions for a brighter
                                future. <br />
                                Boost your online reach with EcoTechHub's
                                sustainability-driven <br />
                                digital expertise.
                            </p>
                            <p className="d-md-none d-block" data-aos="fade-right" data-aos-duration="1500">
                                Elevate your business with cleantech solutions for a brighter
                                future. Boost your online reach with EcoTechHub's
                                sustainability-driven digital expertise.
                            </p>
                            <div className="d-flex gap-3" data-aos="fade-right" data-aos-duration="2000">
                                <Link to="/contact" className="contact_us_btn px-3 py-2 rounded-2 fw-bold">Contact Us</Link>
                                <Link to="/" className="learn_more_btn text-decoration-none px-3 py-2 rounded-2 fw-bold">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-12">
                        <div className="" data-aos="fade-left" data-aos-duration="2500">
                            <img src={BowlImage} className="eco_globe_img eco_shake" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}