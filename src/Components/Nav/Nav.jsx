import React from "react";
import styles from "./Nav.module.css";
import Github from "../../assets/img/github.png";
import Linkeding from "../../assets/img/linkedin.png";
const Nav = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <h2>Portafolio </h2>
      </div>
      <div className={styles.Subcontainer}>
        <div className={styles.Links}>
          <p>Home</p>
          <p>Skills</p>
          <p>Proyects</p>
        </div>
        <div className={styles.Image}>
          <img src={Github} alt="Github" />
          <img src={Linkeding} alt="Linkeding" />
        </div>
        <div className={styles.boton}>
          <button>Let`s Connect</button>
        </div>
      </div>
    </div>
  );
};
export default Nav;
