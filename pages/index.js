import { Component } from "react";
import Header from"../componentes/Header";
import Main from"../componentes/Main";
import Section from"../componentes/Section";
import Tempo from "../componentes/Tempo";
import MenuHamburguer from "../componentes/MenuHamberguer";
import Footer from "componentes/Footer";




function Home() {
  return(
    <div >
      <MenuHamburguer/>
      <Header/>
      <Main/>
      <Section/>
      <Footer/>
      
    </div>

  );
}


export default Home;


