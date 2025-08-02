import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const fullText = "Full-Stack";

  useEffect(() => {
    const interval = setInterval(() => {
      if (!deleting) {
        // Digitando
        setText(fullText.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index + 1 === fullText.length) {
          setDeleting(true);
        }
      } else {
        // Apagando
        setText(fullText.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index - 1 === 0) {
          setDeleting(false);
        }
      }
    }, 250);

    return () => clearInterval(interval);
  }, [index, deleting]);

  return (
    <div className={styles.fundo}>
      <div className={styles.titleCenter}>
      <h1 className={styles.titulo}>Davi Dias</h1>
      <h2 className={styles.subtitulo}>
        Developer <span className={styles.typing}>{text}</span>
        <span className={styles.cursor}>|</span>
      </h2>
      </div>
    </div>
  );
}
