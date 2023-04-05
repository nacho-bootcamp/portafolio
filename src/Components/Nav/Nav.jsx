import React, { useState } from "react";
import styles from "./Nav.module.css";
import Github from "../../assets/img/github.png";
import Linkeding from "../../assets/img/linkedin.png";
const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.Container}>
      <div className={styles.Logo}>
        <h2>Portafolio </h2>
      </div>
      <div className={styles.Subcontainer}>
        <div className={styles.Links}>
          <a href="#profile">Home</a>
          <a href="#skills">Skills</a>
          <a href="#proyect">Proyects</a>
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

        <div className={styles.toggle} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
