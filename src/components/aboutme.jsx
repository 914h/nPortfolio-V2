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
	FaJava,
	FaLinkedin,
	FaFlask
} from 'react-icons/fa';
import {
	SiTypescript,
	SiFirebase,
	SiJquery,
	SiSpringboot,
	SiTailwindcss,
	SiMongodb,
	SiPhp,
	SiExpress,
	SiC
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
									À propos de moi
								</h2>
								<p>
									Je m'appelle Houssam et je suis étudiant en informatique passionné par le développement logiciel. Actuellement, je me forme et me perfectionne sur différentes technologies telles que Java, Spring Boot, Python, C#, Laravel, React, et bien d'autres outils modernes du développement web et logiciel.
								</p>
								<p>
									J'apprécie particulièrement travailler sur des projets variés, qu'ils soient personnels ou collaboratifs, afin de renforcer mes compétences techniques, découvrir de nouveaux domaines et relever des défis stimulants.
								</p>
								<p>
									N'hésitez pas à me contacter pour toute opportunité de collaboration ou d'échange professionnel.
								</p>
								<h2>
									Technologies / Compétences
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
								<div style={{display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '38px'}}>
									<a className="primary_btn tr-bg" href="#"><span>Télécharger le CV</span></a>
									<a className="primary_btn tr-bg" href="https://www.linkedin.com/in/abdennour-houssam/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center'}}>
										<span style={{display: 'flex', alignItems: 'center'}}>
											<FaLinkedin style={{marginRight: '6px', color: '#0A66C2', fontSize: '18px'}} />
											LinkedIn
										</span>
									</a>
									<a className="primary_btn tr-bg" href="https://github.com/914" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center'}}>
										<span style={{display: 'flex', alignItems: 'center'}}>
											<svg style={{marginRight: '6px'}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#222" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
											GitHub
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>


				</div>
			</section>
		</>
	);
}

export default About;
