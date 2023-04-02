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
          <a className={styles.link} href="">
            <img className={styles.linkIcon} src={Github} alt="Github" />
            <span className={styles.title}>Github</span>
          </a>
          <a className={styles.link} href="">
            <img className={styles.linkIcon} src={Linkeding} alt="Linkeding" />
            <span className={styles.title}> Linkeding</span>
          </a>
        </div>
        <div className={styles.boton}>
          <button>Let`s Connect</button>
        </div>
      </div>
    </div>
  );
};
export default Nav;
