import { useState, useEffect } from "react";
import styles from "../styles/MenuHamburguer.module.css";

export default function MenuHamburguer() {
  const [aberto, setAberto] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setAberto(!aberto);

  // Alterna o tema adicionando/removendo a classe no body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      {/* Botão Hambúrguer */}
      <div
  className={`${styles.hamburguer} ${aberto ? styles.ativo : ""}`}
  onClick={toggleMenu}
>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Menu Lateral */}
      <div className={`${styles.menuLateral} ${aberto ? styles.aberto : ""}`}>
        <button className={styles.btnFechar} onClick={toggleMenu}></button>
        
        {/* Avatar e nome */}
        <div className={styles.tituloIcone}>
          <i className="fas fa-user-circle fa-2x"></i>
        </div>
        <h2 className={styles.titleName}>Davi Dias</h2>

        {/* Redes sociais */}
        <nav className={styles.navRedesSociais}>
          <a href="#" className={styles.icons}><i className="fab fa-instagram fa-2x"></i></a>
          <a href="#" className={styles.icons}><i className="fab fa-github fa-2x"></i></a>
          <a href="#" className={styles.icons}><i className="fab fa-linkedin fa-2x"></i></a>
        </nav>

        {/* Links do menu */}
        <nav className={styles.menuLinks}>
          <a href="#"><i className="fas fa-user icon-circle"></i> Sobre mim</a>
          <a href="#"><i className="fas fa-code icon-circle"></i> Minhas Skills</a>
          <a href="#"><i className="fas fa-graduation-cap icon-circle"></i> Formações</a>
          <a href="#"><i className="fas fa-folder-open icon-circle"></i> Meus Projetos</a>
        </nav>

        {/* Switch de Dark Mode no final do menu */}
        <div className={styles.darkModeSwitch}>
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>

      {/* Fundo escurecido */}
      {aberto && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </>
  );
}
