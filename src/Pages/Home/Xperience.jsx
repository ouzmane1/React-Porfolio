import React from 'react';


export default function Xperience() {
  return (
    <section className="projets" id="projets">
      <div className="portfolio--container-box">
       <div className="portfolio--container">
          <h2 className="section--heading">Mes Projets</h2>
        </div>
        <div>
          <a href="https://github.com/ouzmane1" className="text-sm-portfolio--link" target="_blank" rel="noopener noreferrer">
               Mon Github
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="16"
                   height="16"
                   viewBox="0 0 20 19"
                   fill="none"
                 >
                   <path
                     d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                     stroke="currentColor"
                     stroke-width="2.66667"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                   />
                 </svg>
               </a>             
        </div>
      </div>
      
      <div className="projets-container">
        <div className="projets-box">
          <img src="./assets/img/accueil.PNG" alt=" image projet" />
          <div className="projets-description">
            <h4>Application Ecommerce</h4>
            <p>Durant ce projet j'ai développé un site e-commerce avec le framework Laravel.</p>
            <a href="https://github.com/ouzmane1/LaravelSite" target="_blank" rel="noopener noreferrer">
              <i class="fa-solid fa-up-right-from-square"></i></a>
          </div>
        </div>

        <div className="projets-box">
          <img src="./assets/img/appli.png" alt=" image projet" />
          <div className="projets-description">
            <h4>Application Android</h4>
            <p>Dans ce projet j'ai développé une application mobile avec Android studio qui communique avec la base donnée de Odoo.</p>
            <a href="https://github.com/ouzmane1/AppliAndroid" target="_blank" rel="noopener noreferrer">
              <i class="fa-solid fa-up-right-from-square"></i></a>
          </div>
        </div>

        <div className="projets-box">
          <img src="./assets/img/woocommerce.png" alt=" image projet" />
          <div className="projets-description">
            <h4>Site de vente</h4>
            <p>Dans ce tp j'ai pu apprendre à développer un site de vente via wordpress avec l'extension woocommerce.</p>
            <a href="">
              <i class="fa-solid fa-up-right-from-square"></i></a>
          </div>
        </div>

      </div>
    </section>
  );
}
