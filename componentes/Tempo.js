import styles from "../styles/Tempo.module.css"
import { useEffect, useState } from "react";

export default function Tempo() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/tempo")
      .then((res) => res.text())
      .then((html) => setData(html));
  }, []);

  return (
    <div>
      <h2 className={styles.tempo} dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}