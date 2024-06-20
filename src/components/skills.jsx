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
                            <h4>WEB  developing</h4>
                            <p>Un développeur web compétent doit être à l'aise avec plusieurs langages de programmation Du front/Back End</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p2} alt="" />
                            <h4>Frameworks</h4>
                            <p>En plus des langages de base, il est important de maîtriser les frameworks et bibliothèques populaires tels que React.js, Angular.js ou Vue.js pour le développement front-end, ainsi que des frameworks back-end comme laravel, Django ou express.js ...</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p3} alt="" />
                            <h4>Web design</h4>
                            <p>Un concepteur web compétent doit avoir une compréhension approfondie des principes de design tels que la hiérarchie visuelle, la typographie, la couleur, l'équilibre et la convivialité.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p4} alt="" />
                            <h4>Compréhension des bases de données </h4>
                            <p> Un développeur web doit être capable de concevoir et de gérer des bases de données pour stocker et récupérer les données utilisées par les applications web. Des connaissances sur des technologies de bases de données telles que MySQL, MongoDB ou PostgreSQL sont indispensables.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Skills;
