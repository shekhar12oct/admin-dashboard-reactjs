import React from 'react';

const Products = ({products}) => {
  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product.name}`);
  };
  return  <div style={styles.page}>
  <h2 style={styles.title}>Our Products</h2>
  <div style={styles.list}>
    {products.map((product) => (
      <div style={styles.card} key={product.id}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button style={styles.button} onClick={() => handleAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>
};

const styles = {
  page: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
  },
  list: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "8px",
    width: "200px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.7)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Products;
