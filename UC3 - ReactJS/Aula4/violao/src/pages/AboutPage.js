import styles from './AboutPage.module.css';

function AboutPage({ assetsBase }) {
  return (
    <section className={styles.about}>
      <h1>Sobre Nós</h1>
      <div className={styles.content}>
        <img src={`${assetsBase}/loja.jpg`} alt="Equipe da loja de instrumentos" />
        <article>
          <p>
            Somos uma loja especializada em instrumentos musicais com foco em qualidade,
            atendimento humano e variedade para iniciantes e profissionais.
          </p>
          <p>
            Trabalhamos com as principais marcas do mercado e oferecemos suporte para ajudar você a
            encontrar o instrumento certo para o seu objetivo.
          </p>
          <p>
            Nossa missão é levar música para mais pessoas, com produtos confiáveis e um espaço
            acolhedor para toda a família.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutPage;
