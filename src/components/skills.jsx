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
                            <h4>Développement Full-Stack </h4>
                            <p>- Expertise en technologies front-end et back-end </p>
                            <p>- Développement d'applications web performantes et évolutives</p>
                            <p>- Intégration des APIs RESTful et mise en place de systèmes d'authentification sécurisés</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p2} alt="" />
                            <h4>Frameworks & Outils </h4>
                            <p>
                                - Maîtrise des frameworks modernes Back-End : <br/> Spring Boot, ExpressJs, Laravel <br/><br/>
                                - Maîtrise des frameworks modernes Front-End : <br/> React.js, Angular <br/>

                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p3} alt="" />
                            <h4>Design & Interface</h4>
                            <p>
                                Création d'interfaces utilisateur responsives <br/>
                                Application des principes de l'UX/UI design
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p4} alt="" />
                            <h4>Bases de Données </h4>
                            <p>
                                Conception et gestion de bases de données MySQL, MongoDB <br/>
                                Optimisation des requêtes et modélisation des données

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Skills;
