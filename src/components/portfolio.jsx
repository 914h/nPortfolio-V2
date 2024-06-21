import React from "react";
import './css/portfolio.css'
import p1 from '../assets/portfolio/p33.png'
import p2 from '../assets/portfolio/p44.png'
import p3 from '../assets/portfolio/CAB-DTR.png'
import p4 from '../assets/portfolio/p4.jpg'
import p5 from '../assets/img/M.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Skills() {
    return (
        <>
<section className="portfolio_area" id="portfolio">
    <div className="container" data-aos="fade-up">
        <div className="row">
            <div className="col-lg-12">
                <div className="main_title text-left">
                    <h2>
                        Portfolio <br />
                        Recently done projects
                    </h2>
                </div>
            </div>
        </div>
        <div className="filters-content">
            <div className="row portfolio-grid justify-content-center">
            <div className="col-md-6 portfolio_box">
                    <div className="single_portfolio">
                        <img className="img-fluid" id="portimg" src={p2} alt="" />
                        <div className="overlay"></div>
                        <a href="img/portfolio/p1.jpg" className="img-gal">
                            <div className="icon">
                                <span className="lnr lnr-cross"></span>
                            </div>
                        </a>
                    </div>
                    <div className="short_info">
                        <h4><a href="#">KENZAEYES</a></h4>
                        <p>Optique System Management</p>
                    </div>
                </div>
                <div className="col-md-6 portfolio_box">
                    <div className="single_portfolio">
                        <img className="img-fluid" id="portimg" src={p3} alt="" />
                        <div className="overlay"></div>
                        <a href="img/portfolio/p1.jpg" className="img-gal">
                            <div className="icon">
                                <span className="lnr lnr-cross"></span>
                            </div>
                        </a>
                    </div>
                    <div className="short_info">
                        <h4><a href="#">CABDTR</a></h4>
                        <p>Cabinet Dentiste Management</p>
                    </div>
                </div>
                <div className="col-md-6 portfolio_box">
                    <div className="single_portfolio">
                        <img className="img-fluid" id="portimg" src={p5} alt="" />
                        <div className="overlay"></div>
                        <a href="img/portfolio/p1.jpg" className="img-gal">
                            <div className="icon">
                                <span className="lnr lnr-cross"></span>
                            </div>
                        </a>
                    </div>
                    <div className="short_info">
                        <h4><a href="#">MoShop</a></h4>
                        <p>Store Management System</p>
                    </div>
                </div>

                <div className="col-md-6 portfolio_box">
                    <div className="single_portfolio">
                        <img className="img-fluid" id="portimg" src={p1} alt="" />
                        <div className="overlay"></div>
                        <a href="img/portfolio/p1.jpg" className="img-gal">
                            <div className="icon">
                                <span className="lnr lnr-cross"></span>
                            </div>
                        </a>
                    </div>
                    <div className="short_info">
                        <h4><a href="#">EduTasker</a></h4>
                        <p>School System Management</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            );
        </>
    );

}

export default Skills;
