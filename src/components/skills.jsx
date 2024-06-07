import React from "react";
import './css/skills.css'
import p1 from '../assets/services/s1.png'
import p2 from '../assets/services/s2.png'
import p3 from '../assets/services/s3.png'
import p4 from '../assets/services/s4.png'

function Skills() {
    return (
        <>
	<section className="features_area">
            <div className="container"  data-aos="fade-up">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="main_title">
                            <h2>Mes competence</h2>
                            <p>
                                Is give may shall likeness made yielding spirit a itself together created
                                after sea <br /> is in beast beginning signs open god you're gathering ithe
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row feature_inner">
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p1} alt="" />
                            <h4>Wp developing</h4>
                            <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p2} alt="" />
                            <h4>UI/ux design</h4>
                            <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p3} alt="" />
                            <h4>Web design</h4>
                            <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p4} alt="" />
                            <h4>seo optimize</h4>
                            <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Skills;
