import { useState, useEffect } from "react";
import styles from "../styles/MenuHamburguer.module.css";

import Image from "next/image";

export default function MenuHamburguer() {
  const [aberto, setAberto] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMenu = () => {
    // Só alterna no mobile
    if (!isDesktop) setAberto(!aberto);
  };

  // Detecta largura da tela
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      setAberto(desktop); // Se for desktop, sempre aberto
    };

    handleResize(); // Executa na primeira renderização
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Alterna dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      {/* Botão Hambúrguer só no mobile */}
      {!isDesktop && (
        <div
          className={`${styles.hamburguer} ${aberto ? styles.ativo : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      )}

      {/* Menu Lateral */}
      <div
        className={`${styles.menuLateral} ${aberto ? styles.aberto : ""} ${
          darkMode ? styles.darkMode : ""
        }`}
      >
        {!isDesktop && (
          <button className={styles.btnFechar} onClick={toggleMenu}></button>
        )}

        {/* Avatar e nome */}
        <div className={styles.tituloIcone}>
         
              <div>
      <Image 
        src="/img.davi.jpg"   // está dentro da pasta public
        alt="Davi Dias"
        width={120}
        height={120}
        style={{
          borderRadius: "50%",
          border: "8px solid #293157" // sem ponto e vírgula
        }}
      />
    </div>
           
          
        </div>
        <h2 className={styles.titleName}>Davi Dias</h2>

        {/* Redes sociais */}
        <nav className={styles.navRedesSociais}>
          <a href="#" className={styles.icons}>
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#" className={styles.icons}>
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="#" className={styles.icons}>
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </nav>

        {/* Links */}
        <nav className={styles.menuLinks}>
          <a href="#sobre">
            <i className="fas fa-user icon-circle"></i> Sobre mim
          </a>
          <a href="#">
            <i className="fas fa-code icon-circle"></i> Minhas Skills
          </a>
          <a href="#">
            <i className="fas fa-graduation-cap icon-circle"></i> Formações
          </a>
          <a href="#">
            <i className="fas fa-folder-open icon-circle"></i> Meus Projetos
          </a>
        </nav>

        {/* Switch Dark Mode */}
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
        {/* Footer dentro do menu */}
        <div className={styles.footerMenu}>
          <p>© Copyright DaviDias</p>
        </div>
      </div>

        

      {/* Overlay só no mobile */}
      {!isDesktop && aberto && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
    </>
  );
}
