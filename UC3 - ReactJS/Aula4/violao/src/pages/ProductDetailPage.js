import styles from './ProductDetailPage.module.css';

function ProductDetailPage({ product, onBackToProducts }) {
  if (!product) {
    return (
      <section className={styles.detail}>
        <h1>Produto não encontrado</h1>
        <button type="button" onClick={onBackToProducts}>
          Voltar para produtos
        </button>
      </section>
    );
  }

  return (
    <section className={styles.detail}>
      <button type="button" className={styles.backButton} onClick={onBackToProducts}>
        ← Voltar para produtos
      </button>
      <div className={styles.content}>
        <img src={product.image} alt={product.name} />
        <article>
          <h1>{product.name}</h1>
          <p className={styles.price}>{product.price}</p>
          <p>{product.description}</p>
          <p>
            Ideal para quem está começando ou quer melhorar o setup. Produto com ótima relação
            custo-benefício e qualidade sonora.
          </p>
        </article>
      </div>
    </section>
  );
}

export default ProductDetailPage;
