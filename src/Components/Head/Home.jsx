import React from "react";
import styles from "./Home.module.css";
import Github from "../../assets/img/github.png";

function Home() {
  return (
    <>
      {""}
      <div className={styles.container}>
        <div className={styles.section}>
          <img className={styles.image} src={Github} alt="" />
          <div>
            <h1 className={styles.titulo}>Soy ignacio Developer </h1>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.subtitulo}>Sobre Mi</h2>
          <p className={styles.parrafo}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nobis
            quis perspiciatis eum facere, ex sit culpa dolorum. Et impedit
            doloremque quia eligendi perspiciatis corrupti minima saepe dolorem
            doloribus rem.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
