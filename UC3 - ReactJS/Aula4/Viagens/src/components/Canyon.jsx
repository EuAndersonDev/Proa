import styles from "../css/Canyon.module.css";
import ComponenteProps from "./ComponenteProps";
import Bandeira_canyon from "../assets/imagens/usa.png";
import PropsForm from "../components/PropsForm";

function Canyon() {
  const variaveis = {
    lugar: "Grand Canyon",
    texto:
      "Este pais fantástico conta com encantos atemporais, com seus castelos medievais. Eles aguardam você para uma viagem inesquecivel!",
    bandeira: Bandeira_canyon,
  };
  return (
    <section className={styles.fundo_canyon}>
      <h1>Venha conhecer o Grand Canyon!</h1>
      <ComponenteProps
        lugar={variaveis.lugar}
        texto={variaveis.texto}
        bandeira={variaveis.bandeira}
      />
      <PropsForm />
    </section>
  );
}

export default Canyon;
