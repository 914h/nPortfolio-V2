import React from "react";
import './css/portfolio.css'
import p1 from '../assets/portfolio/p33.png'
import p2 from '../assets/portfolio/p44.png'
import p3 from '../assets/portfolio/CAB-DTR.png'
import p4 from '../assets/portfolio/p4.jpg'
import p5 from '../assets/portfolio/SecureVaultLogo.png'
import p6 from '../assets/portfolio/immob.png'
import p7 from '../assets/portfolio/care.png'
import p8 from '../assets/portfolio/images.png'
import p9 from '../assets/portfolio/mm.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaReact, FaLaravel, FaJava, FaPython } from 'react-icons/fa';
import { SiSpringboot, SiPhp, SiFlask } from 'react-icons/si';

const projects = [
  {
    image: p6,
    name: 'BabImmob Pfe',
    title: 'Plateforme immobilière',
    description: "Projet de fin d'études : plateforme web pour la gestion et la recherche de biens immobiliers.",
    tech: [<div className="portfolio-tech-icon" key="react"><FaReact style={{color:'#61DAFB'}} /></div>, <div className="portfolio-tech-icon" key="laravel"><FaLaravel style={{color:'#F05340'}} /></div>]
  },
  {
    image: p1,
    name: 'EduTasker',
    title: 'School System Management',
    description: "Plateforme de gestion scolaire pour la gestion des élèves, enseignants, emplois du temps et notes.",
    tech: [<div className="portfolio-tech-icon" key="react"><FaReact style={{color:'#61DAFB'}} /></div>, <div className="portfolio-tech-icon" key="laravel"><FaLaravel style={{color:'#F05340'}} /></div>]
  },
  {
    image: p7,
    name: 'Medical App',
    title: 'Application médicale (React & Spring Boot)',
    description: "Application web pour la gestion des dossiers médicaux, rendez-vous et suivi des patients.",
    tech: [<div className="portfolio-tech-icon" key="react"><FaReact style={{color:'#61DAFB'}} /></div>, <div className="portfolio-tech-icon" key="springboot"><SiSpringboot style={{color:'#6DB33F'}} /></div>]
  },
  {
    image: p5,
    name: 'Secure Vault',
    title: 'Password Management System',
    description: "Gestionnaire sécurisé de mots de passe pour stocker et organiser vos identifiants en toute sécurité.",
    tech: [<div className="portfolio-tech-icon" key="java"><FaJava style={{color:'#007396'}} /></div>]
  },
  {
    image: p2,
    name: 'KENZAEYES',
    title: 'Optique System Management',
    description: "Application de gestion d'optique pour la gestion des clients, commandes et stocks.",
    tech: [<div className="portfolio-tech-icon" key="php"><SiPhp style={{color:'#777BB4'}} /></div>]
  },
  {
    image: p8,
    name: 'Reddit Forum',
    title: 'Forum communautaire (Flask)',
    description: "Forum de discussion inspiré de Reddit, développé avec Flask pour l'échange et le partage d'idées.",
    tech: [<div className="portfolio-tech-icon" key="python"><FaPython style={{color:'#3088de'}} /></div>, <div className="portfolio-tech-icon" key="flask"><SiFlask style={{color:'#000'}} /></div>]
  },
  {
    image: p9,
    name: 'Gestion de Stock',
    title: 'Application C# (Vente & Stock)',
    description: "Logiciel de gestion des ventes et des stocks développé en C# pour les petites entreprises.",
    tech: [<div className="portfolio-tech-icon" key="csharp" style={{color:'#239120', fontWeight:'bold'}}>C#</div>]
  }
];

function Portfolio() {
  return (
    <section id="portfolio_area" className="portfolio_area">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12">
            <div className="main_title text-left">
              <h2>Projets récemment réalisés</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" style={{gap: '24px 0'}}>
          {projects.map((project, idx) => (
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch" key={idx}>
              <div className="card portfolio-card" style={{width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', borderRadius: '18px', overflow: 'hidden', margin: '12px 8px', background: '#fff'}}>
                <img src={project.image} alt={project.name} className="card-img-top" style={{height: '220px', objectFit: 'cover'}} />
                <div className="card-body" style={{padding: '1.5rem'}}>
                  <h4 className="card-title" style={{fontWeight: 700, marginBottom: '0.5rem'}}>{project.name}</h4>
                  <h6 className="card-subtitle mb-2 text-muted" style={{marginBottom: '0.75rem'}}>{project.title}</h6>
                  <p className="card-text" style={{fontSize: '1rem', color: '#444'}}>{project.description}</p>
                  <div style={{marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '10px'}}>{project.tech}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
