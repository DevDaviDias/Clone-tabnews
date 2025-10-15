import loadCustomRoutes from "next/dist/lib/load-custom-routes";
import React from "react";
import styles from "../styles/Section1.module.css";

const experiencias = [
  {
    cargo: "Professor de Ti",
    empresa: "Escola Estadual Maria Vicênicia brandão",
    periodo: "2025 - Atual",
    descricao:
      "Ministrei aulas de informática básica, programação e redes de computadores para alunos do ensino médio e técnico.",
  },
  {
    cargo: "Auxiliar de produção",
    empresa: "Samarco",
    periodo: "2023 - 2024",
    descricao:
      "Atuei na linha de produção garantindo eficiência e qualidade nos processos industriais.",
  },
];

export default function Section1() {
  return (
    <div className={styles.section1}>
      <div className={styles.conteudoSection1}>
        <h1>{"Experiências"}</h1>

        <div className={styles.experiencias}>
          {experiencias.map(({ cargo, empresa, periodo, descricao }, index) => (
            <div>
              <div key={index} className={styles.experiencias1}>
                <h3>{cargo}</h3>
                <p>{empresa}</p>
                <p> {periodo}</p>
                <p> {descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//area para experoiencias
