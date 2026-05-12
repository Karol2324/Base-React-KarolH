// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ nombre, precio, stock, imagen, onComprar }) => {
  return (
    <article style={{ border: '1px solid #334155', padding: '15px', borderRadius: '12px', width: '220px', background: '#0f172a', textAlign: 'center' }}>
      <img src={imagen} alt={nombre} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
      <h3 style={{ color: '#f8fafc' }}>{nombre}</h3>
      <p style={{ color: '#94a3b8' }}>Precio: <strong>${precio}</strong></p>
      <p style={{ color: stock > 0 ? '#22c55e' : '#ef4444' }}>
        {stock > 0 ? `Disponibles: ${stock}` : 'Agotado'}
      </p>
      {/* Botón Comprar de la diapositiva 18 */}
      <button style={{ background: '#22c55e', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>
        Comprar
      </button>
    </article>
  );
};

export default ProductCard;