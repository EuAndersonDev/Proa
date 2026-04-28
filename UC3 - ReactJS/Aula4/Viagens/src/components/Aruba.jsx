import styles from "../css/Aruba.module.css";
import ComponenteProps from "./ComponenteProps";
import Bandeira_aruba from "../assets/imagens/aruba.png";
import PropsForm from "../components/PropsForm";

function Aruba() {
  const variaveis = {
    lugar: "Aruba",
    texto:
      "Aruba é um país insular constituinte do Reino dos Países Baixos, localizado nas Pequenas Antilhas no sul do mar do Caribe, ao largo da costa da Venezuela.",
    bandeira: Bandeira_aruba,
  };
  return (
    <section className={styles.fundo_aruba}>
      <h1>Venha conhecer toda a Magia de Aruba</h1>
      <ComponenteProps
        lugar={variaveis.lugar}
        texto={variaveis.texto}
        bandeira={variaveis.bandeira}
      />
      <PropsForm />
    </section>
  );
}

export default Aruba;
