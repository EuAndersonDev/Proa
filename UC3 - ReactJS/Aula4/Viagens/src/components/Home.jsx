import styles from "../css/Home.module.css";
import Mala from "../assets/imagens/mala.jpg";

function Home() {
  return (
    <section className={styles.container_home}>
      <div className={styles.container}>
        <div className={styles.cont1}>
          <img src={Mala} alt="" />
        </div>
        <div className={styles.cont2}>
          <div className={styles.texts}>
            <h1>Encontre aqui a viagem dos seus sonhos!</h1>
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              repellendus maiores qui exercitationem magni repellat! Expedita
              quo et odio exercitationem? Incidunt perferendis amet illo ratione
              eos libero, nobis obcaecati recusandae!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
