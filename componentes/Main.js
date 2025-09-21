import styles from "../styles/Main.module.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs} from "react-icons/fa";



function Main(){
  return(
  <div className={styles.fundo1} id="sobre">
   <h2 className={styles.titulo}>Minhas skills</h2>
   <p className={styles.subtitulo}>
  Sou Davi Dias, apaixonado por tecnologia e desenvolvimento web.
   Atualmente curso Análise e Desenvolvimento de Sistemas, buscando evoluir diariamente como desenvolvedor front-end, com o objetivo de me tornar full stack.
   Acredito que a programação é uma ferramenta poderosa para transformar ideias em soluções reais, e estou sempre em busca de novos desafios e aprendizado.
</p>

   <div className={styles.iconCircle}>
  <div className="icon-circle">
  <FaJs color="#1781cdff" size={150} />
  <FaReact color="#61DAFB" size={150} />
  <FaGitAlt size={150} color="#61DAFB" />
  <FaNodeJs size={150} color="#1572B6" />
  </div>
  </div>

  </div>
  
);
}
export default Main;