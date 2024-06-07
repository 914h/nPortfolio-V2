import React from "react";
import './css/navbar.css'
import './css/homebanner.css'
import logo from '../assets/img/logo.png'
import homeimg from '../assets/img/banner/houssam.png'
import anaa from '../assets/img/ana.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Home() {

    return (
        <>
        <div className="home" >
            <header className="header_area"   >

                <nav className="navbar navbar-expand-lg navbar-light" data-aos="fade-up"  data-aos-duration="1000">
                    <div className="container">

                        <a className="navbar-brand logo_h" href="index.html"><img src={logo} className="logow" alt="" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav justify-content-end">
                                <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="home_banner_area">
                <div className="banner_inner" data-aos="fade-up"  data-aos-duration="1000">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner_content">
                                    <h3 className="text-uppercase">Salut</h3>
                                    <h1 className="text-uppercase">I'm Houssam</h1>
                                    <h5 className="text-uppercase">Genie info developer</h5>
                                    <div className="d-flex align-items-center">
                                        <a className="primary_btn" href="#"><span>Hire Me</span></a>
                                        <a className="primary_btn tr-bg" href="#"><span>Get CV</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="home_right_img">
                                    <img src={homeimg} width="111%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

</div>


        </>
    );
}

export default Home;
