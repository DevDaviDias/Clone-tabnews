//area para cursos e certificados 

import styles from "../styles/Section.module.css";

function Section2() {
  return (
    <div className={styles.fundo2} id="cursos">
      <h2 className={styles.titulo}>Meus Cursos e Certificados</h2>

      <div className={styles.grid}>
          <div key={id} className={styles.card}>
            <img src={image} alt={title} className={styles.imagem} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noreferrer">
              Ver Curso/Certificado
            </a>
          </div>
      </div>
    </div>
  );
}

export default Section2;