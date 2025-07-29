import { Component } from "react";
import Header from"../componentes/Header";
import Main from"../componentes/Main";
import Tempo from "../componentes/Tempo";
import MenuHamburguer from "../componentes/MenuHamberguer";




function Home() {
  return(
    <div >
      <MenuHamburguer/>
      <Header/>
      <Main/>
      <Tempo/>
      
    </div>

  );
}


export default Home;


