import { Component } from "react";
import Header from "../componentes/Header";
import Main from "../componentes/Main";
import Section from "../componentes/Section3";
import Section1 from "../componentes/Section1";
import Section2 from "../componentes/Section2";
import Tempo from "../componentes/Tempo";
import MenuHamburguer from "../componentes/MenuHamberguer";
import Footer from "../componentes/Footer";

function Home() {
  return (
    <div>
      <MenuHamburguer />
      <Header />
      <Main />
     <Section1/>
      <Section2 />
      <Section />
      <Footer />
    </div>
  );
}

export default Home;
