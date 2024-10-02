import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  // État pour contrôler si le menu est actif ou non
  const [navbarActive, setNavbarActive] = useState(false);

  // Fonction pour basculer l'état du menu
  const handleMenu = () => {
    setNavbarActive(!navbarActive); // Bascule entre actif/inactif
  };

  // Fonction pour fermer le menu lorsqu'un lien est cliqué
  const closeNav = () => {
    setNavbarActive(false); // Ferme le menu
  };

  return (
    <nav id="header">
        <div className="nav-logo">
            <p className="nav-name">
                Ousmane
            </p>
        </div>
      {/* Menu avec classe conditionnelle */}
      <div className={`nav-menu ${navbarActive ? "active" : ""}`} id="navMenu">
        <ul className="nav-menu-list">
          <li className="nav-list">
            <Link
              onClick={closeNav}
              activeClass="navbar-active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="home"
              className="nav-link"
            >
              Accueil
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav-list">
            <Link
              onClick={closeNav}
              activeClass="navbar-active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="about"
              className="nav-link"
            >
              A Propos
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav-list">
            <Link
              onClick={closeNav}
              activeClass="navbar-active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="skills"
              className="nav-link"
            >
              Competences
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav-list">
            <Link
              onClick={closeNav}
              activeClass="navbar-active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="projets"
              className="nav-link"
            >
              Projets
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav-list">
            <Link
              onClick={closeNav}
              activeClass="navbar-active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contact"
              className="nav-link"
            >
              Contact
            </Link>
            <div className="circle"></div>
          </li>
        </ul>
      </div>

      {/* Bouton pour télécharger le CV */}
      {/* <div className="nav-button">
        <button className="btn">
         Voir Mon CV <i className="uil uil-file-download"></i>
        </button>
      </div> */}

      {/* Bouton pour ouvrir/fermer le menu */}
      <div className="nav-menu-btn">
        <i className={`fa-solid ${navbarActive ? "fa-xmark" : "fa-bars"}`} onClick={handleMenu}></i>
      </div>
    </nav>
  );
}
