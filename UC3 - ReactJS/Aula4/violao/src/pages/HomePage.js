import styles from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';

function HomePage({ assetsBase, products, onOpenProduct }) {
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper}>
      <div className={styles.highlight}>
        <article className={styles.textCard}>
          <h2>Nossa Loja - Instrumentos Musicais</h2>
          <p>
            Se você ama música e busca qualidade, aqui é o seu lugar. Trabalhamos com violões,
            guitarras, baterias e diversos instrumentos para todos os estilos.
          </p>
          <p>
            Todos os itens possuem selo das melhores marcas. Escolha o seu favorito e leve música
            para a sua casa.
          </p>
        </article>
        <img src={`${assetsBase}/loja.jpg`} alt="Interior da loja com instrumentos" />
      </div>

      <div className={styles.productsGrid}>
        {products.map((item) => (
          <article key={item.id} className={styles.product}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button type="button" onClick={() => onOpenProduct(item.id)}>
              Ver produto
            </button>
          </article>
        ))}
      </div>

      <div className={styles.location}>
        <img src={`${assetsBase}/guitarras_header.jpg`} alt="Mapa de localização da loja" />
        <article className={styles.textCard}>
          <h2>Nosso Endereço</h2>
          <p>
            Estamos na Rua TQ, 54 - Pompéia, próximo ao teatro Cacilda Becker, em um espaço
            preparado para receber toda a família.
          </p>
          <button type="button" onClick={() => navigate('/sobre')}>
            Ver mais sobre nós
          </button>
        </article>
      </div>
    </section>
  );
}

export default HomePage;
