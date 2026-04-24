import styles from '../css/Home.module.css'
import Mala from '../assets/mala.jpg'


function Home() {
    return (
        <section className={styles.container_home}>
            <div className={styles.esquerda}>
                <img src={Mala} alt="Mala" className={styles.mala} />
            </div>

            <div className={styles.direita}>
                <h1>Encontre aqui a viagem dos seus sonhos!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laborum earum ad, delectus debitis hic nam incidunt, nobis aliquid praesentium quaerat omnis voluptatum expedita illo eaque ipsam reprehenderit sint laudantium?</p>
            </div>
        </section>
    )
}

export default Home