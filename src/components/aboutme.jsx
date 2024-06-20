import React, { useEffect } from "react";
import './css/navbar.css'
import './css/homebanner.css'
import './css/aboutme.css'
import img from '../assets/img/about.png'
import homeimg from '../assets/img/banner/home-right.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {
	useEffect(()=>{
		Aos.init();
	}, [])
	return (
		<>
			<section className="about_area section_gap">
				<div className="container-fluid" data-aos="fade-up" >
					<div className="row justify-content-start align-items-center">
						<div className="col-lg-5">
							<div className="about_img">
								<img className="about" src={img} alt="" />
							</div>
						</div>

						<div className="offset-lg-1 col-lg-5 space">
							<div className="main_title text-left">
								<h2>let’s <br />
									Introduce about <br />
									myself</h2>
								<p>
								Bonjour, je suis Aoulad Abdennour Houssam, un étudiant en deuxième année à l'Institut Supérieur de Génie Informatique. Je suis passionné par la technologie et je souhaite partager mes projets réalisés cette année. 
								<p>
								Avec mon dévouement et mon attention méticuleuse aux détails, j'ai développé des solutions logicielles et matérielles de haute qualité. Faites confiance à mon expertise pour découvrir la puissance de la technologie innovante.</p>

								</p>
								<a className="primary_btn" href="#"><span>Download CV</span></a>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>

		
	);
}

export default About;
