import React from 'react'
import { useEffect, useRef } from "react";
import Typed from 'typed.js';

export default function Profile() {

    const handleClicklinkedin = () => {
        window.open("https://www.linkedin.com/in/ousmane-ndome-655984258/", "_blank", "noopener,noreferrer");
      };
    
      const handleClickgithub = () => {
        window.open("https://github.com/ouzmane1", "_blank", "noopener,noreferrer");
      };

      const handleClickCV = () => {
        window.open("./doc/CV_2024-10-02_Ousmane_Ndome.pdf")
      }
    
      // // Création une référence pour l'élément qui contiendra le texte "typed"
      const typedRef = useRef(null);

      useEffect(() => {
        // Options pour Typed.js
        const options = {
          strings: ["Étudiant en", "Bachelor DEV"],
          typeSpeed: 80,  // Vitesse de frappe
          backSpeed: 80,  // Vitesse de suppression
          startDelay: 100, // Délai avant que le typing commence
          loop: true       // Boucle infinie
        };
    
        // Initialise Typed.js sur l'élément ciblé par le ref
        const typed = new Typed(typedRef.current, options);
    
        // Nettoyage lors du démontage du composant
        return () => {
          typed.destroy();
        };
      }, []); // Le tableau vide [] signifie que l'effet ne s'exécute qu'une fois après le montage
    

  return (
  <section id='home' className='profile-section'>
    <div className="profile-section-text">
      <div className="profile-section-text-card">
        <span>Ousmane Ndome</span>
      </div>
      <div className="profile-section-name">
        <p>Je suis <span className='typed-text' ref={typedRef}></span></p>
      </div>
      <div className="profile-section-text-infos">
      <p> Étudiant passionné par le développement, 
          je suis actuellement en 3ème année de Bachelor à Efrei Paris. 
          Mon intérêt pour le développement logiciel s'accompagne d'une volonté d'apprendre 
          de nouvelles technologies et d'améliorer continuellement mes compétences. 
      </p>
      </div>
      <div className="profile-section-text-btn">
        <a href="#contact"><button className='btn btn-color'>Me Contacter</button></a>
        <button className='btn' onClick={handleClickCV}>Consulter Mon CV <i className="fa-solid fa-file-arrow-down"></i></button>
      </div>
      <div className="icons">
        <div className="icon" onClick={handleClicklinkedin}><i className="fa-brands fa-linkedin-in"></i></div>
        <div className="icon" onClick={handleClickgithub}><i className="fa-brands fa-github"></i></div>
      </div>

    </div>
    <div className="profile-image">
      <div className="image">
      <img src="./assets/img/profil.jpg" alt="profil" />
      </div>
    </div>
  </section>
  );
}
