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
									Houssam est un professionnel dévoué et compétent dans le domaine de l'ingénierie informatique. Son expertise lui permet de fournir des solutions logicielles et matérielles de haute qualité.
									 Avec une passion pour la technologie et une attention méticuleuse aux détails, Houssam est capable de développer et de mettre en œuvre avec précision des algorithmes et des systèmes complexes.
								</p>
								<p>
								Son expérience et son professionnalisme garantissent des solutions logicielles efficaces et fiables qui répondent aux exigences souhaitées. Faites confiance à Houssam pour tous vos besoins en ingénierie informatique et découvrez la puissance de la technologie innovante.

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
