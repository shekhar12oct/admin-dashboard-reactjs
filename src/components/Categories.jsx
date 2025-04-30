import React from 'react';

const Categories = ({ categoriesData }) => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {categoriesData.map((category) => (
          <div key={category.id} style={styles.card}>
            <img
              src={category.image}
              alt={category.name}
              style={styles.image}
              loading='lazy'
            />
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>{category.name}</h3>
              <p style={styles.cardDescription}>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  page: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '20px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '15px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardDescription: {
    color: '#555',
    fontSize: '0.95rem',
  },
};

export default Categories;
