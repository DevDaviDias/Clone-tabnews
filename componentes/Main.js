import { useState } from "react";
import styles from "../styles/Main.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

function Main() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${styles.fundo1} ${darkMode ? styles.dark : ""}`}
      id="sobre"
    >
      <h2 className={styles.titulo}>Minhas skills</h2>

      <div className={styles.conteudoMain1}>
        <p className={styles.subtitulo}>
          Sou Davi Dias, apaixonado por tecnologia e desenvolvimento web.
          Atualmente curso Análise e Desenvolvimento de Sistemas, buscando
          evoluir diariamente como desenvolvedor front-end, com o objetivo de me
          tornar full stack. Acredito que a programação é uma ferramenta
          poderosa para transformar ideias em soluções reais, e estou sempre em
          busca de novos desafios e aprendizado.
        </p>

        <div className={styles.iconCircle}>
          <FaJs color="#1572B6" size={60} />
          <FaReact color="#61DAFB" size={60} />
          <FaGitAlt color="#61DAFB" size={60} />
          <FaNodeJs color="#1572B6" size={60} />
        </div>
      </div>
    </div>
  );
}

export default Main;

//#1572B6"
//#61DAFB
