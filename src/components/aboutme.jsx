import React, { useEffect } from "react";
import './css/navbar.css';
import './css/homebanner.css';
import './css/aboutme.css';
import img from '../assets/img/about.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaBootstrap,
	FaAngular,
	FaVuejs,
	FaLaravel,
	FaPython,
	FaJava
} from 'react-icons/fa';
import {
	SiTypescript,
	SiFirebase,
	SiJquery,
	SiSpringboot,
	SiTailwindcss,
	SiMongodb,
	SiPhp,
	SiC,
	SiExpress
} from 'react-icons/si';

function SiCsharp() {
	return null;
}

function About() {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<>
			<section id="about_area" className="about_area section_gap">
				<div  className="container-fluid" data-aos="fade-up">
					<div className="row justify-content-start align-items-center">
						<div className="col-lg-5">
							<div className="about_img">
								<img className="about" src={img} alt="About Me" />
							</div>
						</div>

						<div className="offset-lg-1 col-lg-5 space">
							<div className="main_title text-left">
								<h2>
									let’s <br/>
									Introduce about <br/>
									myself
								</h2>
								<p>
									Bonjour,
									Je m'appelle Houssam, et je suis étudiant en informatique. J'apprends actuellement
									plusieurs technologies comme Java, Spring Boot, Python, C#, Laravel, React, et
									d'autres outils de développement.
								</p>
								<p>
									J'aime travailler sur des projets, petits ou grands, pour améliorer mes compétences
									et explorer différentes facettes de la programmation.
								</p>
								<p>
									Merci de m'avoir permis de me présenter !
								</p>
								<h2>
									TECHNOLOGIES / Skills
								</h2>
								<div className="icons-container mt-4">
										<div className="icon-box" style={{color: "#E34F26"}}><FaHtml5/></div>
									<div className="icon-box" style={{color: "#1572B6"}}><FaCss3Alt/></div>
									<div className="icon-box" style={{color: "#F7DF1E"}}><FaJs/></div>
									<div className="icon-box" style={{color: "#ffffff"}}><FaJava/></div>
									<div className="icon-box" style={{color: "#61DAFB"}}><FaReact/></div>
									<div className="icon-box" style={{color: "#DD1B16"}}><FaAngular/></div>
									<div className="icon-box" style={{color: "#F05340"}}><FaLaravel/></div>
									<div className="icon-box" style={{color: "#6DB33F"}}><SiSpringboot/></div>
									<div className="icon-box" style={{color: "#3088de"}}><FaPython/></div>
									<div className="icon-box" style={{color: "#777BB4"}}><SiPhp/></div>
									<div className="icon-box" style={{color: "#2674cc"}}><SiC/></div>
									<div className="icon-box" style={{color: "#68A063"}}><SiExpress/></div>
									<div className="icon-box" style={{color: "#47A248"}}><SiMongodb/></div>
									<div className="icon-box" style={{color: "#06B6D4"}}><SiTailwindcss/></div>
									<div className="icon-box" style={{color: "#7952B3"}}><FaBootstrap/></div>
								</div>
								<a className="primary_btn" href="#"><span>Installer CV</span></a>
							</div>
						</div>
					</div>


				</div>
			</section>
		</>
	);
}

export default About;
