import React from "react";
import './css/portfolio.css'
import p1 from '../assets/portfolio/p1.jpg'
import p2 from '../assets/portfolio/p2.jpg'
import p3 from '../assets/portfolio/p3.jpg'
import p4 from '../assets/portfolio/p4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Skills() {
    return (
        <>
            <section className="portfolio_area" id="portfolio">
                <div className="container"  data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title text-left">
                                <h2>
                                    quality work <br />
                                    Recently done project
                                </h2>
                            </div>
                        </div>
                        <div className="filters-content">
                            <div className="row portfolio-grid justify-content-center">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                        <img className="img-fluid" src={p1} alt="" />
                                        <div className="overlay"></div>
                                        <a href="img/portfolio/p1.jpg" className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="single_portfolio">
                                        <img className="img-fluid" src={p1} alt="" />
                                        <div className="overlay"></div>
                                        <a href="img/portfolio/p1.jpg" className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="single_portfolio">
                                        <img className="img-fluid" src={p1} alt="" />
                                        <div className="overlay"></div>
                                        <a href="img/portfolio/p1.jpg" className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="short_info">
                                        <h4><a href="portfolio-details.html">minimal design</a></h4>
                                        <p>Animated, portfolio</p>
                                    </div>
                                </div>
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                        <img className="img-fluid" src={p2} alt="" />
                                        <div className="overlay"></div>
                                        <a href="img/portfolio/p1.jpg" className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="short_info">
                                        <h4><a href="portfolio-details.html">minimal design</a></h4>
                                        <p>Animated, portfolio</p>
                                    </div>
                                </div>

                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                        <img className="img-fluid" src={p3} alt="" />
                                        <div className="overlay"></div>
                                        <a href="img/portfolio/p1.jpg" className="img-gal">
                                            <div className="icon">
                                                <span className="lnr lnr-cross"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="short_info">
                                        <h4><a href="portfolio-details.html">minimal design</a></h4>
                                        <p>Animated, portfolio</p>
                                    </div>
                                </div>
                            </div>
                            {/* Add more portfolio items here */}
                        </div>
                    </div>
                </div>
            </section>
            );
        </>
    );

}

export default Skills;
