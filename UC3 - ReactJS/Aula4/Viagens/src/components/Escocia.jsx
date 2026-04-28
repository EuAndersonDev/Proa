import React from "react";
import styles from "../css/Escocia.module.css";
import ComponenteProps from "./ComponenteProps";
import Bandeira_escocia from "../assets/imagens/escocia.png";
import PropsForm from "../components/PropsForm";

function Escocia() {
  const variaveis = {
    lugar: "Escócia",
    texto:
      "Este pais fantástico conta com encantos atemporais, com seus castelos medievais. Eles aguardam você para uma viagem inesquecivel!",
    bandeira: Bandeira_escocia,
  };

  return (
    <section className={styles.fundo_escocia}>
      <h1>Venha conhecer a Escócia</h1>
      <ComponenteProps
        lugar={variaveis.lugar}
        texto={variaveis.texto}
        bandeira={variaveis.bandeira}
      />
      <PropsForm />
    </section>
  );
}

export default Escocia;
