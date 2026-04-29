import styles from './Footer.module.css';

function Footer({ assetsBase }) {
  return (
    <footer className={styles.footer}>
      <p>Nossa Loja - Instrumentos Musicais</p>
      <p>Rua TQ, 54, Lapa</p>
      <p>São Paulo - Brasil</p>
      <div className={styles.icons}>
        <img src={`${assetsBase}/whats.png`} alt="WhatsApp" />
        <img src={`${assetsBase}/insta.png`} alt="Instagram" />
        <img src={`${assetsBase}/face.png`} alt="Facebook" />
      </div>
    </footer>
  );
}

export default Footer;
