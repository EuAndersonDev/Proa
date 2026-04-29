import styles from './ProductsPage.module.css';

function ProductsPage({ products, onOpenProduct }) {
  return (
    <section className={styles.productsPage}>
      <h1>Produtos</h1>
      <div className={styles.grid}>
        {products.map((item) => (
          <article key={item.id} className={styles.card}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button type="button" onClick={() => onOpenProduct(item.id)}>
              Ver detalhes
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
