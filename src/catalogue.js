import React, { useState } from "react";
import "./catalogue.css";
const Catalogue = () => {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 50 },
    { id: 2, name: "Product 2", price: 75 },
    { id: 3, name: "Product 3", price: 100 }
  ]);

  return (
    <div>
      <h1>Catalogue</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogue;
