import styles from "../css/Muralha.module.css";
import ComponenteProps from "./ComponenteProps";
import Bandeira_china from "../assets/imagens/china.png";
import PropsForm from "../components/PropsForm";

function Muralha() {
  const variaveis = {
    lugar: "Muralha da China",
    texto:
      "A Muralha da China é uma das maiores obras de engenharia do mundo, com mais de 21.000 km de extensão, construída para proteger o território chinês de invasões e consolidar o império.",
    bandeira: Bandeira_china,
  };

  return (
    <section className={styles.fundo_muralha}>
      <h1>Venha conhecer a grande Muralha da China!</h1>
      <ComponenteProps
        lugar={variaveis.lugar}
        texto={variaveis.texto}
        bandeira={variaveis.bandeira}
      />
      <PropsForm />
    </section>
  );
}

export default Muralha;
