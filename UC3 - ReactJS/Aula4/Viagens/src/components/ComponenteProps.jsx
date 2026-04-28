import styles from "../css/ComponenteProps.module.css";
import React from "react";


function ComponenteProps({ lugar, texto, bandeira }) {
  return (
    <div className={styles.corpo_texto}>
      <h2>Venha conhecer esse lugar maravilhoso!</h2>
      <h2>{lugar}</h2>
      <p>{texto}</p>
      <img
        className={styles.imagem_props}
        src={bandeira}
        alt="Bandeira do pais"
      />
    </div>
  );
}

export default ComponenteProps;
