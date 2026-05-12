import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', background: '#1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ margin: 0, color: '#22c55e' }}>TechStore</h2>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0 }}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;