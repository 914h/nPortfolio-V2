import React from "react";
import './css/skills.css'
import p1 from '../assets/services/s1.png'
import p2 from '../assets/services/s2.png'
import p3 from '../assets/services/s3.png'
import p4 from '../assets/services/s4.png'

function Services() {
    return (
        <>
	<section className="features_area">
            <div className="container"  data-aos="fade-up">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="main_title">
                            <h2>Mes Services et Compétences</h2>
                            <p>
                                Fort de mes compétences techniques, je vous propose des solutions innovantes et adaptées à vos besoins pour concrétiser vos projets numériques avec succès.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row feature_inner">
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p1} alt="" />
                            <h4>Développement Full-Stack </h4>
                            <ul>
                                <li>Expertise avérée en technologies front-end (React.js, Angular) et back-end (Spring Boot, Laravel, ExpressJs).</li>
                                <li>Conception et développement d'applications web robustes, performantes et évolutives.</li>
                                <li>Intégration d'APIs RESTful et implémentation de systèmes d'authentification sécurisés.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p2} alt="" />
                            <h4>Frameworks & Outils </h4>
                            <ul>
                                <li>Maîtrise des frameworks back-end modernes : Spring Boot, ExpressJs, Laravel.</li>
                                <li>Compétence dans les frameworks front-end populaires : React.js, Angular.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p3} alt="" />
                            <h4>Design & Interface</h4>
                            <ul>
                                <li>Création d'interfaces utilisateur esthétiques, intuitives et responsives.</li>
                                <li>Application rigoureuse des principes fondamentaux de l'UX/UI design.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature_item">
                            <img src={p4} alt="" />
                            <h4>Gestion de Données </h4>
                            <ul>
                                <li>Conception, modélisation et gestion efficace de bases de données (MySQL, MongoDB).</li>
                                <li>Optimisation des requêtes et intégrité des données pour des performances optimales.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footer_area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <p className="contact_info">
                            <a href="tel:+212671934799">Téléphone: (+212 671934799)</a><br/>
                            <a href="mailto:aouladabdnouur@gmail.com">Email: aouladabdnouur@gmail.com</a><br/>
                            Tetouan, Morocco
                        </p>
                        <p className="copyright_text">
                            Copyright © {new Date().getFullYear()} Tous droits réservés | Développé par Aoulad Abdennour Houssam 
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Services;
