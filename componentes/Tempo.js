import styles from "../styles/Tempo.module.css"
import { useEffect, useState } from "react";

export default function Tempo() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const atualizarHora = () => {
      const agora = new Date();
      const horaAtual = agora.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      setHora(horaAtual);
    };

    atualizarHora(); // Atualiza imediatamente
    const timer = setInterval(atualizarHora, 1000); // Atualiza a cada 1s

    return () => clearInterval(timer); // Limpa o timer ao desmontar
  }, []);

  return (
      <h2 className={styles.tempo}>{hora}</h2> 
  );
}
