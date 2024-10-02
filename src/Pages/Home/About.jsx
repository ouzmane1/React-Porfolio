export default function About() {

    const handleClickCV = () =>{
        window.open("./doc/CV_2024-10-02_Ousmane_Ndome.pdf")
    }

    return (
      <section className="about" id="about">
          <div className="header">
              <h2> A propos</h2>
          </div>
          <div className="about-infos">
                <div className="about-img">
                  <img src="./assets/img/businessman.webp" alt="" />
                </div>

                <div className="about-content">
                    {/* <h2 className="title">A propos de moi</h2> */}
                  <h3>Apprenti développeur</h3>
                  <p>Au cour de ma formation j'ai l'opportunité de travailler sur differentes 
                    technologies comme PHP, JS, Python..., et des Framework comme Laravel, React, Django...
                    qui m'ont permis de développer des projets aussi bien coté Back-end que Front-end.
                    Durant Durant mon stage de 1ère année j'ai intégré Innovative Labs au titre 
                    de développeur d'application. J'ai occupé ce poste durant 8 semaines. J'ai ensuite 
                    rejoint Learning Systems pour le poste d'Assistant responsable des SI dans le quel j'ai put 
                    développer des compétences dans la gestion des SI et d'assistance technique.
                    Récemment j'ai participé à un projet ou j'ai développer une application web 
                    E-commerce, ce qui m'a permis d'acquerir des compétences en gestion de base de donnée
                    et en création d'interfaces utilasateur.
                  </p>
                  <button className='btn' onClick={handleClickCV}>Consulter Mon CV <i className="fa-solid fa-file-arrow-down"></i></button>
                </div>
            </div>
          
       
        
      </section>
  
    )
  }
  