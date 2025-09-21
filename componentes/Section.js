import styles from "../styles/Section.module.css";

function Section(){
  const Projetos =[
    {
      id: 1,
      titulo:"verifica boletos",
      descricao:"Platafroma feita com next react e postgres",
      link: "https://github.com/DevDaviDias"
    },
     {
      id: 1,
      titulo:"verifica boletos",
      descricao:"Platafroma feita com next react e postgres",
      link: "https://github.com/DevDaviDias"
    },
     {
      id: 1,
      titulo:"verifica boletos",
      descricao:"Platafroma feita com next react e postgres",
      link: "https://github.com/DevDaviDias"
    }

    
  ];

  return(
  <div className={styles.fundo2} id="projetos">
   <h2 className={styles.titulo}>Meus Projetos</h2>
   <div className={styles.grid}>
    {Projetos.map((projeto)=>(
      <div key={projeto.id} className={"style.card"}>
        <h3>{projeto.titulo}</h3>
        <p>{projeto.descricao}</p>
        <a href="projeto.link" target="_blank" rel="noreferrer">Ver Projeto</a>
      </div>
  ))}
   </div>
  </div>
  
);
}
export default Section;