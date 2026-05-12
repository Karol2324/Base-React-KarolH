import React, { useState } from 'react'; 
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  
  const [compras, setCompras] = useState(0);

  const productosIniciales = [
  { 
    id: 1, 
    nombre: "Laptop Pro", 
    precio: 2000, 
    stock: 10, 
    imagen: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 2, 
    nombre: "Mouse Gamer", 
    precio: 50, 
    stock: 20, 
    imagen: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 3, 
    nombre: "Teclado Mecánico", 
    precio: 100, 
    stock: 0, 
    imagen: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 4, 
    nombre: "Monitor 4K", 
    precio: 800, 
    stock: 5, 
    imagen: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 5, 
    nombre: "Audífonos Pro", 
    precio: 150, 
    stock: 12, 
    imagen: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 6, 
    nombre: "Cámara DSLR", 
    precio: 300, 
    stock: 4, 
    imagen: "https://images.pexels.com/photos/5100775/pexels-photo-5100775.jpeg?auto=compress&cs=tinysrgb&w=400" 
  }
];

  const productosDisponibles = productosIniciales.filter(p => p.stock > 0);
  const inversionTotal = productosIniciales.reduce((acc, p) => acc + p.precio, 0);
  
  return (
    <main style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', paddingBottom: '50px' }}>
      <Navbar />
      
      <header style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1>Catálogo de Productos</h1>
       
        <p style={{ fontSize: '1.2rem', color: '#22c55e' }}>
          🛒 Carrito: <strong>{compras}</strong> unidades
        </p>
      </header>
      
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
         {productosIniciales.map((producto) => (
           <ProductCard 
             key={producto.id}
             nombre={producto.nombre} 
             precio={producto.precio} 
             stock={producto.stock} 
             imagen={producto.imagen}
           
             onComprar={() => setCompras(compras + 1)}
           />
         ))}
      </section>

      
      <footer style={{ marginTop: '50px', padding: '20px', borderTop: '1px solid #334155', textAlign: 'center' }}>
        <h2>Resumen de Inventario</h2>
        <p>Inversión Total del Catálogo: <strong>${inversionTotal}</strong></p>
        <p>Productos con Stock disponible: <strong>{productosDisponibles.length}</strong> de {productosIniciales.length}</p>
      </footer>

    </main>
  );
}

export default App;